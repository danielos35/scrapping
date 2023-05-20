const { chromium } = require("playwright");




const getData = async () => {

    try{           
        const browser  = await chromium.launch({headless:true});
        const page  = await browser.newPage();
        await page.goto('https://www.apple.com/mac');
        const repo = await page.$$eval('.chapternav-item', (rows) => {
            return rows.map( (row) => {
                return row.querySelector('.chapternav-label').innerText.trim()
            })
        })
        console.log(repo)
        return repo;
    } catch(err) {
        return err;
    }

}

getData();