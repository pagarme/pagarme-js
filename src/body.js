// Helpers
var ieVersion = function () {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if ( msie > 0 )      // If Internet Explorer, return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
	else                 // If another browser, return 0
		return 0;
};

var objectSize = function(obj) {
	var objectSize = 0;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			objectSize++;
		}
	}
	return objectSize;
};

var jsonpRequest = function (url, callback) {
	var now = new Date();
	var functionName = 'pagarme_jsonp_' + now.getTime();

	global[functionName] = function(json) {
		if (json.status == 200) {
			callback(json.body);
		}

		delete global[functionName];
	};

	if (url.indexOf('?') > -1) {
		url += '&callback=' + functionName;
	} else {
		url += '?callback=' + functionName;
	}

	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;

	document.getElementsByTagName('head')[0].appendChild(script);
};

var ajaxRequest = function (url, callback) {
	var httpRequest,
	xmlDoc;

	if (window.XMLHttpRequest) {
		httpRequest = new XMLHttpRequest();
	} else {
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState != 4) {
			return;
		}

		if (httpRequest.status != 200 && httpRequest.status != 304) {
			return;
		}
		callback(JSON.parse(httpRequest.responseText));
	};

	httpRequest.open("GET", url, true);
	httpRequest.send(null);
};

var request = function(params, callback) {
	var ie = ieVersion();
	var baseUrl = 'https://api.pagar.me/1';

	params.query = params.query || {};

	if (ie && ie <= 9) {
		var queryParams = {};

		for (var key in params.query) {
			queryParams['query[' + key + ']'] = params.query[key];
		}

		queryParams.method = 'get';
		queryParams.path = encodeURIComponent(params.path);

		var url = baseUrl + '/jsonp' + queryString(queryParams);
		jsonpRequest(url, callback);
	} else {
		var url = baseUrl + params.path + queryString(params.query);
		ajaxRequest(url, callback);
	}
};

var queryString = function(obj) {
	if (!obj || !objectSize(obj)) {
		return '';
	}

	return '?' + paramsAsString(obj);
};

var paramsAsString = function(obj) {
	var parametersArray = [];
	for(var key in obj) {
		// Values should be on UTF-8
		parametersArray.push(key + "=" + unescape(encodeURIComponent(obj[key])));
	}

	return parametersArray.join("&");
};


// Credit card

PagarMe.CreditCard = function PagarMeCreditCard() {
	this.cardNumber = null;
	this.cardHolderName = null;
	this.cardExpirationMonth = null;
	this.cardExpirationYear = null;
	this.cardCVV = null;
};

PagarMe.CreditCard.prototype.brand = function() {
	if(!this.cardNumber) {
		return null;
	}

	var cardNumber = this.cardNumber.replace(/[^0-9]/g, '');

	var cardStartRules = [
		['elo', ['636368', '438935', '504175', '451416', '636297', '5067', '4576', '4011']],
		['discover', ['6011', '622', '64', '65']],
		['diners', ['301', '305', '36', '38']],
		['amex', ['34', '37']],
		['aura', ['50']],
		['jcb', ['35']],
		['hipercard', ['38', '60']],
		['visa', ['4']],
		['mastercard', ['5']]
	];

	for (var i = 0; i < cardStartRules.length; i++) {
		var cardStartRule = cardStartRules[i][1];
		for (var j = 0; j < cardStartRule.length; j++) {
			var start = cardStartRule[j];
			if (cardNumber.substring(0, start.length) == start) {
				return cardStartRules[i][0];
			}
		}
	}

	return 'unknown';
};

PagarMe.CreditCard.prototype.fieldErrors = function() {
	var errors = {};

	if (!PagarMe.Validator.isValidCardNumber(this.cardNumber)) {
		errors['card_number'] = 'Número do cartão inválido.';
	}

	if (!this.cardHolderName || this.cardHolderName.length == 0 || !isNaN(this.cardHolderName) || unescape(this.cardHolderName).trim().split(' ').length <= 1) {
		errors['card_holder_name'] = 'Nome do portador inválido.';
	}

	if (!PagarMe.Validator.isValidExpirationMonth(this.cardExpirationMonth)) {
		errors['card_expiration_month'] = 'Mês de expiração inválido.';
	}

	if (!PagarMe.Validator.isValidExpirationYear(this.cardExpirationYear)) {
		errors['card_expiration_year'] = 'Ano de expiração inválido.';
	}

	if (!PagarMe.Validator.isValidCvv(this.cardCVV, this.brand())) {
		errors['card_cvv'] = 'Código de segurança inválido.';
	}

	return errors;
};

PagarMe.CreditCard.prototype.stringifyParameters_ = function() {
	var encryptionHash = {
		'card_number': this.cardNumber,
		'card_holder_name': this.cardHolderName,
		'card_expiration_date': "" + (this.cardExpirationMonth.length == 1 ? "0" : "") + this.cardExpirationMonth + ((this.cardExpirationYear.length > 2) ? this.cardExpirationYear.substr(-2) : this.cardExpirationYear),
		'card_cvv': this.cardCVV
	};

	if(PagarMe.sessionId) {
		encryptionHash['session_id'] = PagarMe.sessionId;
	}

	var parametersArray = [];
	for(var key in encryptionHash) {
		// Values should be on UTF-8
		parametersArray.push(key + "=" + unescape(encodeURIComponent(encryptionHash[key])));
	}

	return parametersArray.join("&");
};

PagarMe.CreditCard.prototype.generateHash = function(callback) {
	if (!PagarMe.encryption_key) {
		alert('Erro: Você não configurou sua encryption_key. Por favor, sete a chave em PagarMe.encryption_key. Para mais informações, visite: https://pagar.me/docs/restful-api/card-hash/');
		return;
	}

	if (PagarMe.encryption_key.substring(0, 2) == "ak") {
		alert("Erro: Você está usando a api_key ao invés da encryption_key. Por favor, verifique se a chave inserida é a encryption_key disponível em seu dashboard. Para mais informações, visite: https://pagar.me/docs/restful-api/card-hash/");
		return;
	}

	var stringifiedParameters = this.stringifyParameters_();

	request({
		path: '/transactions/card_hash_key',
		query: {
			encryption_key: encodeURIComponent(PagarMe.encryption_key)
		}
	}, function(data) {
		var crypt = new JSEncrypt();
		crypt.setPublicKey(data['public_key']);
		var encryptedString = data.id + "_" + crypt.encrypt(stringifiedParameters);

		callback(encryptedString);
	});
};

PagarMe.creditCard = PagarMe.CreditCard;
PagarMe.creditCard.prototype = PagarMe.CreditCard.prototype;
