const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItCont = require('markdown-it-container');
const htmlMin = require('html-minifier');

module.exports = eleventyConfig => {
  /* Pass the asset folders through to the build destination folder */
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');

  /* Add markdown library for adding html attributes and grouping with containers */
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

  /* Configuring the folders for the data and templates,
     choosing the template engines to use,
     and setting the filetypes that will be modified */
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