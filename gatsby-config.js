const { siteMetadata } = require("./config");
const isDev =
  (process.env.NODE_ENV === "development" || process.env.LOCAL === "true") &&
  process.env.LOCAL !== "false";
let localesPath =
  ".cache/gatsby-source-git/itsprivate/ts/RedditTop/i18n/i18next";
if (isDev) {
  localesPath =
    ".cache/gatsby-source-git/itsprivate/ts-test/RedditTop/i18n/i18next";
}
let plugins = [];
if (isDev) {
  // development not include the whole data
  plugins.push({
    resolve: `@theowenyoung/gatsby-source-git`,
    options: {
      name: `RedditTop`,
      remote: `git@github.com:itsprivate/ts-test.git`,
      branch: `main`,
      // Only import the docs folder from a codebase.
      patterns: [
        "data/*-placeholder/1.json",
        "data/hn-top/**",
        "data/hn-top-issues/**",
      ],
    },
  });
} else {
  plugins.push({
    resolve: `@theowenyoung/gatsby-source-git`,
    options: {
      name: `RedditTop`,
      remote: `https://github.com/itsprivate/ts.git`,
      branch: `main`,
      // Only import the docs folder from a codebase.
      patterns: [
        "data/*-placeholder/1.json",
        "data/hn-top/**",
        "data/hn-top-issues/**",
      ],
    },
  });
}
plugins = plugins.concat([
  {
    resolve: `gatsby-theme-buzzing`,
    options: {
      tweetTypeName: ["TweetJson", "twitterStatusesUserTimelineMyTweet"],
      redditTypeName: ["RedditJson"],
      issueTypeName: ["HnTopIssuesJson"],
      localesPath: localesPath,
      disqus: {
        shortname: "buzzing-on-hn",
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.title,
      short_name: siteMetadata.shortTitle,
      start_url: `/`,
      lang: siteMetadata.locale,
      description: siteMetadata.description,
      background_color: `#f7f0eb`,
      theme_color: `#ff6600`,
      display: `standalone`,
      icon: `src/images/icon.png`,
      localize: siteMetadata.localize.map((item) => {
        return {
          start_url: `/${item.locale}/`,
          lang: item.locale,
          name: item.title,
          short_name: item.shortTitle,
          description: item.description,
        };
      }),
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-D82YESX6CD", // Google Analytics / GA
      ],
    },
  },
]);
module.exports = {
  flags: { QUERY_ON_DEMAND: true },
  plugins: plugins,
  siteMetadata,
};
