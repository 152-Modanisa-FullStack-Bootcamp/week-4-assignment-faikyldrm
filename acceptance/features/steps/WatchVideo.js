const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const checkUrlContains = require("../support/check/checkUrlContains");


Given(/^that User is on Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/")
});
When(/^User clicks "([^"]*)" video$/, async function (videoName) {
    const selector = ".small-video-container"
    this.videoId = await this.page.$$eval(
        selector,
        async (items, videoName) => {
            const theItem = items.find(x => x.querySelector("#title").textContent === videoName)

            const videoImage = theItem.querySelector("#videoImg")

            const {videoid} = theItem.dataset
            videoImage.click()
            return videoid
        },
        videoName
    )

});
Then(/^User should see watch url correctly$/, async function () {
  await checkUrlContains.call(this,false,`/${this.videoId}`)
});
