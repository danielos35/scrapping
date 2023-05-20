const { chromium } = require("playwright");




const getData = async () => {

    try{
           
        // No open browser
        const browser  = await chromium.launch({headless:true});

        // Create new page 
        const page  = await browser.newPage();

        // Page
        await page.goto('https://github.com/trending/javascript');

        // Traer datos filtrados
        const repo = await page.$$eval('.Box-row', (rows) => {
            return rows.map( (row) => {
                const title = row.querySelector('h2').innerText.trim();
                return {title}
            })
        })

        return repo;
    } catch(err) {
        return err;
    }


}

getData();