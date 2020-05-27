import Head from 'next/head'

const Home = () => (
  <div className='wrapper'>
    <div className='container'>
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:ital,wght@1,300&family=Raleway&display=swap');
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
            justify-content: center
            margin-bottom: 5%;
          }
          #about {
            display: flex;
            font-size: 14px;
            flex-direction: column;
            position: absolute;
            height: 90%;
            width:100%;
            color: white;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 2px;
            align-content;center;
          }
          #about p{
              margin-top: 5%;
              width: 40%;
              margin-left: 10%;
              animation: right 2s infinite;
              text-transform: uppercase;
              background: rgba(0,0,0,.7);
              padding:3em;
              
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
      <div className='about'>
        <div id='about'>
          <p>
            StoneShine Ventures is a creative marketing and brand strategy shop
            based in Brooklyn, New York. Over the last 15 years, Allyson Stone
            has establshed a well-rooted foundation in experential marketing
            within the food and beverage industry. Specializing in conzumer
            goods, wellness and events, we work with 'feel good' companies
            including PopChips, City Winery, and Nounos, helping to elevate each
            brand to the sky's limit.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Home
