import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const MarketingDigital = ({ ClassOptions }) => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={7} className={`${ClassOptions} p-4`} >
                        <div>
                            <h2>
                                La clave de una marca <br />
                                exitosa NO es el Logo,<br />
                                es el Sistema Visual.<br />
                            </h2>
                            <p>
                                Conoce este y muchos más secretos para que puedas tomar las mejores decisiones sobre tu Marca.
                            </p>
                            <button>Descubre Confianza & Vida</button>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={5} className={`${ClassOptions} p-4`}>
                        <div>
                            <h2>
                                Redes Sociales
                            </h2>
                            <ul>
                                <li>Diseños de Publicaciones</li>
                                <li>Creación y Optimización de Redes Sociales</li>
                                <li>Campañas Facebook Ads/Instagram</li>
                            </ul>
                            <h2>
                                Buscadores
                            </h2>
                            <ul>
                                <li>Campañas Google Ads</li>
                                <li>Posicionamiento Web</li>
                            </ul>
                            <h2>
                                Imagen
                            </h2>
                            <ul>
                                <li>Brochures, Flyers</li>
                                <li>Catálogos, Revistas</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default MarketingDigital