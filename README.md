# Udacity Project:

# Evaluate a news article with Natural Language Processing

# Basic information about project

In this 'Evaluate a News Article with Natural Language Processing' project I used my webpack knowledge which I gain it from Udacity platform and other sources. 
# What kind of things I used 
- Structure of webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- APIs and creating requests to external urls

# Extra information about NLP
> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

# How to run the project

Below shows how to run in development and production mode

### run in development mode

To start the webpack dev server at port 8080

`$ npm run build-dev`

### run in production mode

Generate the dist files and then start server at port 3000

`$ npm run build-prod`

`$ npm run start`

## Configs

Here, we have two webpack config files for both development mode(`webpack.config.dev.js`) and production mode(`webpack.config.prod.js` )

We also have a `package.json` to manage dependencies

## API

The project uses API from [meaningcloud](https://api.meaningcloud.com), which provides a powerful and flexible AI-driven content analysis solutions.
