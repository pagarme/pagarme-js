<a href="https://travis-ci.org/pagarme/pagarme-js" >
  <img src="https://travis-ci.org/pagarme/pagarme-js.svg?branch=master" align="left" />
</a>
<br>

# Introdução

Essa SDK foi construída com o intuito de torná-la flexível, de forma que todos possam utilizar todas as features, de todas as versões de API.

Esta biblioteca cobre todas as suas necessidades de integração com Pagar.me, fornecendo:

* Uma interface limpa baseada em Promise para todos os endpoints na API do Pagarme
* Uma maneira rápida de gerar hashes de cartão
* Validação de assinatura de postback
* Validações de documentos (CPF, CNPJ e outros)

Você pode acessar a documentação oficial do Pagar.me acessando esse [link](https://docs.pagar.me).

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
  - [Node.js](#Node.js)
  - [Browser (CommonJS)](#Browser-CommonJS)
  - [Browser (Global Variable)](#Browser-Global-Variable)
  - [Client API](#Client-API)
    - [Usando connect](#Usando-connect)
    - [Usando API key](#Usando-API-key)
    - [Usando encryption key](#Usando-encryption-key)
    - [Usando email e senha](#Usando-email-e-senha)
  - [Iniciando o SDK](#Iniciando-o-SDK)
  - [Usando os testes da biblioteca](#Usando-os-testes-da-biblioteca)
- [Transações](#transações)
  - [Criando uma transação](#criando-uma-transação)
  - [Capturando uma transação](#capturando-uma-transação)
  - [Estornando uma transação](#estornando-uma-transação)
    - [Estornando uma transação parcialmente](#estornando-uma-transação-parcialmente)
    - [Estornando uma transação com split](#estornando-uma-transação-com-split)
  - [Retornando transações](#retornando-transações)
  - [Retornando uma transação](#retornando-uma-transação)
  - [Retornando recebíveis de uma transação](#retornando-recebíveis-de-uma-transação)
  - [Retornando um recebível de uma transação](#retornando-um-recebível-de-uma-transação)
  - [Retornando o histórico de operações de uma transação](#retornando-o-histórico-de-operações-de-uma-transação)
  - [Notificando cliente sobre boleto a ser pago](#notificando-cliente-sobre-boleto-a-ser-pago)
  - [Retornando eventos de uma transação](#retornando-eventos-de-uma-transação)
  - [Calculando Pagamentos Parcelados](#calculando-pagamentos-parcelados)
  - [Testando pagamento de boletos](#testando-pagamento-de-boletos)
- [Estornos](#estornos)
  - [Retornando estornos](#retornando-estornos)
  - [Cancelando estornos de boleto](#cancelando-estorno-de-boleto)
- [Cartões](#cartões)
  - [Criando cartões](#criando-cartões)
  - [Retornando cartões](#retornando-cartões)
  - [Retornando um cartão](#retornando-um-cartão)
- [Planos](#planos)
  - [Criando planos](#criando-planos)
  - [Retornando planos](#retornando-planos)
  - [Retornando um plano](#retornando-um-plano)
  - [Atualizando um plano](#atualizando-um-plano)
- [Assinaturas](#assinaturas)
  - [Criando assinaturas](#criando-assinaturas)
  - [Split com assinatura](#split-com-assinatura)
  - [Retornando uma assinatura](#retornando-uma-assinatura)
  - [Retornando assinaturas](#retornando-assinaturas)
  - [Atualizando uma assinatura](#atualizando-uma-assinatura)
  - [Cancelando uma assinatura](#cancelando-uma-assinatura)
  - [Transações de assinatura](#transações-de-assinatura)
  - [Pulando cobranças](#pulando-cobranças)
- [Postbacks](#postbacks)
  - [Retornando postbacks](#retornando-postbacks)
  - [Retornando um postback](#retornando-um-postback)
  - [Reenviando um Postback](#reenviando-um-postback)
- [Saldo do recebedor principal](#saldo-do-recebedor-principal)
- [Operações de saldo](#operações-de-saldo)
  - [Histórico das operações](#histórico-das-operações)
  - [Histórico de uma operação específica](#histórico-de-uma-operação-específica)
- [Recebível](#recebível)
  - [Retornando recebíveis](#retornando-recebíveis)
  - [Retornando um recebível](#retornando-um-recebível)
- [Transferências](#transferências)
  - [Criando uma transferência](#criando-uma-transferência)
  - [Retornando transferências](#retornando-transferências)
  - [Retornando uma transferência](#retornando-uma-transferência)
  - [Cancelando uma transferência](#cancelando-uma-transferência)
- [Antecipações](#antecipações)
  - [Criando uma antecipação](#criando-uma-antecipação)
  - [Obtendo os limites de antecipação](#obtendo-os-limites-de-antecipação)
  - [Confirmando uma antecipação building](#confirmando-uma-antecipação-building)
  - [Cancelando uma antecipação pending](#cancelando-uma-antecipação-pending)
  - [Deletando uma antecipação building](#deletando-uma-antecipação-building)
  - [Retornando antecipações](#retornando-antecipações)
- [Contas bancárias](#contas-bancárias)
  - [Criando uma conta bancária](#criando-uma-conta-bancária)
  - [Retornando uma conta bancária](#retornando-uma-conta-bancária)
  - [Retornando contas bancárias](#retornando-contas-bancárias)
- [Recebedores](#recebedores)
  - [Criando um recebedor](#criando-um-recebedor)
  - [Retornando recebedores](#retornando-recebedores)
  - [Retornando um recebedor](#retornando-um-recebedor)
  - [Atualizando um recebedor](#atualizando-um-recebedor)
  - [Saldo de um recebedor](#saldo-de-um-recebedor)
  - [Operações de saldo de um recebedor](#operações-de-saldo-de-um-recebedor)
  - [Operação de saldo específica de um recebedor](#operação-de-saldo-específica-de-um-recebedor)
- [Clientes](#clientes)
  - [Criando um cliente](#criando-um-cliente)
  - [Retornando clientes](#retornando-clientes)
  - [Retornando um cliente](#retornando-um-cliente)
- [Análise de Fraude](#análise-de-fraude)
  - [Retornando análises antifraude](#retornando-análises-antifraude)
  - [Retornando uma análise antifraude](#Retornando-uma-análise-antifraude)
- [Links de pagamento](#links-de-pagamento)
  - [Criando um link de pagamento](#criando-um-link-de-pagamento)
  - [Retornando links de pagamento](#retornando-links-de-pagamento)
  - [Retornando um link de pagamento](#retornando-um-link-de-pagamento)
  - [Cancelando um link de pagamento](#cancelando-um-link-de-pagamento)
  - [Orders (pedidos do Link de Pagamento)](#Orders-pedidos-do-Link-de-Pagamento)
    - [Retornando todos os pedidos](#Retornando-todos-os-pedidos)
    - [Retornando um pedido](#Retornando-um-pedido)
- [Buscas avançadas (Elasticsearch)](#buscas-avançadas-elasticsearch)
  - [Realizando uma busca](#realizando-uma-busca)
- [Regras de Split](#regras-de-split)
  - [Retornando as regras de divisão de uma transação](#retornando-as-regras-de-divisão-de-uma-transação)
  - [Retornando uma regra de divisão específica](#Retornando-uma-regra-de-divisão-específica)  
- [Contribuindo](#Contribuindo)


## Instalação

Primeiro, instale-o:

```bash
yarn add pagarme
```

Ou usando npm:

```bash
npm install pagarme
```

## Configuração

A biblioteca pode ser usada de três maneiras::

### Node.js

Importar:

```js
import pagarme from 'pagarme'
```

Também funciona usando `require`:

```js
const pagarme = require('pagarme')
```

### Browser (CommonJS)

Importe a construção do browser:

```js
import pagarme from 'pagarme/browser'
```

Também funciona usando `require`:

```js
const pagarme = require('pagarme/browser')
```

### Browser (Global Variable)

Você também pode usar a versão mais recente de nosso CDN e importar a compilação diretamente em seu HTML:

```html
<script src="https://assets.pagar.me/pagarme-js/4.11/pagarme.min.js" />
```

A biblioteca estará disponível como variável global `pagarme`.

### Client API

Todos os endpoints da API REST do Pagar.me são protegidos no objeto `client`. Cada
chamada de função emitida para `client` irá retornar uma` Promise` que representa e
gerencia o ciclo de vida do resultado.

#### Usando `connect`

Quando você chama `connect`, uma` Promise` que resolve para um `cliente` ou um
o erro será retornado. Se ocorrer um erro de autenticação, você pode pegar
o erro com a interface `Promise`:

```javascript
import pagarme from 'pagarme'

pagarme.client.connect({ email: 'user@email.com', password: '123456' })
  .then(client => client.transactions.all())
  .then(transactions => console.log(transactions))
  .catch(error => console.error(error))
```

Como toda a biblioteca é baseada em promessas, você também pode usar geradores ES6
com cada chamada para tornar o código mais procedural:

```javascript
import pagarme from 'pagarme'

let client

try {
  client = yield pagarme.client.connect({
    email: 'user@email.com',
    password: '123456'
  })
} catch (err) {
  console.log('Authentication error')
}

try {
  const transactions = yield client.transactions.all()
  console.log(transactions)
} catch (err) {
  console.log('Error fetching transactions')
}
```

A desvantagem dessa abordagem é que você precisa lidar com erros usando try / catch.

O Pagar.me autoriza clientes de várias formas. Esta biblioteca trata de todos
estratégias de autenticação disponíveis:

#### Usando API key

```javascript
import pagarme from 'pagarme'

pagarme.client.connect({ api_key: 'ak_test_y7jk294ynbzf93' })
  .then(client => client.transactions.all())
  .then(transactions => console.log(transactions))
```

> :warning: Nunca use chaves de API no navegador; em vez disso, você deve usar chaves de criptografia.

#### Usando encryption key

```javascript
import pagarme from 'pagarme'

const card = {
  card_number: '4111111111111111',
  card_holder_name: 'abc',
  card_expiration_date: '1225',
  card_cvv: '123',
}

pagarme.client.connect({ encryption_key: 'ek_test_y7jk294ynbzf93' })
  .then(client => client.security.encrypt(card))
  .then(card_hash => console.log(card_hash))
```

#### Usando email e senha

```javascript
import pagarme from 'pagarme'

pagarme.client.connect({ email: 'user@email.com', password: '123456' })
  .then(client => client.transactions.all())
  .then(transactions => console.log(transactions))
```

### Iniciando o SDK

Para construir a biblioteca, use `npm start`.

* O build do Node.js é produzido dentro do diretório `dist`.
* A construção do navegador é produzida dentro do diretório `navegador`.

### Usando os testes da biblioteca

Para executar os testes da biblioteca, use `npm test`.

> Para executar testes, você precisa exportar a variável de ambiente `API_KEY` com o seu
Chave API. Ao enviar um PR, Travis já o terá exportado.

## Transações

Nesta seção será explicado como utilizar transações no Pagar.me com essa biblioteca.

### Criando uma transação

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transactions.create({
    "amount": 21000,
    "card_number": "4111111111111111",
    "card_cvv": "123",
    "card_expiration_date": "0922",
    "card_holder_name": "Morpheus Fishburne",
    "customer": {
      "external_id": "#3311",
      "name": "Morpheus Fishburne",
      "type": "individual",
      "country": "br",
      "email": "mopheus@nabucodonozor.com",
      "documents": [
        {
          "type": "cpf",
          "number": "30621143049"
        }
      ],
      "phone_numbers": ["+5511999998888", "+5511888889999"],
      "birthday": "1965-01-01"
    },
    "billing": {
      "name": "Trinity Moss",
      "address": {
        "country": "br",
        "state": "sp",
        "city": "Cotia",
        "neighborhood": "Rio Cotia",
        "street": "Rua Matrix",
        "street_number": "9999",
        "zipcode": "06714360"
      }
    },
    "shipping": {
      "name": "Neo Reeves",
      "fee": 1000,
      "delivery_date": "2000-12-21",
      "expedited": true,
      "address": {
        "country": "br",
        "state": "sp",
        "city": "Cotia",
        "neighborhood": "Rio Cotia",
        "street": "Rua Matrix",
        "street_number": "9999",
        "zipcode": "06714360"
      }
    },
    "items": [
      {
        "id": "r123",
        "title": "Red pill",
        "unit_price": 10000,
        "quantity": 1,
        "tangible": true
      },
      {
        "id": "b123",
        "title": "Blue pill",
        "unit_price": 10000,
        "quantity": 1,
        "tangible": true
      }
    ]
  }))
  .then(transaction => console.log(transaction))
```

### Capturando uma transação

```js
//Usando ID da transação
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transactions.capture({ id: 'ID_TRANSAÇÃO' }))

// Usando Promise
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => {
    client.transactions.create({
      capture: false,
      amount: 100,
      card_number: '4111111111111111',
      card_holder_name: 'abc',
      card_expiration_date: '1225',
      card_cvv: '123',
    })
      .then(client.transactions.capture)
  })
```

### Estornando uma transação

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transactions.refund({
    id: ID_TRANSAÇÃO
  }))
```

Esta funcionalidade também funciona com estornos parciais, ou estornos com split. Por exemplo:

#### Estornando uma transação parcialmente

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transactions.find({ id: 'ID_TRANSAÇÃO' }))
	.then(transaction => client.transactions.refund({
	    	id: transaction.id,
      	amount: VALOR_DO_ESTORNO
      })
  )
```

#### Estornando uma transação com split

```js
//Exmeplo de cartão de crédito
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client =>
    {
      client.transactions.find({ id: 'ID_TRANSAÇÃO'})
      .then(transaction => {
        console.log(transaction.id)
        client.transactions.refund({
              id: transaction.id,
              amount: VALOR_DO_ESTORNO,
              split_rules: [
                {
                  id: "ID_SPLIT_RULE",
                  recipient_id: "ID_RECEBEDOR",
                  charge_processing_fee: true,
                  liable: true,
                  percentage: 50
                },
                {
                  id: "ID_SPLIT_RULE",
                  recipient_id: "ID_RECEBEDOR",
                  charge_processing_fee: false,
                  liable: false,
                  percentage: 50
                }
              ]
          })
      })
    })

//Exemplo de boleto 

const pagarme = require('pagarme')

pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client =>
    {
      client.transactions.find({ id: 'ID_TRANSAÇÃO'})
      .then(transaction => {
        console.log(transaction.id)
        client.transactions.refund({
              id: transaction.id,
              amount: VALOR_DO_ESTORNO,
              split_rules: [
                {
                  id: "ID_SPLIT_RULE",
                  recipient_id: "ID_RECEBEDOR",
                  percentage: 50
                },
                {
                  id: "ID_SPLIT_RULE",
                  recipient_id: "ID_RECEBEDOR",
                  percentage: 50,
		              charge_processing_fee: true
                }
              ],
      	      bank_account:{
            		agencia: "0932", 
            		agencia_dv: "5", 
            		bank_code: "341", 
            		conta: "58054", 
            		conta_dv: "1", 
            		document_number: "26268738888", 
            		legal_name: "API BANK ACCOUNT"
      	      }
          })
      })
    })
    .catch(error => console.log(JSON.stringify(error)))
```

### Retornando transações

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transactions.all())
  .then(transactions => console.log(transactions))
```

### Retornando uma transação

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transactions.find({ id: 'ID_TRANSAÇÃO' }))
	.then(transaction => console.log(transaction))
```

### Retornando recebíveis de uma transação

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.payables.find({
    transactionId: 'ID_TRANSAÇÃO'
  }))
  .then(payables => console.log(payables))
```

### Retornando um recebível de uma transação

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.payables.find({
    transactionId: 'ID_TRANSAÇÃO',
  	id: 'ID_RECEBIVEL'
  }))
  .then(payables => console.log(payables))
```

### Retornando o histórico de operações de uma transação

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.gatewayOperations.find({ transactionId: ID_TRANSAÇÃO }))
  .then(gatewayOperations => console.log(gatewayOperations))
```

### Notificando cliente sobre boleto a ser pago

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transactions.collectPayment({
    id: ID_TRANSAÇÃO,
    email: 'email=aardvark.silva@pagar.me',
  }))
```

### Retornando eventos de uma transação

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.events.find({ transactionId: ID_TRANSAÇÃO }))
	.then(events => console.log(events))
```

### Calculando pagamentos parcelados

Essa rota não é obrigatória para uso. É apenas uma forma de calcular pagamentos parcelados com o Pagar.me.

Para fins de explicação, utilizaremos os seguintes valores:

`amount`: 1000,
`free_installments`: 4,
`max_installments`: 12,
`interest_rate`: 3

O parâmetro `free_installments` decide a quantidade de parcelas sem juros. Ou seja, se ele for preenchido com o valor `4`, as quatro primeiras parcelas não terão alteração em seu valor original.

Nessa rota, é calculado juros simples, efetuando o seguinte calculo:

valorTotal = valorDaTransacao * ( 1 + ( taxaDeJuros * numeroDeParcelas ) / 100 )

Então, utilizando os valores acima, na quinta parcela, a conta ficaria dessa maneira:

valorTotal = 1000 * (1 + (3 * 5) / 100)

Então, o valor a ser pago na quinta parcela seria de 15% da compra, totalizando 1150.

Você pode usar o código abaixo caso queira utilizar essa rota:

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transactions.calculateInstallmentsAmount({
    id: 1234,
    max_installments: 3,
    free_installments: 2,
    interest_rate: 13,
    amount: 1000
  }))
  .then(installments => console.log(installments))
```

### Testando pagamento de boletos

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => {
    client.transactions.find({ id: 'ID_TRANSAÇÃO' })
      .then(transaction => {
        client.transactions.update({
          id: transaction.id,
          status: 'paid',
        })
      })
  })
```

## Estornos

É possível visualizar todos os estornos que ocorreram em sua conta, basta utilizar o código abaixo:

### Retornando Estornos

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.refunds.find({}))
  .then(refunds => console.log(refunds))
```

### Cancelamento Estorno de Boleto

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.refunds.cancel({
    id: 'ID_ESTORNO'
  }))
  .then(refunds => console.log(refunds))
```

## Cartões

Sempre que você faz uma requisição através da nossa API, nós guardamos as informações do portador do cartão, para que, futuramente, você possa utilizá-las em novas cobranças, ou até mesmo implementar features como one-click-buy.

### Criando cartões

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.cards.create({
    card_number: '4018720572598048',
    card_holder_name: 'Aardvark Silva',
    card_expiration_date: '1122',
    card_cvv: '123',
  }))
  .then(card => console.log(card.id))
```

### Retornando cartões

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.cards.all())
  .then(cards => console.log(cards))
```

### Retornando um cartão

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.cards.find({ id: 'ID_CARTÃO' }))
  .then(card => console.log(card))
```

## Planos

Representa uma configuração de recorrência a qual um cliente consegue assinar.
É a entidade que define o preço, nome e periodicidade da recorrência

### Criando planos

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.plans.create({
      amount: 15000,
      days: 30,
      name: 'The Pro Plan - Platinum  - Best Ever',
      payment_methods: ['boleto', 'credit_card']
  }))
  .then(plan => console.log(plan))
```

### Retornando planos

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.plans.all({ count: 10, page: 1 }))
  .then(plans => console.log(plans))
```

### Retornando um plano

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.plans.find({ id: ID_PLANO }))
  .then(plan => console.log(plan))
```

### Atualizando um plano

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.plans.update({
    id: ID_PLANO,
    name: 'The Pro Plan - Susan',
    trial_days: '7'
	}))
  .then(plan => console.log(plan))
```

## Assinaturas

### Criando assinaturas

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.subscriptions.create({
    plan_id: 12783,
    card_id: 'CARD_ID',
    payment_method:'credit_card',
    customer: {
      email: 'daenerys.targaryen@gmail.com',
      name: 'Daenerys Targaryen',
      document_number: '18152564000105',
      address: {
        zipcode: '04571020',
        neighborhood: 'Dragon Village',
        street: 'Rua Drogon',
        street_number: '240'
    },
      phone: {
        number: '987654321',
        ddd: '11'
        }
    }
    }))
  .then(subscription => console.log(subscription))
```

### Split com assinatura

```js
pagarme.client.connect({ api_key: "SUA API KEY" })
.then( client => {

    client.subscriptions.create({
      plan_id: "ID_PLANO",
      card_number: '4111111111111111',
      card_holder_name: 'Customer Teste',
      card_expiration_date: '1123',
      card_cvv: '123',
      payment_method: 'credit_card',
      customer: {
        document_number: '18152564000105',
        name: 'Customer Teste',
        email: 'customer@email.com',
        born_at: '17071996',
        gender: 'M',
        address: {
          street: 'Rua Fidêncio Ramos',
          complementary: 'apto',
          street_number: '308',
          neighborhood: 'pinheiros',
          city: 'São Paulo',
          state: 'SP',
          zipcode: '04551010',
          country: 'Brasil'
        },
        phone: {
          ddd: '11',
          number: '999887766'
        }
      },
      split_rules: [
        {
          recipient_id: "ID_RECEBEDOR",
          charge_processing_fee: true,
          liable: true,
          percentage: 50
        },
        {
          recipient_id: "ID_RECEBEDOR",
          charge_processing_fee: false,
          liable: false,
          percentage: 50
        }
      ]
    })
    .then( subscription => console.log(subscription), failure => console.log(failure) );
});
```

### Retornando uma assinatura

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.subscriptions.find({ id: 'ID_ASSINATURA' }))
  .then(subscription => console.log(subscription))
```

### Retornando assinaturas

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.subscriptions.all())
  .then(subscriptions => console.log(subscriptions))
```

### Atualizando uma assinatura

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.subscriptions.update({ id: 'ID_ASSINATURA' }))
  .then(subscription => console.log(subscription))
```

### Cancelando uma assinatura

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.subscriptions.cancel({ id: 'ID_ASSINATURA' }))
  .then(subscription => console.log(subscription))
```

### Transações de assinatura

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.subscriptions.findTransactions({ id: 'ID_ASSINATURA' }))
  .then(subscription => console.log(subscription))
```

### Pulando cobranças

```js
 pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.subscriptions.settleCharge({ id: 'ID_ASSINATURA' }))
  .then(subscription => console.log(subscription.status))
```

## Postbacks

Ao criar uma transação ou uma assinatura você tem a opção de passar o parâmetro postback_url na requisição. Essa é uma URL do seu sistema que irá então receber notificações a cada alteração de status dessas transações/assinaturas.

Para obter informações sobre postbacks, 3 informações serão necessárias, sendo elas: `model`, `model_id` e `postback_id`.

`model`: Se refere ao objeto que gerou aquele POSTback. Pode ser preenchido com o valor `transaction` ou `subscription`.

`model_id`: Se refere ao ID do objeto que gerou ao POSTback, ou seja, é o ID da transação ou assinatura que você quer acessar os POSTbacks.

`postback_id`: Se refere à notificação específica. Para cada mudança de status de uma assinatura ou transação, é gerado um POSTback. Cada POSTback pode ter várias tentativas de entregas, que podem ser identificadas pelo campo `deliveries`, e o ID dessas tentativas possui o prefixo `pd_`. O campo que deve ser enviado neste parâmetro é o ID do POSTback, que deve ser identificado pelo prefixo `po_`. 

### Retornando postbacks

```js
// Transações:
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.postbacks.find({ transactionId: ID_TRANSAÇÃO }))

// Assinaturas:
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.postbacks.find({ subscriptionId: ID_ASSINATURA }))
```

### Retornando um postback

```js
// Transações:
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.postbacks.find({ transactionId: ID_TRANSAÇÃO, id: 'ID_POSTBACK' }))

// Assinaturas:
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.postbacks.find({ subscriptionId: ID_ASSINATURA, id: 'ID_POSTBACK' }))
```

### Reenviando um postback

```js
// Transações:
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.postbacks.redeliver({ transactionId: ID_TRANSAÇÃO }))

// Assinaturas:
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.postbacks.redeliver({ subscriptionId: ID_ASSINATURA }))
```

### Validando uma requisição de postback

```js
// Calculate signature:
pagarme.postback.calculateSignature('X-Hub-Signature', 'postbackBody')
// returns a hash

// Verify signature:
pagarme.postback.verifySignature('X-Hub-Signature', 'postbackBody', 'expectedHash')
// returns true or false
```

Observação: o código acima serve somente de exemplo para que o processo de validação funcione. Recomendamos que utilize ferramentas fornecidas por bibliotecas ou frameworks para recuperar estas informações de maneira mais adequada.

## Saldo do recebedor principal

Para saber o saldo de sua conta, você pode utilizar esse código:

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.balance.primary())
  .then(balance => console.log(balance))
```

## Operações de saldo

Com este objeto você pode acompanhar todas as movimentações financeiras ocorridas em sua conta Pagar.me.

### Histórico das operações

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.balanceOperations.all())
  .then(balanceOperation => console.log(balanceOperation))
```

### Histórico de uma operação específica

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.balanceOperations.find({ id: ID_BALANCE_OPERATION }))
  .then(balanceOperation => console.log(balanceOperation))
```

## Recebível

Objeto contendo os dados de um recebível. O recebível (payable) é gerado automaticamente após uma transação ser paga. Para cada parcela de uma transação é gerado um recebível, que também pode ser dividido por recebedor (no caso de um split ter sido feito).

### Retornando recebíveis

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.payables.all())
  .then(payables => console.log(payables))
```

Se necessário, você pode aplicar filtros na busca dos payables, por exemplo, você pode recuperar todos os payables de uma transação:

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.payables.find({ id: ID_RECEBÍVEL }))
  .then(payables => console.log(payables))
```

### Retornando um recebível

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.payables.find({
    id: ID_TRANSAÇÃO
  }))
  .then(payables => console.log(payables))
```

## Transferências
Transferências representam os saques de sua conta.

### Criando uma transferência

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transfers.create({
    amount: VALOR_PARA_SER_TRANSFERIDO,
    recipient_id: 'ID_RECEBEDOR',
  }))
  .then(transfer => console.log(transfer))
```

### Retornando transferências

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transfers.all())
  .then(transfers => console.log(transfers))
```

### Retornando uma transferência

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transfers.find({ id: 'ID_TRANSFERÊNCIA' }))
  .then(transfer => console.log(transfer))
```

### Cancelando uma transferência

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.transfers.cancel({ id: 'transfer_id' }))
```

## Antecipações

Para entender o que são as antecipações, você deve acessar esse [link](https://docs.pagar.me/docs/overview-antecipacao).

### Criando uma antecipação

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client =>  client.bulkAnticipations.create({
  	recipientId: 'ID_RECEBEDOR',
    payment_date: '1462999741870',
    timeframe: 'start',
    requested_amount: '100000',
  }))
  .then(bulkAnticipation => console.log(bulkAnticipation))
```

### Obtendo os limites de antecipação

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client =>  client.bulkAnticipations.limits({
    payment_date: '1462999741870',
    timeframe: 'start',
  }))
```

### Confirmando uma antecipação building

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client =>  client.bulkAnticipations.confirm({
    recipientId: 'ID_RECEBEDOR',
    id: 'ID_ANTECIPAÇÃO',
  }))
```

### Cancelando uma antecipação pending

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client =>  client.bulkAnticipations.cancel({
    recipientId: 'ID_RECEBEDOR',
    id: 'ID_ANTECIPAÇÃO',
  }))
```

### Deletando uma antecipação building

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client =>  client.bulkAnticipations.destroy({
    recipientId: 'ID_RECEBEDOR',
    id: 'ID_ANTECIPAÇÃO',
  }))
```

### Retornando antecipações

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client =>  client.bulkAnticipations.find({
    recipientId: 'ID_RECEBEDOR'
  }))
```

## Contas bancárias

Contas bancárias identificam para onde será enviado o dinheiro de futuros pagamentos.

### Criando uma conta bancária

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.bankAccounts.create({
    bank_code: '237',
    agencia: '1935',
    agencia_dv: '9',
    conta: '23398',
    conta_dv: '9',
    legal_name: 'API BANK ACCOUNT',
    document_number: '26268738888'
  }))
  .then(bankAccount => console.log(bankAccount))
```

### Retornando uma conta bancária

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.bankAccounts.find({ id: 'ID_BANK_ACCOUNT' }))
  .then(bankAccount => console.log(bankAccount))
```

### Retornando contas bancárias

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.bankAccounts.all())
  .then(bankAccounts => console.log(bankAccounts))
```

## Recebedores

Para dividir uma transação entre várias entidades, é necessário ter um recebedor para cada uma dessas entidades. Recebedores contém informações da conta bancária para onde o dinheiro será enviado, e possuem outras informações para saber quanto pode ser antecipado por ele, ou quando o dinheiro de sua conta será sacado automaticamente.

### Criando um recebedor

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.recipients.create({
    bank_account_id: 'ID_BANK_ACCOUNT',
    transfer_interval: 'weekly',
    transfer_day: 5,
    transfer_enabled: true
  }))
  .then(recipient => console.log(recipient))
```

### Retornando recebedores

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.recipients.all())
  .then(recipients => console.log(recipients))
```

### Retornando um recebedor

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.recipients.find({ id: 'ID_RECEBEDOR' }))
  .then(recipient => console.log(recipient))
```

### Atualizando um recebedor

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.recipients.update({
    id: 'ID_RECEBEDOR',
    bank_account_id: 'ID_BANK_ACCOUNT'
  }))
  .then(recipient => console.log(recipient))
```

### Saldo de um recebedor

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.balance.find({
    recipientId: 'ID_RECEBEDOR'
  }))
  .then(balance => console.log(balance))
```

### Operações de saldo de um recebedor

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.balanceOperations.find({
    recipientId: 'ID_RECEBEDOR',
  }))
  .then(balanceOperations => console.log(balanceOperations))
```

### Operação de saldo específica de um recebedor

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.balanceOperations.find({
    recipientId: 'ID_RECEBEDOR',
    id: 'ID_OPERAÇÃO'
  }))
  .then(balanceOperation => console.log(balanceOperation))
```

## Clientes

Clientes representam os usuários de sua loja, ou negócio. Este objeto contém informações sobre eles, como nome, e-mail e telefone, além de outros campos.

### Criando um cliente

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.customers.create({
    external_id: '#12345d789',
    name: 'João das Neves',
    type: 'individual',
    country: 'br',
    email: 'joaoneves@norte.com',
    documents: [
      {
        type: 'cpf',
        number: '11111111111'
      }
    ],
    phone_numbers: ['+5511999999999', '+5511888888888'],
    birthday: '1985-01-01'
  }))
  .then(customer => console.log(customer))
```

### Retornando clientes

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.customers.all())
  .then(customers => console.log(customers))
```

### Retornando um cliente

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.customers.find({ id: 'ID_CUSTOMER' }))
  .then(customer => console.log(customer))
```

## Análise de Fraude

Caso a sua conta esteja habilitada com análise manual pelo antifraude, é possível buscar pela análises via API seguindo esses exemplos.

### Retornando análises antifraude

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.antifraudAnalyses.find({ transactionId: 'ID_TRANSAÇÃO' }))
  .then(antifraudAnalyses => console.log(antifraudAnalyses))
```

### Retornando uma análise antifraude

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.antifraudAnalyses.find({
    transactionId: 'ID_TRANSAÇÃO',
    id: 'ID_ANÁLISE'
  }))
  .then(antifraudAnalyses => console.log(antifraudAnalyses))
```

## Links de pagamento

### Criando um link de pagamento

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.paymentLinks.create({
    "amount": 21000,
    "items": [
      {
        "id": "r123",
        "title": "Red pill",
        "unit_price": 10000,
        "quantity": 1,
        "tangible": true
      },
      {
        "id": "b123",
        "title": "Blue pill",
        "unit_price": 10000,
        "quantity": 1,
        "tangible": true
      }
    ],
    "payment_config": {
        "boleto": {
          "enabled": true,
          "expires_in": 20
        },
        "credit_card": {
          "enabled": true,
          "free_installments": 4,
          "interest_rate": 25,
          "max_installments": 12
        },
        "default_payment_method": "boleto"
      },
      "postback_config": {
           "orders": "http://postback.url/orders",
        "transactions": "http://postback.url/transactions"
        },
       "customer_config":{  
          "customer":{  
             "external_id":"#123456789",
             "name":"Fulano",
             "type":"individual",
             "country":"br",
             "email":"fulano@email.com",
             "documents":[  
                {  
                   "type":"cpf",
                   "number":"71404665560"
                }
             ],
             "phone_numbers":[  
                "+5511999998888",
                "+5511888889999"
             ],
             "birthday":"1985-01-01"
          },
          "billing":{  
             "name":"Ciclano de Tal",
             "address":{  
                "country":"br",
                "state":"SP",
                "city":"São Paulo",
                "neighborhood":"Fulanos bairro",
                "street":"Rua dos fulanos",
                "street_number":"123",
                "zipcode":"05170060"
             }
          },
          "shipping":{  
             "name":"Ciclano de Tal",
             "fee":12345,
             "delivery_date":"2017-12-25",
             "expedited":true,
             "address":{  
                "country":"br",
                "state":"SP",
                "city":"São Paulo",
                "neighborhood":"Fulanos bairro",
                "street":"Rua dos fulanos",
                "street_number":"123",
                "zipcode":"05170060"
             }
          }
       },
      "max_orders": 1,
      "expires_in": 60
  }))
  .then(paymentLinks => console.log(paymentLinks))
  .catch(error => console.log(JSON.stringify(error)))
```

### Retornando links de pagamento

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.paymentLinks.all())
  .then(paymentLinks => console.log(paymentLinks))
```

### Retornando um link de pagamento

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.paymentLinks.find({id:"ID_LINK_PAGAMENTO"}))
  .then(paymentLinks => console.log(paymentLinks))
```

### Cancelando um link de pagamento

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.paymentLinks.cancel({id:"ID_LINK_PAGAMENTO"}))
  .then(paymentLinks => console.log(paymentLinks))
```

### Orders (pedidos do Link de Pagamento)

#### Retornando todos os pedidos

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.orders.all())
  .then(orders => console.log(orders))
```

#### Retornando um pedido

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.orders.all({id:"ID_PEDIDO"}))
  .then(orders => console.log(orders))
```

## Buscas avançadas (Elasticsearch)

Através da rota /search você consegue fazer consultas usando o ElasticSearch em nossa base de dados. Essas consultas são extremamente otimizadas, e permitem que você minere os dados de suas transações e demais informações armazenadas no Pagar.me da forma que lhe for mais conveniente.

### Realizando uma busca

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.search({
    type: 'transaction',
    query: {
      "filtered": {
        "query": {"match_all": {}},
        "filter": {
          "and": [
            {
              "range": {
                "date_created": {
                  "lte": "2016-01-31",
                  "gte": "2016-01-01"
                }
              }
            },
            {
              "or": [
                {"term": {"status": "waiting_payment"}},
                {"term": {"status": "paid"}}
              ]
            }
          ]
        }
      },
      "sort": [
        {
          "date_created": {"order": "desc"}
        }
      ],
      "size": 5,
      "from": 0
    }
  }))
  .then(result => console.log(result))
```

## Regras de Split

Retorna os dados referentes a uma regra de divisão específica de uma determinada transação.

### Retornando as regras de divisão de uma transação

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.splitRules.find({
    transactionId: ID_TRANSAÇÃO,
  }))
  .then(splitRules => console.log(splitRules))
```

### Retornando uma regra de divisão específica

```js
pagarme.client.connect({ api_key: 'SUA_API_KEY' })
  .then(client => client.splitRules.find({
    transactionId: ID_TRANSAÇÃO,
    id: 'ID_SPLIT_RULE'
  }))
  .then(splitRule => console.log(splitRule))
```

## Contribuindo

As contribuições da comunidade são essenciais para manter esta biblioteca excelente. Nós
simplesmente não consigo acessar o grande número de plataformas e inúmeras configurações
para executá-lo, portanto, se você encontrar algum problema, fique à vontade para abrir um problema.

Certifique-se de fornecer pelo menos as seguintes informações sobre o problema:

* Ambiente (por exemplo, Nó 7, Chrome 57)
* Sistema operacional (por exemplo, iOS 10)
* Versão da biblioteca (por exemplo, 3.0.0)

Fornecemos mapas de origem para facilitar a depuração. Use-os sempre que possível, quando
fornecer rastreamentos de pilha, pois tornará mais fácil investigar o problema.

## License

```
The MIT License (MIT)
Copyright (c) 2017 Pagar.me Pagamentos S/A
```
