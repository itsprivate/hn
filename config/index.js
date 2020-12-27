const siteMetadata = {
  locale: "zh",
  author: `Hacker News`,
  siteUrl: "https://hn.buzzing.cc",
  title: "Hacker News 热门",
  shortTitle: "HN热门",
  description: "用中文浏览 Hacker News 热门内容",
  keywords: ["Hacker News", "HN", "Hacker News 热门", "互联网热门", "科技"],
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
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Hacker News`,
      shortTitle: "BuzzHN",
      description: `See what's buzzing on Hacker News in your native language`,
      keywords: ["Hacker News", "HN", "buzzing"],
      menuLinks: [
        {
          name: "RSS",
          url: "/en/rss.xml",
          prefetch: false,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Hacker News 熱門",
      shortTitle: "HN熱門",
      description: "用中文瀏覽 Hacker News 熱門內容",
      keywords: ["Hacker News", "HN", "Hacker News 熱門", "互聯網熱門", "科技"],
      menuLinks: [
        {
          name: "RSS",
          url: "/zh-Hant/rss.xml",
          prefetch: false,
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
