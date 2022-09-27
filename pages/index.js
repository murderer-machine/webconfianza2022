
import { Col, Container, Row, Modal, Form } from 'react-bootstrap'
import Logo from '../public/logo.svg'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import style from './../styles/inicio.module.scss'
import PBrand from './../public/p_brand.svg'
import PDisenoDigital from './../public/p_disenodigital.svg'
import PMarketingDigital from './../public/p_marketingdigital.svg'
import PDisenoWeb from './../public/p_disenoweb.svg'
import PSem from './../public/p_sem.svg'
import PSocialAds from './../public/p_socialads.svg'
import PMailMarketing from './../public/p_emailmarketing.svg'
import { useState } from 'react'

import Branding from './../pages/componentes/index/branding'
import MarketingDigital from './componentes/index/marketing_digital'
import DisenoWeb from './componentes/index/diseno_web'
import ImagenNosotros from './../public/nosotros.svg'

const Home = () => {
  const ClassOptions = ``
  const [show, setShow] = useState(false)
  const [nombreComponente, setNombreComponente] = useState('')
  const handleClose = () => setShow(false)
  const handleShow = (nombre) => {
    setNombreComponente(nombre)
    setShow(true)
  }
  const dataServicios = [
    {
      imagen: PBrand,
      titulo: 'Branding',
      descripcion: 'Branding es el trabajo de gestión de marca con el objetivo de hacerla conocida,deseada y con una imagen positiva en la mente y el corazón de los consumidores.',
      boton: 'branding',
    },
    {
      imagen: PMarketingDigital,
      titulo: 'Marketing Digital',
      descripcion: 'Aplicamos estrategias de comercialización llevadas a cabo en los medios digitales.',
      boton: 'marketingDigital',
    },
    {
      imagen: PDisenoWeb,
      titulo: 'Diseño Web',
      descripcion: 'El diseño web es un área enfocada en el desarrollo de interfaces digitales, como el diseño de sitios y aplicaciones para web',
      boton: 'disenoWeb',
    },
    {
      imagen: PSem,
      titulo: 'SEM',
      descripcion: 'Marketing en buscadores es igual a Google Adwords. Desarrolla tus campañas con un equipo de data analysts.',
      boton: 'otro',
    },
    {
      imagen: PSocialAds,
      titulo: 'Social Ads',
      descripcion: 'Las campañas de publicidad en redes sociales ofrecen un gran éxito gracias a la variedad de segmentaciones y audiencias.',
      boton: 'otro',
    },
    {
      imagen: PMailMarketing,
      titulo: 'Mail Marketing',
      descripcion: 'El email marketing es una de las acciones con más recorrido del marketing y la que mejores resultados ofrece en ROI.',
      boton: 'otro',
    }
  ]
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3002/api/usuarios/correo', {
      method: 'POST',
      body: JSON.stringify(inputs), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        setInputs([])
        alert('enviado correctamente')

      })
  }
  return (
    <>
      <Container className={`${style.containerInicio}`} fluid>
        <Row className={`${style.rowInicio} p-0 m-0 `}>
          <Col xs={6} className={`${style.persona} d-none d-none d-md-block`}  >
          </Col>
          <Col xs={12} md={6} className={`d-flex flex-column justify-content-center align-items-start align-content-center p-5`}>
            <div>
              <Image src={Logo} width={500} height={100} />
              <br />
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      'Disfrutamos hacernos cargo, sin miedo,de los desafíos comunicacionales del futuro.',
                      'Agencia de marketing digital, diseño web, branding, social media y SEO/SEM',
                      'Creamos estrategias digitales para los que sueñan en grande',
                      'Marketing digital pensado en conectar con los usuarios'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 20,
                  }}
                />
              </h1>
              <p>Nos apasiona trabajar con quienes defienden lo que creen y sueñan en grande.</p>
              <button>Descubre Confianza & Vida</button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className={`${style.rowNosotros} p-5`}>
          <Col xs={12} md={7} className="d-flex flex-column justify-content-center align-items-start align-content-center">
            <div>
            <h1 style={{fontWeight:'900'}}><span className='span'>Somos</span> Confianza y Vida,</h1>
            <h2>Un gran equipo multidisciplinario</h2>
            <br/>
            <p>Que busca transformar tu marca, desarrollar un nuevo negocio, llevar al mundo una gran idea y contar historias sobre productos y servicios de la forma más creativa e impactante.</p>
            <p>Una agencia de marketing digital que provee servicios integrales de comunicación y diseño para todo tipo de empresa y sector.</p>
            <button>¿que hacemos?</button>
            <button>conversemos</button>
            </div>
          </Col>
          <Col xs={12} md={5} className="d-flex flex-column justify-content-center align-items-start align-content-center">
            <Image src={ImagenNosotros} width={400} height={400} />
          </Col>
        </Row>
      </Container>

      <Container >
        <Row className={`p-5`}>
          <Col sm={12}>
            <h1>¿Qué podemos hacer por ti?</h1>
            <p>¡Marketing online y Publicidad Digital a tu servicio! Nos expones tus necesidades y te aportamos soluciones. Siguiendo siempre una estrategia basada en performance, donde nuestro objetivo es mejorar tus resultados.</p>
          </Col>
          {
            dataServicios.map((servicio, index) => (
              <Col sm={12} md={4} key={index}>
                <Image src={servicio.imagen} width={60} height={60} /><br />
                <h4>{servicio.titulo}</h4>
                <p>{servicio.descripcion}</p>
                <button onClick={() => { handleShow(servicio.boton) }}>información</button>
              </Col>
            ))
          }
        </Row>
      </Container>

      <Container >
        <Row>
          <Col xs={12}>
            <h2>Gran Equipo</h2>
            <h4>Diferentes capacidades para ejecutar una gran estrategia</h4>
          </Col>
          <Col xs={12} md={6} className={`text-center`}>
            <img src='http://placehold.jp/3d4070/ffffff/150x150.png' />
            <h5>Carlos Eduardo Valdivia Herrera</h5>
            <h6>Director General</h6>
            <p>Ingeniero de Sistemas Colegiado Egresado de la UCSM, magister en gerencia de Proyectos.
              Enzo lidera nuestros proyectos tecnológicos y alcanza resultados rápidamente con su buena vibra y minuciosa metodología.</p>
          </Col>
          <Col xs={12} md={6} className={`text-center`}>
            <img src='http://placehold.jp/3d4070/ffffff/150x150.png' />
            <h5>Marco Antonio Rodriguez Salinas</h5>
            <h6>Desarrollador Web</h6>
            <p>Egresado de la carrera de desarrollo de sistemas por el ISUR - Arequipa.
              Brooks facilita el trabajo de nuestros clientes, creando complejos sistemas fáciles de usar.</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12}>
            <h2>Nuestro portafolio</h2>
            <h4>Conectamos personas con marcas a través de grandes experiencias digitales.</h4>
          </Col>
          <Col xs={12} md={6} className={`text-center`}>
            <img src="https://picsum.photos/300/250" style={{ width: "100%", height: "250px" }} />
            <h4>El reto</h4>
            <p>Cofemicsa es una empresa de seguridad electrónica de amplia trayectoria reconocida por su innovación y siempre estar a la vanguardia.
              El nombre nace como la unión de las siglas iniciales de los fundadores.
              El gran reto al que nos enfrentamos es que luego de varios años y diferentes intentos por tener una marca que los identifique existía una confusión entre como llamar a la empresa, si CFM o Cofemicsa.</p>
            <h4>La solución.</h4>
            <p>Tras un estudio y análisis a profundidad se decidió que lo mejor para lograr un correcto posicionamiento de la marca era quedarse con su nombre inicial, "Cofemicsa" y que luego de una campaña de rebranding y comunicación potente "CFM" sea su marca abreviada, permitiendo que su público objetivo se familiarice con ambos nombres.
              En Malcolm nos encargamos de realizar un rebranding completo de la marca, el rediseño de su página web y la gestión de sus redes sociales.</p>
          </Col>
          <Col xs={12} md={6} className={`text-center`}>
            <img src="https://picsum.photos/300/250" style={{ width: "100%", height: "250px" }} />
            <h4>El reto</h4>
            <p>Cofemicsa es una empresa de seguridad electrónica de amplia trayectoria reconocida por su innovación y siempre estar a la vanguardia.
              El nombre nace como la unión de las siglas iniciales de los fundadores.
              El gran reto al que nos enfrentamos es que luego de varios años y diferentes intentos por tener una marca que los identifique existía una confusión entre como llamar a la empresa, si CFM o Cofemicsa.</p>
            <h4>La solución.</h4>
            <p>Tras un estudio y análisis a profundidad se decidió que lo mejor para lograr un correcto posicionamiento de la marca era quedarse con su nombre inicial, "Cofemicsa" y que luego de una campaña de rebranding y comunicación potente "CFM" sea su marca abreviada, permitiendo que su público objetivo se familiarice con ambos nombres.
              En Malcolm nos encargamos de realizar un rebranding completo de la marca, el rediseño de su página web y la gestión de sus redes sociales.</p>
          </Col>


        </Row>
      </Container>
      <Container >
        <Row>
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="nombres">
                <Form.Control size="sm" type="text" placeholder="Nombres y Apellidos" onChange={handleChange} value={inputs.nombres || ""} name="nombres" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="empresa">
                <Form.Control size="sm" type="text" placeholder="Empresa" onChange={handleChange} value={inputs.empresa || ""} name="empresa" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="quieneres">
                <Form.Control size="sm" type="text" placeholder="¿Quién eres?" onChange={handleChange} value={inputs.quienEres || ""} name="quienEres" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control size="sm" type="email" placeholder="Correo" onChange={handleChange} value={inputs.correo || ""} name="correo" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="telefono">
                <Form.Control size="sm" type="text" placeholder="Teléfono" onChange={handleChange} value={inputs.telefono || ""} name="telefono" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="mensaje">
                <Form.Control as="textarea" row={5} placeholder="Mensaje" onChange={handleChange} value={inputs.mensaje || ""} name="mensaje" />
              </Form.Group>
              <button type="submit">
                Empecemos
              </button>
            </Form>
          </Col>
          <Col xs={12} md={6}>
            CONFIANZA & VIDA ASESORES Y CORREDORES DE SEGUROS S.A.C<br />
            AV. QUIÑONES LOCAL 2 MZA. B LOTE. 6 URB. MAGISTERIAL II Yahanuara, Arequipa<br />
            966656455<br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.480920787716!2d-71.54901025850138!3d-16.397275912512598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424bd79d86e3df%3A0x83346edbdf917b58!2sCONFIANZA%20%26%20VIDA%20ASESORES%20Y%20CORREDORES%20DE%20SEGUROS%20S.A.C.!5e0!3m2!1ses-419!2spe!4v1655306366883!5m2!1ses-419!2spe" width="600" height="450" ></iframe>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            {
              {
                'branding': <h1>Branding</h1>,
                'marketingDigital': <h1>Marketing Digital</h1>,
                'disenoWeb': <h1>Diseño Web</h1>,
              }[nombreComponente]
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            {
              'branding': <Branding ClassOptions={ClassOptions} />,
              'marketingDigital': <MarketingDigital ClassOptions={ClassOptions} />,
              'disenoWeb': <DisenoWeb ClassOptions={ClassOptions} />,
            }[nombreComponente]
          }
        </Modal.Body>
      </Modal>
    </>
  )
}
export default Home