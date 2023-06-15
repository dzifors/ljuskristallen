import Head from 'next/head'
import Layout from '~/components/layout'
import Hero from '~/sections/hero'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Ljuskristallen</title>
      </Head>
      <Hero />
    </Layout>
  )
}

export default Home
