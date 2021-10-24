const yaml = require("js-yaml");
const moment = require("moment");
moment.locale("fr");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => {
    return yaml.load(contents);
  });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return moment(dateObj).format("DD/MM/YYYY");
  });
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
