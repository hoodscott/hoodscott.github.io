const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('css');

  /* Add markdown library for adding html attributes */
  const mdOptions = {
    html: true
  };
  const markdownLib = markdownIt(mdOptions).use(markdownItAttrs);
  eleventyConfig.setLibrary('md', markdownLib);

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site' 
    },
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
  }
}