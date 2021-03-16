let userActions = {
    esperaUsuarioLogado: function(nome) {
        return this
        .waitForElementVisible('@userInfo', 10000)
        .assert.containsText('@userInfo', nome)
    }
}

module.exports = {
    commands:[userActions],
    elements: {
        userInfo: '.user .info span'
    }
}