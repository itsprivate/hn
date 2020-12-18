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
        "data/reddit-placeholder/1.json",
        "data/tweet-placeholder/1.json",
        "data/hn-placeholder/1.json",
        "data/hn-top/**",
        "data/ph-placeholder/1.json",
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
        "data/reddit-placeholder/1.json",
        "data/tweet-placeholder/1.json",
        "data/hn-placeholder/1.json",
        "data/hn-top/**",
        "data/ph-placeholder/1.json",
      ],
    },
  });
}
plugins = plugins.concat([
  {
    resolve: `gatsby-theme-buzzing`,
    options: {
      tweetTypeName: ["TweetsJson", "twitterStatusesUserTimelineMyTweet"],
      redditTypeName: ["RedditJson"],
      issueTypeName: ["RedditTopIssuesJson"],
      localesPath: localesPath,
      disqus: {
        shortname: "reddit-top",
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Hacker News 热门`,
      short_name: `HN热门`,
      start_url: `/`,
      lang: `zh`,
      description: `用中文浏览 Hacker News 热门内容`,
      background_color: `#f7f0eb`,
      theme_color: `#FF4500`,
      display: `standalone`,
      icon: `src/images/icon.png`,
      localize: [
        {
          start_url: `/en/`,
          lang: `en`,
          name: `Hacker News Top`,
          short_name: `HNTop`,
          description: `See what's buzzing on Hacker News in your native language`,
        },
        {
          start_url: `/zh-Hant/`,
          lang: `zh-Hant`,
          name: `Hacker News熱門`,
          short_name: `HN熱門`,
          description: `用中文查看 Hacker News 上的熱門內容`,
        },
      ],
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
  plugins: plugins,
  siteMetadata: {
    title: `Buzzing on Hacker News`,
    author: `Hacker News`,
    description: `See what's buzzing on Hacker News in your native language`,
    keywords: ["Hacker News", "HN", "buzzing"],
    siteUrl: "https://hn.buzzing.cc",
    menuLinks: [
      {
        name: "RSS",
        url: "/rss.xml",
        prefetch: false,
      },
    ],
    social: [
      {
        name: `Hacker News`,
        url: `https://news.ycombinator.com/`,
        external: true,
      },
    ],
  },
};
