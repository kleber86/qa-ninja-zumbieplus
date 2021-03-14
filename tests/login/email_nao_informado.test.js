module.exports = {
    '@disabled': true,
    'email não informado': (browser) => {
        let login = browser.page.login()

        login
            .com('', '123456')
            .mensagemInfo('Opps. Cadê o email?')
    }
}