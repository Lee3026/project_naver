
module.exports = {
  css : {
    loaderOptions : {
        sass : {
            additionalData: `
              @import "@/assets/scss/reset.scss";
              @import "@/assets/scss/mixins.scss";
            `
        }
    }
},
}
