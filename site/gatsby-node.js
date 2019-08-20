const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  return new Promise((resolve, reject) => {
    const weddingPost = path.resolve('./src/templates/wedding-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulWedding {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulWedding.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/wedding/${post.node.slug}/`,
            component: weddingPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}