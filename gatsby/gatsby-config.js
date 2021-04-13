import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
/*
this for es modules with gatsby because in package.json under the "build" script
Wes added "NODE_OPTIONS='r esm' gatsby build"
*/
export default {
  siteMetadata: {
    title: 'Slicks Slices',
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Kalamazoo!',
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'tpjw0jrd',
        dataset: 'production',
        // automatically updates gatsby from sanity, no need to rebuild
        watchMode: true,
        /*
        this is sensitive info!
        This file is stored in version control and could be accessed there.
        This secret token should be stored in a .env file.
        the token can be accessed from the .env file like below.
        Also the inport of dotenv at the top.
        */
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
