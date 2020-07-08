// modules
const pug = require('pug');
const path = require('path')
const puppeteer = require('puppeteer')


module.exports = function () {

    function createHtmlString(rapport) {
        console.log('createhtmlstring')

        const templateFile = path.join(__dirname, 'template.pug')

        const compiledFunction = pug.compileFile(templateFile)

        const html = compiledFunction({ date: rapport.date })

        return html
    }

    async function createPdf(html) {
        let browser = null
        try {
            browser = await puppeteer.launch();
            const page = await browser.newPage();
            page.setContent(html)
            const pdf = await page.pdf({
                format: 'A4',
                printBackground: true,
                margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' }
            })
            console.log('pdf', pdf)
            return pdf
        } catch (error) {
            console.log('Error: ', error)
        } finally {
            if (browser !== null) {
                await browser.close()
            }
        }
    }

    return {
        createHtmlString: createHtmlString,
        createPdf: createPdf,
    }
}()