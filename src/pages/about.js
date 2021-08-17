// Imports
import * as React from 'react'
import Layout from '../components/layout'

// Define component
const AboutPage = () => {
    const pageTitle = 'About'
    return (
        <Layout pageTitle={pageTitle}>
            <div className='font-sans'>
                <h1 className='font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl'>
                    {pageTitle}
                </h1>
                <div className='py-6'>
                    M is a poet based based in Dorset. blah blah blah.
                </div>
            </div>
        </Layout>
    )
}

// Export component
export default AboutPage
