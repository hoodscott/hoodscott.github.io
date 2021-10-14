# [hoodscott.github.io](http://hoodscott.github.io)

The site is generated using [Eleventy](https://www.11ty.dev/) which stitches together some HTML and Nunjucks files to create the website. It uses a simple script to generate this site, with only some small configuration changes. These allow for HTML attributes to be specified in the Markdown files, for containers to be created around lines of Markdown, and minifies the HTML files using a transform which cuts the filesize down by around 10%.

Once the site is built with Eleventy, there is a postCSS script that is ran to autoprefix and then minify the CSS. There are some npm scripts that can be ran to automate the above processes.

Continuous Integration has been set up using [Travis](https://travis-ci.org/) which listens for changes in a GitHub branch, runs the npm script to build the project and (if everything goes well) will then push the changes to the master branch. Once there, the project will be picked up and deployed to [Github Pages](https://pages.github.com/) automatically.

## Useful Commands

- `npm run build` Runs build scripts to generate the html and css files into the `_site` folder.
- `npm run clean` tidies up build folder (`_site`).
- `npm run eleventy:serve` Boot up a local Browsersync web server to apply changes and refresh automatically when new changes are made.
