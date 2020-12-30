import React from 'react'
import "tailwindcss/tailwind.css"
import Layout from './components/Layout'
import './css/styles.css'


const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    ) 
}
export default MyApp 