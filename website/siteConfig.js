/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'img/bee.svg',
    infoLink: 'https://1hive.org/',
    pinned: true,
  },
];

// Site Config
const siteConfig = {
	// global website stuff
  title: '1Hive DAO Kit', 
  tagline: 'A template for sustainable community driven organizations',


	/////////////////////////////////////////////////////////////////////////
	
	// EXAMPLE
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

	// UNCOMMENT FOR LOCAL DEVELOPMENT
	url: 'https://your-docusaurus-test-site.com', // Your website URL
	baseUrl: '/', // Base URL for your project */
	
	// UNCOMMENT FOR PUBLISHING TO GH-PAGES
	//url: 'https://1hive.github.io', // Your website URL
	//baseUrl: '/kit/', // Base URL for your project */
	
	/////////////////////////////////////////////////////////////////////////

  // Used for publishing and more
  projectName: 'kit',
  organizationName: '1Hive',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'


  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
		{doc: 'contributing-welcome', label: 'Contribute'},
		{doc: 'projects-welcome', label: 'Projects'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#6da9e2',
    secondaryColor: '#c7def4',
    accentColor: '#785BA3',
    actionColor: '#008cf2',
  },


  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
