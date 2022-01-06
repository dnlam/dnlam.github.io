## Quick Start
### Running locally
1. Clone repository (git users), or [download] and unzip.
2. Open terminal, `cd` into root directory (where `_config.yml` is located)
3. Run `bundle install` [^1]
4. Run `bundle exec jekyll serve`
5. Open <http://localhost:4000/hydejack-starter-kit/>


## GitHub Pages
* Github pages supports limitedly for the hydejack themes
* For existing sites, you can instead set the remote_theme key as follows:
_config.yml

* remote_theme: hydecorp/hydejack@v9.1.5

* Make sure the plugins list contains jekyll-include-cache (create if it doesnt exist): _config.yml

* plugins:
  - jekyll-include-cache

* To run this configuration locally, make sure the following is part of your Gemfile:
Gemfile

* gem "github-pages", group: :jekyll_plugins
* gem "jekyll-include-cache", group: :jekyll_plugins

* Note that Hydejack has a reduced feature set when built on GitHub Pages. Specifically, using KaTeX math formulas doesnt work when built in this way.
