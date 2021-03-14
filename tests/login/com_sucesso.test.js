module.exports = {
    '@tags': ['smoke'],
    'login com sucesso refatorado': (browser) => {
        
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.com('zumbi@dospalmares.com.br', 'pwd123')
        sidebar.esperaUsuarioLogado('Quilombo')
    }
}