module.exports = {
    'nao cadastrado': (browser) => {
        let login = browser.page.login()

        login
            .com('404@hotmail.com', 'pwd123')
            .mensagemErro('Usuário e/ou senha inválidos')
    }
}