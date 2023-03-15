const yaml = require("js-yaml");
const moment = require("moment");
const showdown = require("showdown");
const converter = new showdown.Converter({ metadate: true });
moment.locale("fr");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => {
    return yaml.load(contents);
  });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("vendors");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return moment(dateObj).format("DD/MM/YYYY");
  });
  eleventyConfig.addFilter("mdToHtml", (md) => {
    return converter.makeHtml(md);
  });
  eleventyConfig.addFilter("displayPhoneNumber", (phoneNumber) => {
    try {
      return phoneNumber.replace(/[^\d]/g, "").match(/.{2}/g).join(" ");
    } catch (e) {
      return null;
    }
  });
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
