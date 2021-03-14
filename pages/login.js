let loginActions = {
    com: function(email, senha){
        return this
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', email)
            .setValue('@passInput', senha)
            .click('@loginButton')
    },
    mensagemInfo: function(texto){
        return this
            .waitForElementVisible('@form', 3000)
            .assert.containsText('@alertInfo', texto)
    },
    mensagemErro: function(texto){
        return this
            .waitForElementVisible('@form', 3000)
            .assert.containsText('@alertDanger', texto)
    }
}

module.exports = {
    url: '/login',
    commands: [loginActions],
    elements: {
        form: '.card-login',
        emailInput: 'input[name=email]',
        passInput: 'input[name=password]',
        loginButton: '.login-button',
        alertInfo: '.alert-info',
        alertDanger: '.alert-danger'
    }
}