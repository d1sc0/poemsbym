// Imports
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

// Define component
const IndexPage = ({ data }) => {
    const pageTitle = 'Home'
    return (
        <Layout pageTitle={pageTitle}>
            <div className='font-sans'>
                <h1 className='font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl'>
                    {pageTitle}
                </h1>
                <div className='py-6'>
                    {data.allMdx.nodes.map((node) => (
                        <div key={node.id}>
                            Latest Poem:{' '}
                            <Link to={`/poems/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                            <div>
                                <small>
                                    Published: {node.frontmatter.pubDate}
                                </small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

// GraphQL query
export const data = graphql`
    query {
        allMdx(sort: { fields: frontmatter___pubDate, order: DESC }, limit: 1) {
            nodes {
                frontmatter {
                    title
                    pubDate(formatString: "D MMMM YYYY")
                }
                id
                slug
            }
        }
    }
`

// Export component
export default IndexPage
