// Imports
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

// Define component
const IndexPage = ({ data }) => {
    return (
        <Layout pageTitle='Poems'>
            <p className='p-4'>
                {data.allMdx.nodes.map((node) => (
                    <div key={node.id}>
                        <strong>
                            <Link to={node.slug}>{node.frontmatter.title}</Link>
                        </strong>
                        <div>
                            <small>Published: {node.frontmatter.pubDate}</small>
                            <MDXRenderer>{node.body}</MDXRenderer>
                        </div>
                    </div>
                ))}
            </p>
        </Layout>
    )
}

export const data = graphql`
    query {
        allMdx(sort: { fields: frontmatter___pubDate, order: DESC }) {
            nodes {
                frontmatter {
                    title
                    pubDate(formatString: "D MMMM YYYY")
                }
                id
                slug
                body
            }
        }
    }
`

// Export component
export default IndexPage
