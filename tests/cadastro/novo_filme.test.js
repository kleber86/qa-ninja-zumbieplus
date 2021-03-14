import pg from '../../lib/db'

let movieData = {}

module.exports = {
    /**
     * No curso foi orientado a utilização do before, porém ao rodar os testes
     * apresentavam problemas.
     */
    beforeEach: function(browser) {
        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/02/2002',
            cast: ['Milla Jovovick', 'Ali Larter', 'Iam Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'Um terrível vírus é criminosamente solto nas dependências da Umbrella Corporation, a mais poderosa empresa do mundo.'
        }
        
        pg.removeByTitle(movieData.title)

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.com('zumbi@dospalmares.com.br', 'pwd123')
        sidebar.esperaUsuarioLogado('Quilombo')
    },

    'quando eu faço o cadastro do filme': function(browser) {
        let movie = browser.page.movie()

        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@dateInput', movieData.releaseDate)
            .setValue('@yearInput', movieData.year)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .pause(2000)
            .click('@createButton')
            .waitForElementVisible('@list', 3000)
            .assert.containsText('@list', movieData.title)
    }
}