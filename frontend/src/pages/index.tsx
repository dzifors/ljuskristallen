import Head from 'next/head'
import Layout from '~/components/layout'
import About from '~/sections/about'
import Contact from '~/sections/contact'
import Info from '~/sections/info'
import Prices from '~/sections/prices'
import Team from '~/sections/team'
import WhyUs from '~/sections/why-us'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Ljuskristallen</title>
      </Head>
      <About />
      <Prices />
      <WhyUs />
      <Contact />
      <Team />
      <Info />
    </Layout>
  )
}

export default Home
