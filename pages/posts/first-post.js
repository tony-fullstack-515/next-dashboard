import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Create Next App</title>
                    <link rel='icon' href='/favicon.co' />
                </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a> Back to Home</a>
                    </Link>
                </h2>
            </Layout>
        </>
    );
}