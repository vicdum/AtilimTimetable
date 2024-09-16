const fs = require('fs');
const { Builder, Browser, By, until } = require('selenium-webdriver');
const yaml = require('js-yaml');

let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;left:0px;top:0px;direction:ltr" stroke="#000000" stroke-width="0" fill="#000000" width="629.3571428571429" height="445"><defs/><g transform="scale(0.2119047619047619)"><text font-size="121.42930000000001" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="1485" y="155">Ders Programı</text><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="461.5909090909091" y="335">1.</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="461.5909090909091" y="411.5">9:30 - 10:20</text><line x1="578.1818181818182" y1="250" x2="578.1818181818182" y2="420" stroke-width="1"/><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="694.7727272727273" y="335">2</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="694.7727272727273" y="411.5">10:30 - 11:20</text><line x1="811.3636363636364" y1="250" x2="811.3636363636364" y2="420" stroke-width="1"/><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="927.9545454545454" y="335">3.</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="927.9545454545454" y="411.5">11:30 - 12:20</text><line x1="1044.5454545454545" y1="250" x2="1044.5454545454545" y2="420" stroke-width="1"/><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="1161.1363636363635" y="335">4.</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="1161.1363636363635" y="411.5">12:30 - 13:20</text><line x1="1277.7272727272727" y1="250" x2="1277.7272727272727" y2="420" stroke-width="1"/><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="1394.318181818182" y="335">5.</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="1394.318181818182" y="411.5">13:30 - 14:20</text><line x1="1510.909090909091" y1="250" x2="1510.909090909091" y2="420" stroke-width="1"/><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="1627.5" y="335">6.</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="1627.5" y="411.5">14:30 - 15:20</text><line x1="1744.090909090909" y1="250" x2="1744.090909090909" y2="420" stroke-width="1"/><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="1860.681818181818" y="335">7.</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="1860.681818181818" y="411.5">15:30 - 16:20</text><line x1="1977.2727272727273" y1="250" x2="1977.2727272727273" y2="420" stroke-width="1"/><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="2093.8636363636365" y="335">8.</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="2093.8636363636365" y="411.5">16:30 - 17:20</text><line x1="2210.4545454545455" y1="250" x2="2210.4545454545455" y2="420" stroke-width="1"/><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="2327.0454545454545" y="335">9.</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="2327.0454545454545" y="411.5">17:30 - 18:20</text><line x1="2443.6363636363635" y1="250" x2="2443.6363636363635" y2="420" stroke-width="1"/><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="2560.227272727273" y="335">10.</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="2560.227272727273" y="411.5">18:30 - 19:20</text><line x1="2676.818181818182" y1="250" x2="2676.818181818182" y2="420" stroke-width="1"/><text font-size="56.1" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="2793.409090909091" y="335">11.</text><text font-size="23.8" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-family: Arial;" x="2793.409090909091" y="411.5">19:30 - 20:20</text><line x1="578.1818181818182" y1="420" x2="578.1818181818182" y2="1950" stroke-width="1"/><line x1="811.3636363636364" y1="420" x2="811.3636363636364" y2="1950" stroke-width="1"/><line x1="1044.5454545454545" y1="420" x2="1044.5454545454545" y2="1950" stroke-width="1"/><line x1="1277.7272727272727" y1="420" x2="1277.7272727272727" y2="1950" stroke-width="1"/><line x1="1510.909090909091" y1="420" x2="1510.909090909091" y2="1950" stroke-width="1"/><line x1="1744.090909090909" y1="420" x2="1744.090909090909" y2="1950" stroke-width="1"/><line x1="1977.2727272727273" y1="420" x2="1977.2727272727273" y2="1950" stroke-width="1"/><line x1="2210.4545454545455" y1="420" x2="2210.4545454545455" y2="1950" stroke-width="1"/><line x1="2443.6363636363635" y1="420" x2="2443.6363636363635" y2="1950" stroke-width="1"/><line x1="2676.818181818182" y1="420" x2="2676.818181818182" y2="1950" stroke-width="1"/><text font-size="122.4" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="202.5" y="573">Pa</text><line x1="60" y1="726" x2="345" y2="726" stroke-width="1"/><text font-size="122.4" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="202.5" y="879">Sa</text><line x1="60" y1="1032" x2="345" y2="1032" stroke-width="1"/><text font-size="122.4" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="202.5" y="1185">Ça</text><line x1="60" y1="1338" x2="345" y2="1338" stroke-width="1"/><text font-size="122.4" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="202.5" y="1491">Pe</text><line x1="60" y1="1644" x2="345" y2="1644" stroke-width="1"/><text font-size="122.4" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="central" style="pointer-events: none; white-space: pre; font-family: Arial;" x="202.5" y="1797">Cu</text><line x1="345" y1="726" x2="2910" y2="726" stroke-width="1"/><line x1="345" y1="1032" x2="2910" y2="1032" stroke-width="1"/><line x1="345" y1="1338" x2="2910" y2="1338" stroke-width="1"/><line x1="345" y1="1644" x2="2910" y2="1644" stroke-width="1"/><line x1="60" y1="250" x2="2910" y2="250" stroke-width="3"/><line x1="2910" y1="250" x2="2910" y2="1950" stroke-width="3"/><line x1="2910" y1="1950" x2="60" y2="1950" stroke-width="3"/><line x1="60" y1="1950" x2="60" y2="250" stroke-width="3"/><line x1="345" y1="250" x2="345" y2="1950" stroke-width="3"/><line x1="60" y1="420" x2="2910" y2="420" stroke-width="3"/><text font-size="34" text-rendering="geometricPrecision" text-anchor="start" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre;" x="60" y="243.2">ATILIM ÜNİVERSİTESİ</text><text font-size="34" text-rendering="geometricPrecision" text-anchor="end" dominant-baseline="text-before-edge" style="pointer-events: none; white-space: pre;" x="2910" y="1956.8">Coded by vicdum</text></g></svg>`;

