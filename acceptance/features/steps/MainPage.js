const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const checkElementExists = require("../support/check/checkElementExists")
const checkElementAttribute = require("../support/check/checkAttribute")
const assert = require("assert");
Given("that User goes to Video Site Project's HomePage", async function () {
    await openUrl.call(this, "/")
});
When("page is loaded", async function () {
    await checkElementExists.call(this, "app", "true")
    //I think if app is on the page, page is ready
});
Then("User can see some of videos' title like", async function (arr) {
    const selector = ".small-video-container #title"
    let arrayAsText = []
    //Bunu başka türlü nasıl çevirceğim aklıma gelmedi
    for (let item of arr.rawTable)
        arrayAsText.push(item.toString())
    const result = await this.page.$$eval(
        selector,
        async (titles, arrayAsText) => {
            const allTitles = titles.map(x => x.textContent)
            //checking contains all items
            const result = arrayAsText.every(x => allTitles.includes(x))
            return result
        },
        arrayAsText
    );

    assert.equal(result, true)
});
When(/^User hovers "([^"]*)" video$/, async function (videoName) {
    const selector = ".small-video-container"

    this.videoId = await this.page.$$eval(
        selector,
        async (items, videoName) => {
            const theItem = items.find(x => x.querySelector("#title").textContent === videoName)
            const {videoid} = theItem.dataset
            return videoid
        },
        videoName
    )

    const imageItems = await this.page.$('[data-videoid=\'' + this.videoId + '\']  #videoImg');
    await imageItems.hover()
    this.hoverImageLink = await (await imageItems.getProperty('src')).jsonValue()


});
Then(/^User should see hovered image$/, async function () {
    await checkElementAttribute.call(this, "src", '[data-videoid=\'' + this.videoId + '\']  #videoImg', false, this.hoverImageLink)
});