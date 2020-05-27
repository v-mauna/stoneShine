import Layout from '../components/layout'
import Home from './home'
import ToyVW from '../images/toyvw.jpg'
import Table from '../images/table.jpg'
import Balloons from '../images/balloons.jpg'
import SunStone from '../images/SunStone.jpg'
import Wine from '../images/wine.jpg'
const Index = () => (
  <Layout>
    <div>
      <Home />
    </div>

    <style jsx global>{`
  html,
  body {
    display: flex;
    flex-direction: column;
    background-image: url(${ToyVW});
    background-size: cover;
    width: 100vw;
    background-repeat: no-repeat;
    width: 100vw;
    padding: 0;
    margin: 0;
    margin-bottom: auto;
    box-sizing: border-box;
    animation-name: animate;
    animation-duration: 30s;
    animation-iteration-count: 3; 
    animation-timing-function: ease-in-out;
  }
   @keyframes animate{
    0%{
      background-image: url(${Wine});
    }
    25%{
      background-image: url(${SunStone});
    }
    50%{
      background-image: url(${Balloons});
    }
    75%{
      background-image: url('https://images.squarespace-cdn.com/content/v1/5cffa6e00eb81b0001876707/1561140408440-4GWQH1FJNWIL21GZI89I/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/zac-ong-453354-unsplash.jpg?format=1500w');
    }
    }
    100%{
      background-image: url(${Table});
    }

  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  }
`}</style>
  </Layout>
)

export default Index
