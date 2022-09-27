
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'animate.css';
import '../styles/globals.scss'
import Iconos from './../pages/componentes/Iconos'
const MyApp = ({ Component, pageProps }) => {
  const MenuOptions = [
    {
      name: 'Inicio',
      href: '/#inicio'
    },
    {
      name: 'Servicios',
      href: '/#servicios'
    },
   
  ]
  return (
    <>
    <Iconos />
      {/* <Navbar expand="lg" fixed="top" bg="light" >
        <Container >
          <Navbar.Brand href="/#inicio" className='fuenteLogo'>Confianza & Vida</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {MenuOptions.map((item, index) => (
                <Nav.Link key={index} href={item.href}>{item.name}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
