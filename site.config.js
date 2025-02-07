module.exports = {
    // where it all starts -- the site's root Notion page (required)
    // rootNotionPageId: '78fc5a4b88d74b0e824e29407e9f1ec1',
    rootNotionPageId: '1936be27a3568079bcc6e520e669bde6',

    // if you want to restrict pages to a single notion workspace (optional)
    // (this should be a Notion ID; see the docs for how to extract this)
    rootNotionSpaceId: null,

    // basic site info (required)
    name: 'Why So Serious',
    domain: 'whysoserious.vercel.app',
    author: 'Why So Serious',

    // open graph metadata (optional)
    description:
        'Why So Serious, life is short, enjoy the moment',
    socialImageTitle: 'Why So Serious?',
    socialImageSubtitle: 'Nothing is serious, enjoy the moment! 👋',

    // social usernames (optional)
    facebook: 'thanhtinhpas1',
    github: 'thanhtinhpas1',
    linkedin: 'tinh-tran-thanh',

    // default notion icon and cover images for site-wide consistency (optional)
    // page-specific values will override these site-wide defaults
    defaultPageIcon: null,
    defaultPageCover: null,
    defaultPageCoverPosition: 0.5,

    fontFamily: 'Mali',

    // image CDN host to proxy all image requests through (optional)
    // NOTE: this requires you to set up an external image proxy
    imageCDNHost: null,

    // Utteranc.es comments via GitHub issue comments (optional)
    utterancesGitHubRepo: 'thanhtinhpas1/WhySoSerious',

    // whether or not to enable support for LQIP preview images (optional)
    // NOTE: this requires you to set up Google Firebase and add the environment
    // variables specified in .env.example
    isPreviewImageSupportEnabled: false,

    // map of notion page IDs to URL paths (optional)
    // any pages defined here will override their default URL paths
    // example:
    //
    // pageUrlOverrides: {
    //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
    //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
    // }
    pageUrlOverrides: null
};
