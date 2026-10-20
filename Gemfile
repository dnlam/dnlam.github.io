source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.

# The github-pages gem pins Jekyll (3.9 or 3.10). Jekyll 4 cannot be
# installed in the same bundle.
# gem "jekyll", "~> 4.3"

# If you're using the MathJax math engine instead, free to remove the line below:
gem "kramdown-math-katex"

# A JavaScript runtime for ruby that helps with running the katex gem above.
gem "duktape"

# Ruby 3 does not ship webrick. 1.8.2+ fixes CVE-2025-6442.
gem "webrick", ">= 1.8.2"

# CVE-2026-35611
gem "addressable", "~> 2.9.0"

# CVE-2026-54904, CVE-2026-54905, CVE-2026-54906
gem "concurrent-ruby", "~> 1.3.7"

gem "rexml", ">= 3.3.9"

# Octokit/Sawyer (pulled in by github-pages) require Faraday 1.x.


group :jekyll_plugins do
  gem "github-pages"
  # gem "jekyll-include-cache"
  # gem "jekyll-compose"
  gem "jekyll-default-layout"
  gem "jekyll-feed"
  gem "jekyll-optional-front-matter"
  gem "jekyll-paginate"
  gem "jekyll-readme-index"
  gem "jekyll-redirect-from"
  gem "jekyll-relative-links"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-titles-from-headings"
  gem "jekyll-include-cache"

  # Non-Github Pages plugins:
  gem "jekyll-last-modified-at"
  gem "jekyll-compose"
end

gem 'wdm' if Gem.win_platform?
gem "tzinfo-data" if Gem.win_platform?

