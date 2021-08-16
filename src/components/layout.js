import * as React from 'react'
import { Link } from 'gatsby'
const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav className='bg-yellow-300 grid grid-cols-4 gap-2'>
                <div className='text-center border-2 col-start-2'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='text-center border-2 col-start-3'>
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
export default Layout
