module.exports = {
    'senha não informada': (browser) => {
        let login = browser.page.login()

        login
            .com('zumbi@dospalmares.com.br', '')
            .mensagemInfo('Opps. Cadê a senha?')
    }
}