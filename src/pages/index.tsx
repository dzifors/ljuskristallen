import Head from 'next/head'
import Layout from '~/components/layout'
import About from '~/sections/about'
import Hero from '~/sections/hero'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Ljuskristallen</title>
      </Head>
      <About />
    </Layout>
  )
}

export default Home
