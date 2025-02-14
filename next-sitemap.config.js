/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://aprianfi.my.id", // Change this to your actual domain
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 5000, // Split large sitemaps
    changefreq: "daily",
    priority: 0.7,
};
