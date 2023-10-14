# Travis Emslander personal page

This website is setup using the Hugo static site framework. In order to work with it, it requires [hugo be installed](https://gohugo.io/installation/). If using GitHub Codespaces, it's already installed in the default environment.

## Adding a post

1. `hugo new posts/YYYYMMDD-page-title.md`
    * the specific title does not effect display. The date prefix helps with proper ordering.
    * you can also create a directory if you'd like to host related static assets such as images for the post. Example: `hugo new posts/YYYYMMDD-page-title/post.md`
2. Populate the created markdown file
3. Preview changes (see below)

## Changing theme

1. Find theme from hugo's theme listing
2. Add theme as github submodule (e.g. `git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke`)
3. Edit theme in `config.toml`
4. Preview changes (see below)

## Previewing Changes

1. Run `hugo server -D`
2. Visit the url it gives
    * Note: when using CodeSpaces you'll want to specify the baseURL and not to append port: `hugo server -D --baseUrl="https://your-github-url" --appendPort=false
`

## Publishing Changes

Commit your changes and merge into the main branch. There is a github action configured to automatically publish changes.
