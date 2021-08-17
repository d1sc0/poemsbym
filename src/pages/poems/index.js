// Imports
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

// Define component
const PoemsIndex = ({ data }) => {
    const pageTitle = 'Poems'
    return (
        <Layout pageTitle={pageTitle}>
            <div className='font-sans'>
                <h1 className='font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl'>
                    {pageTitle}
                </h1>
                <div className='py-6'>
                    {data.allMdx.nodes.map((node) => (
                        <ul>
                            <li key={node.id}>
                                <Link to={`/poems/${node.slug}`} className=''>
                                    {node.frontmatter.title}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

// graphQL query
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
            }
        }
    }
`

// Export component
export default PoemsIndex
