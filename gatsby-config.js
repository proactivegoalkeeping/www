module.exports = {
  siteMetadata: {
    title: 'ProActive Goalkeeping',
    description:
      "Proactive Goalkeeping's Head Coach Mikhael Jaimez Ruiz has a wealth of experience having played professionally for over 10 years, including representing his country at International level."
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src/markdown`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/static/cms`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Nunito', 'Dosis']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ProActive Goalkeeping',
        short_name: 'PaG',
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#02696B`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/img/pag-logo.png` // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-remove-serviceworker'
  ]
};
