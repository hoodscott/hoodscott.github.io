const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItCont = require('markdown-it-container');
const htmlMin = require('html-minifier');

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('css');

  /* Add markdown library for adding html attributes */
  const mdOptions = {
    html: true
  };
  const markdownLib = markdownIt(mdOptions);
  markdownLib.use(markdownItAttrs);
  markdownLib.use(markdownItCont, 'section', {
    validate: function(params) {
      return params.trim().match(/^section$/);
    },
    render: function (tokens, idx) {
      return (tokens[idx].nesting === 1) ? '<section class="colour-section">' : '</section>';
    }
  });
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