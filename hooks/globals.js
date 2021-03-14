module.exports = {
    beforeEach: (browser, done) => {
        browser.resizeWindow(1400, 980)
        done()
    },

    afterEach: (browser, done) => {
        browser.end()
        done()
    }
}