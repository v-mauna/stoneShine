import Head from 'next/head'
import Layout from '../components/layout'

const About = () => (
  <Layout>
    <div className='wrapper'>
      <div className='container'>
        <style jsx>
          <link
            href='https://fonts.googleapis.com/css2?family=Arimo&family=Jost:ital,wght@0,400;1,200&family=Karla&family=Spectral&display=swap'
            rel='stylesheet'
          />
          {`
            .wrapper {
              display: block;
            }
            .container {
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
              font-size: 16px;
              width: 100vw;
              line-height: 2em;
              justify-content: center;
              align-content: center;
              text-align: left;
              margin-bottom: 5%;
            }
            p {
              font-family: 'Spectral', serif;
              font-weight: 500;
              width: 80%;
              margin-left: 10%;
            }
            img {
              width: 100vw;
              align-content: center;
              justify-content: center;
              align-self: center;
            }

            .home-img {
              display: flex;
              width: 100vw;
            }
            .about {
              display: flex;
              flex-direction: column;
            }
            #about {
              display: flex;
              flex-direction: column;
              width: 100vw;
              
              height: 100%;
              background: rgba(0, 0, 0, 0.2);
              color: white;
              align-self: center;
              justify-content: center;
              align-content: center;
            }
            #about img {
              width: 25%;
              margin-left: 37.5%;
            }
          `}
        </style>
        <Head>
          <script
            src='https://kit.fontawesome.com/6f92a9206c.js'
            crossOrigin='anonymous'
          />
          <meta name='description' content='' />
          <title>Stone Shine Ventures || Home</title>
        </Head>
        <div id='about'>
          <p>
            STONESHINE VENTURES IS A CREATIVE MARKETING AND BRAND STRATEGY SHOP
            BASED IN BROOKLYN, NEW YORK. OVER THE LAST 15 YEARS, ALLYSON STONE
            HAS ESTABLISHED A WELL-ROOTED FOUNDATION IN EXPERIENTIAL MARKETING
            WITHIN THE FOOD AND BEVERAGE INDUSTRY. SPECIALIZING IN CONSUMER
            GOODS, WELLNESS AND EVENTS, WE WORK WITH “FEEL GOOD” COMPANIES
            INCLUDING POPCHIPS, CITY WINERY AND NOUNÓS, HELPING TO ELEVATE EACH
            BRAND TO THE SKY’S LIMIT.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