(async function main() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        await driver.get('https://atilim.edupage.org/timetable/view.php');
        await driver.wait(until.elementLocated(By.xpath("//span[contains(text(), 'Dersler')]")), 30000);
        const lectures = yaml.load(fs.readFileSync('lectures.yml', 'utf8'));
        for (const lecture of lectures.lectures) {
            await getTable(driver, lecture);
        }
        await printTable();
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
})();

async function getTable(driver, dersisim) {
    let randomColorx = "rgb(" + Math.floor(Math.random() * 100 + 155) + "," + Math.floor(Math.random() * 100 + 155) + "," + Math.floor(Math.random() * 100 + 155) + ")";
    try {
        const dersler = await driver.findElement(By.xpath("//span[contains(text(), 'Dersler')]"));
        await dersler.click();
        await driver.wait(until.elementLocated(By.className("dropDownPanel asc-context-menu")), 30000);
        const dersList = await driver.findElement(By.className("dropDownPanel asc-context-menu"));
        const dersx = await dersList.findElement(By.xpath("//a[contains(text(), '" + dersisim + "')]"));
        await dersx.click();
        await driver.wait(until.elementLocated(By.tagName("svg")), 30000);
        const svg = await driver.findElement(By.tagName("svg"));
        await driver.wait(until.elementLocated(By.tagName("rect")), 30000);
        const rects = await svg.findElements(By.tagName("rect"));
        await driver.wait(until.elementLocated(By.tagName("text")), 30000);
        const texts = await driver.findElement(By.tagName("text"));
        dersAdi = await texts.getAttribute("innerHTML");
        dersAdi = dersAdi.split("-");
        dersAdi = dersAdi[0];
        dersz = [];
        for await (const rect of rects) {
            const rectFill = await rect.getAttribute("fill");
            if (rectFill == "transparent") {
                rectInner = await rect.getAttribute("innerHTML");
                if (rectInner) {
                    const rectX = await rect.getAttribute("x");
                    const rectY = await rect.getAttribute("y");
                    const rectWidth = await rect.getAttribute("width");
                    derssaati = await ((rectX - 345) / 213.75) + 1;
                    dersuzunluk = await rectWidth / 213.75;
                    dersgun = await ((rectY - 420) / 255) + 1;
                    rectTitle = await rect.getAttribute("innerHTML");
                    rectTitle = await rectTitle.replaceAll("<title>", " ");
                    rectTitle = await rectTitle.replaceAll("</title>", " ");
                    rectTitle = await rectTitle.split("\n");
                    if (dersgun % 1 != 0) continue;
                    dersz.push(dersgun, derssaati, dersisim, rectTitle[2], dersuzunluk);
                }
            }
        }
        for (let i = 0; i < dersz.length; i += 5) {
            await dersEkle(dersz[i], dersz[i + 1], dersz[i + 4], dersz[i + 2], dersz[i + 3], randomColorx);
        }
    } catch (err) {
        console.error(`Error in getTable for ${dersisim}:`, err);
    }
};

async function printTable() {
    svgContent = await svgContent.replaceAll("&nbsp;", " ");
    await fs.writeFileSync('output.svg', svgContent);
    await require('child_process').exec('start output.svg');
}

async function dersEkle(dersgun, dersbaslangic, derssaat, ders, sinif, renk) {
    genis = 232.75;
    yuksek = 305.75;
    x = 345;
    y = 420;
    svgContent = await svgContent.replaceAll("</g></svg>", "");
    randomColor = await "rgb(" + Math.floor(Math.random() * 100 + 155) + "," + Math.floor(Math.random() * 100 + 155) + "," + Math.floor(Math.random() * 100 + 155) + ")";
    svgContent = await svgContent + `<rect x="${x + (genis * dersbaslangic) - genis}" y="${y + (dersgun * yuksek) - yuksek}" width="${genis * derssaat}" height="${yuksek}" style="fill:${renk ? renk : randomColor}" stroke-width="2"></rect>
    <text font-size="40" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-before-edge" style="font-weight: bold; pointer-events: none; white-space: pre; font-family: Arial;" x="${x + (genis * dersbaslangic) - genis + (genis * derssaat) / 2}" y="${y + (dersgun * yuksek) - yuksek + 100}">${ders}</text>
    <text font-size="30" text-rendering="geometricPrecision" text-anchor="middle" dominant-baseline="text-after-edge" style="pointer-events: none; white-space: pre; font-weight: bold; font-family: Arial;" x="${x + (genis * dersbaslangic) - genis + (genis * derssaat) / 2}" y="${y + (dersgun * yuksek) - yuksek + 232.25}">${sinif}</text>`;
    svgContent = await svgContent + "</g></svg>";
}