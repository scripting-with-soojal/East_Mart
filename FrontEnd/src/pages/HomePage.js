import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'

const HomePage = () => {
    const [auth, setAuth] = useAuth();
    return (
        <Layout title={"HomePage"}>
            <h1>HomePage</h1>
        </Layout>
    )
}

export default HomePage