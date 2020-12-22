const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.warn('*** processing node type', node.internal.type);

  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: 'markdown' });

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        let template = 'static-page';

        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/${template}.tsx`),
          context: {
            slug: node.fields.slug
          }
        });
        resolve();
      });
    });
  });
};
