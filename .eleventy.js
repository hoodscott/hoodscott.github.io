module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }

  }
}