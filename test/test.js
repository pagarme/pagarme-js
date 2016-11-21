var addInput = function(id, form) {
	form.append('<input id="' + id + '" />');
};

describe('PagarMe', function() {
	var form = $('<form></form>');

	before(function() {
		PagarMe.encryption_key = 'ek_test_IFkuxKMI3ticDIgoQvpJeWYCMe76c2';

		addInput('card_number', form);
		addInput('card_holder_name', form);
		addInput('card_expiration_month', form);
		addInput('card_expiration_year', form);
		addInput('card_cvv', form);
	});

	describe('.CreditCard', function() {
		describe('#getBrand()', function() {
			var card;

			before(function() {
				card = new PagarMe.CreditCard();
			});

			it('should return null for null cardNumbers.', function() {
				(card.brand() === null).should.be.true;
			});

			it('should identify visa card numbers.', function() {
				card.cardNumber = '4111 1111 1111 1111';
				card.brand().should.be.equal('visa');
			});

			it('should identify elo card numbers.', function() {
				card.cardNumber = '6363680000457013';
				card.brand().should.be.equal('elo');

				card.cardNumber = '4389350000457013';
				card.brand().should.be.equal('elo');

				card.cardNumber = '5041750000457013';
				card.brand().should.be.equal('elo');

				card.cardNumber = '4514160000457013';
				card.brand().should.be.equal('elo');

				card.cardNumber = '6362970000457013';
				card.brand().should.be.equal('elo');

				card.cardNumber = '506734882114864';
				card.brand().should.be.equal('elo');

				card.cardNumber = '509005334509218';
				card.brand().should.be.equal('elo');

			});

			it('should identify discover card numbers.', function() {
				card.cardNumber = '6011020000245045';
				card.brand().should.be.equal('discover');

				card.cardNumber = '6221020000245045';
				card.brand().should.be.equal('discover');

				card.cardNumber = '6411020000245045';
				card.brand().should.be.equal('discover');

				card.cardNumber = '6511020000245045';
				card.brand().should.be.equal('discover');
			});

			it('should identify diners card numbers.', function() {
				card.cardNumber = '30190102462661';
				card.brand().should.be.equal('diners');

				card.cardNumber = '30590102462661';
				card.brand().should.be.equal('diners');

				card.cardNumber = '36490102462661';
				card.brand().should.be.equal('diners');

				card.cardNumber = '38490102462661';
				card.brand().should.be.equal('diners');
			});

			it('should identify amex card numbers.', function() {
				card.cardNumber = '348149451448134';
				card.brand().should.be.equal('amex');

				card.cardNumber = '372566898118716';
				card.brand().should.be.equal('amex');
			});

			it('should identify aura card numbers.', function() {
				card.cardNumber = '508149451448134';
				card.brand().should.be.equal('aura');

				card.cardNumber = '5067970000457013';
				card.brand().should.be.equal('aura');

			});

			it('should identify jcb card numbers.', function() {
				card.cardNumber = '3528256349013271';
				card.brand().should.be.equal('jcb');
			});

			it('should identify hipercard card numbers.', function() {
				card.cardNumber = '6028256349013271';
				card.brand().should.be.equal('hipercard');
			});

			it('should identify mastercard card numbers.', function() {
				card.cardNumber = '5488930079839278';
				card.brand().should.be.equal('mastercard');

				card.cardNumber = '5578006428616906';
				card.brand().should.be.equal('mastercard');

				card.cardNumber = '5111268739494928';
				card.brand().should.be.equal('mastercard');
			});
		});

		describe('#fieldErrors()', function() {
			var card;

			before(function() {
				card = new PagarMe.CreditCard();
			});

			it('should contain card number errors.', function() {
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_number');

				card.cardNumber = '4111 1111 1111 1112';
				errors = card.fieldErrors();
				errors.should.have.ownProperty('card_number');

				card.cardNumber = '4111111111111112';
				errors = card.fieldErrors();
				errors.should.have.ownProperty('card_number');

				card.cardNumber = '4111 1111 1111 1111';
				errors = card.fieldErrors();
				errors.should.not.have.ownProperty('card_number');

				card.cardNumber = '4111111111111111';
				errors = card.fieldErrors();
				errors.should.not.have.ownProperty('card_number');
			});

			it('should contain hoder name errors.', function() {
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_holder_name');

				card.cardHolderName = '';
				errors = card.fieldErrors();
				errors.should.have.ownProperty('card_holder_name');

				card.cardHolderName = '1234';
				errors = card.fieldErrors();
				errors.should.have.ownProperty('card_holder_name');
			});

			it('should contain expiration month errors.', function() {
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_expiration_month');

				card.cardExpirationMonth = '13';
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_expiration_month');

				card.cardExpirationMonth = '0';
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_expiration_month');

				card.cardExpirationMonth = '-1';
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_expiration_month');

				card.cardExpirationMonth = 'aa';
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_expiration_month');
			});

			it('should contain expiration year errors.', function() {
				var now = new Date();

				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_expiration_year');

				card.expirationYear = '201';
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_expiration_year');

				card.expirationYear = '';
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_expiration_year');

				card.expirationYear = '20145';
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_expiration_year');
			});

			it('should contain cvv erorrs.', function() {
				var errors = card.fieldErrors();
				errors.should.have.ownProperty('card_cvv');

				//All brands' cvv (except amex) should have length of 3
				card.cardNumber = '4111111111111111';

				card.cvv = '0033';
				errors = card.fieldErrors();
				errors.should.have.ownProperty('card_cvv');

				card.cvv = '00';
				errors = card.fieldErrors();
				errors.should.have.ownProperty('card_cvv');

				//Amex's cvv should have 4 digits
				card.cardNumber = '343467796144134';

				card.cvv = '000';
				errors = card.fieldErrors();
				errors.should.have.ownProperty('card_cvv');

				card.cvv = '00';
				errors = card.fieldErrors();
				errors.should.have.ownProperty('card_cvv');

				card.cvv = '00000';
				errors = card.fieldErrors();
				errors.should.have.ownProperty('card_cvv');
			});

			it('should not contain errors on valid values.', function() {
				card.cardNumber = '4111111111111111';
				card.cardCVV = '000';
				card.cardExpirationMonth = '06';
				card.cardExpirationYear = '2018';
				card.cardHolderName = 'John Appleseed';

				var errors = card.fieldErrors();
				errors.should.be.empty;

				card.cardNumber = '343467796144134';
				card.cardCVV = '0000';
				card.expirationMonth = 6;
				card.expirationYear = 18;

				errors = card.fieldErrors();
				errors.should.be.empty;
			});
		});

		describe('#getCardHash', function() {
			var card, cardHash;

			before(function() {
				card = new PagarMe.CreditCard();
				card.cardNumber = '4111111111111111';
				card.cardCVV = '123';
				card.cardExpirationMonth = '10';
				card.cardExpirationYear = '18';
				card.cardHolderName = 'John Appleseed';
			});

			it('should return a response.', function(done) {
				card.generateHash(function(hash) {
					hash.should.be.ok;
					cardHash = hash;
					done();
				});
			});

			it('should be able to create a transaction with the hash.', function(done) {
				$.post('https://api.pagar.me/1/transactions', {
					api_key: 'ak_test_Rw4JR98FmYST2ngEHtMvVf5QJW7Eoo',
					card_hash: cardHash,
					amount: 100,
					payment_method: 'credit_card'
				}).done(function(data) {
					data.card_brand.should.be.equal('visa');
				}).fail(function() {
					console.log(arguments);
					throw 'Fail';
				}).always(function() {
					done();
				});
			});
		});
	});
});
