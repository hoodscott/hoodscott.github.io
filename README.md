# [hoodscott.github.io](http://hoodscott.github.io)

The site is generated using [Eleventy](https://www.11ty.dev/) which stitches together some HTML and Nunjucks files to create the website. It uses a simple script to generate this site, with only some small configuration changes. These allow for HTML attributes to be specified in the Markdown files, for containers to be created around lines of Markdown, and minifies the HTML files using a transform which cuts the filesize down by around 10%.

Once the site is built with Eleventy, there is a postCSS script that is ran to autoprefix and then minify the CSS. There are some npm scripts that can be ran to automate the above processes.

## Useful Command

- `npm run 11ty:s` Boot up a local Browsersync web server to build site hosted on localhost which refreshes automatically when new changes are made.

## Deploy

- `npm run clean` tidies up build folder (`_site`).
- `npm run 11ty` Runs build scripts to generate the html and css files into the `_site`.
- `npm run css` Autoprefixes and then minifies the CSS.
- Copy contents of `_site` to root of `gh-pages` branch, commit, and push
