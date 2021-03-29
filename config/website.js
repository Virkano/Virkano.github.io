const meta = {
  // Metadata
  siteTitle: 'Kano Zhao - Creative Web Designer',
  siteDescription:
    'Kano Zhao - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Kano Zhao',
  siteShortName: 'Kano Zhao',
  siteUrl: 'https://virkano.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@KanoZhao',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'Kano',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
