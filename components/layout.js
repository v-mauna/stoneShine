import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

const Layout = props => (
  <div>
    <Head>
      <title>StoneShine Ventures</title>
    </Head>
    <Navbar />
    <div className="container">
    {props.children}
    </div>
  </div>
)

export default Layout
