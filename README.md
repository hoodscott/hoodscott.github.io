# [hoodscott.github.io](http://hoodscott.github.io)

The site is generated using [Eleventy](https://www.11ty.dev/) which stitches together some HTML and Nunjucks files to create the website. It uses a simple script to generate this site, with only some small configuration changes. These allow for HTML attributes to be specified in the Markdown files, for containers to be created around lines of Markdown, and minifies the HTML files using a transform which cuts the filesize down by around 10%.

Once the site is built with Eleventy, there is a postCSS script that is ran to autoprefix and then minify the CSS. There are some npm scripts that can be ran to automate the above processes.

Continuous Integration has been set up using [Travis](https://travis-ci.org/) which listens for changes in branch `dev`, runs the npm script to build the project and (if everything goes well) will then push the changes to the `gh-pages` branch. Once there, the project will be deployed with [Github Pages](https://pages.github.com/) automatically.

## Useful Commands

- `npm run build` Runs build scripts to generate the html and css files into the `_site` folder.
- `npm run clean` tidies up build folder (`_site`).
- `npm run eleventy:serve` Boot up a local Browsersync web server to apply changes and refresh automatically when new changes are made.

## Notes

Make sure to create new branches for changes and merge back into `dev` when done (Travis kicks off a new build for every commit to the `dev` branch).  If this build goes well, the generated pages (in `_site`) are pushed to the `gh-pages` branch to be served via GitHub Pages.  
Need to remember to update personal access token with `repo` scope for Travis [here]( https://github.com/settings/tokens/new) in case it has expired.  Travis docs [here]( https://docs.travis-ci.com/user/deployment/pages/).
