import Link from 'next/link'
import Logo from '../images/logo.png'
const Navbar = () => {
  return (
    <nav>
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:ital,wght@1,300&family=Raleway&display=swap');
        nav {
            margin-bottom: auto;
            margin-top: 0;
            width: 100vw;
            height: 100px;
            display: block;
          }
          #topNav {
            font-size: 14px;
            list-style: none;
            display: flex;
            margin-top: 0;
            width: 100vw;
            padding: 0;
          }

          #name {
            margin: 1em ;
            letter-spacing: 2px;
            font-style: bold;
            font-family: 'Arimo', sans-serif;
            text-transform: uppercase;
            text-align: left;
            font-weight: 800;
            width: 20vw;
            justify-content: left;
            align-content: left;
          }
          #logo{
              height: 90px;
              padding-right: 50vw;

          }
          #text{
              font-family: 'Arimo',sans-serif;
              font-size: 10px;
          }
          li {
            margin: 1em;
            text-align: right;
            align-content:center;
            justify-content: center;
            font-weight: 800;
          }
          a {
            text-decoration: none;
            text-transform: uppercase;
            color: white;        
            font-size: 16px;  
            font-family: 'Montserrat', sans-serif;
          }
          a::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: rgba(0,0,0,.7);
            transition: width .3s;
        }
        a:hover{
          color: rgba(0,0,0,.7);
          transition: 3s ease;
        }
          a:hover::after {
            width: 100%;
            transition: 3s ease;
          }
          }
        `}
      </style>

      <ul id='topNav'>
        <li>
          <Link href='/'>
            <a id='name' title='Home'>
              <img id='logo' alt='Stone Shine Logo' src={Logo} />
            </a>
          </Link>{' '}
        </li>
        <li>
          <Link href='/about'>
            <a title='Who We Are'>
              Who We Are
            </a>
          </Link>
        </li>
        <li>
          <Link href='/publications'>
            <a title='Services'>
              Services
            </a>
          </Link>{' '}
        </li>
        <li>
          <Link href='/contact'>
            <a title='Contact'>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
