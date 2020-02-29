const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItCont = require('markdown-it-container');
const htmlMin = require('html-minifier');

/* Maps breakpoints in Roman numberals */
const romanMapping = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'],
  [1, 'I'],
]

/* Converts a number to its Roman numeral string representation */
function romanNumeral(num) {
  /* Recursive base case */
  if (num == 0) return '';
  /* Find the highest number smaller than the input number */
  for (pair of romanMapping) {
    if (pair[0] <= num) {
      /* Add the required letter(s) and run again with remainder */
      return pair[1] + romanNumeral(num - pair[0]);
    }
  }
}

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

  /* Add a filter to convert a date to its year represented
     as a roman numeral */
  eleventyConfig.addFilter("romanYear", function(value) {
    const dt = new Date(value);
    if (dt) {
      return romanNumeral(dt.getFullYear());
    }
    return null;
  });
  /* Add a filter to convert a date object to an ISO date string */
  eleventyConfig.addFilter("isoDate", function(value) {
    const dt = new Date(value);
    if (dt) {
      return dt.getFullYear() + '-' +
              dt.getMonth().toString().padStart(2, '0') + '-' +
              dt.getDate().toString().padStart(2, '0');
    }
    return null;
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