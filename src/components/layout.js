// Imports
import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { useState } from 'react'

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

    const [menuActive, setMenuState] = useState(true)
    return (
        <>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>

            <div className='leading-normal tracking-normal'>
                <nav id='header' className='w-full z-10 top-0'>
                    <div className='w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3'>
                        <Link
                            className='text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl pl-4'
                            to='/'
                        >
                            {data.site.siteMetadata.title}
                        </Link>

                        <div className='block lg:hidden pr-4'>
                            <button
                                id='nav-toggle'
                                onClick={() => setMenuState(!menuActive)}
                                className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none'
                            >
                                <svg
                                    className='fill-current h-3 w-3'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <title>Menu</title>
                                    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                                </svg>
                            </button>
                        </div>

                        <div
                            className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
                                menuActive ? 'hidden' : ''
                            } lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20`}
                            id='nav-content'
                        >
                            <ul className='list-reset lg:flex justify-end flex-1 items-center'>
                                <li className='mr-3'>
                                    <Link
                                        className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4'
                                        to='/poems/'
                                    >
                                        Poems
                                    </Link>
                                </li>
                                <li className='mr-3'>
                                    <Link
                                        className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4'
                                        to='/about/'
                                    >
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className='container w-full md:max-w-4xl mx-auto pt-1 pl-4'>
                    {children}
                </div>
            </div>
        </>
    )
}

// Export component
export default Layout
