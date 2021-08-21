// Imports
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

// Define component
const PoemPost = ({ data }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <div className='font-sans text-center'>
                <h1 className='font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl'>
                    {data.mdx.frontmatter.title}
                </h1>
                <p className='text-sm md:text-base font-normal text-gray-600'>
                    Published {data.mdx.frontmatter.pubDate}
                </p>
                <div className='py-6 font-serif leading-loose font-light'>
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </div>
            </div>
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
