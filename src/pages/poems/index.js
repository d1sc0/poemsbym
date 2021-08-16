// Imports
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

// Define component
const PoemsIndex = ({ data }) => {
    return (
        <Layout pageTitle='Poems'>
            <p className='p-4'>
                {data.allMdx.nodes.map((node) => (
                    <div key={node.id}>
                        <strong>
                            <Link to={`/poems/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </strong>
                    </div>
                ))}
            </p>
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
