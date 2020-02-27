const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const htmlMin = require('html-minifier');

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('css');

  /* Add markdown library for adding html attributes */
  const mdOptions = {
    html: true
  };
  const markdownLib = markdownIt(mdOptions).use(markdownItAttrs);
  eleventyConfig.setLibrary('md', markdownLib);

  /* Minifying the html files with a transform */
  eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
    if( outputPath.endsWith('.html') ) {
      let minified = htmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

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