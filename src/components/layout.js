// Imports
import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// Define component
const Layout = ({ pageTitle, children }) => {
    // StaticQuery
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <header>{data.site.siteMetadata.title}</header>
            <nav className='bg-yellow-300'>
                <div className=''>
                    <Link to='/'>Poems</Link>
                </div>
                <div className=''>
                    <Link to='/about'>About</Link>
                </div>
            </nav>
            <main>
                <h1 className='font-sans text-2xl p-4'>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

// Export component
export default Layout
