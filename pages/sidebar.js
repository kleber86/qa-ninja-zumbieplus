let userActions = {
    esperaUsuarioLogado: function(nome) {
        return this
        .waitForElementVisible('@userInfo', 3000)
        .assert.containsText('@userInfo', nome)
    }
}

module.exports = {
    commands:[userActions],
    elements: {
        userInfo: '.user .info span'
    }
}