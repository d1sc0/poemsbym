// Imports
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

// Define component
const PoemPost = ({ data }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    )
}

// GraphQL query
export const data = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                pubDate(formatString: "D MMMM YYYY")
            }
            body
        }
    }
`
// highlight-end

// Export component
export default PoemPost
