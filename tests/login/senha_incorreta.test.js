module.exports = {
    'senha invalida': (browser) => {
        let login = browser.page.login()
        
        login
            .com('zumbi@dospalmares@com.br', '123456')
            .mensagemErro('Usuário e/ou senha inválidos')
    }
}