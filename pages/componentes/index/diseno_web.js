import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const DisenoWeb = ({ ClassOptions }) => {
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
                                Corporativas
                            </h2>
                            <ul>
                                <li>Páginas Web Informativas</li>
                                <li>Páginas Web Interactivas</li>
                                <li>Páginas Web de Aterrizaje</li>
                                <li>Correos Corporativos</li>
                                <li>Sistemas a Medida</li>
                            </ul>
                            <h2>
                                Ecommerce
                            </h2>
                            <ul>
                                <li>Landing Pages</li>
                                <li>Formularios para campañas</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default DisenoWeb