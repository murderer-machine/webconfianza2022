import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Branding = ({ ClassOptions }) => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={7} className={`${ClassOptions} p-4`}>
                        <div>
                            <h2>
                                La clave de una marca <br />
                                exitosa NO es el Logo,<br />
                                es el <b>Sistema Visual.</b><br />
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
                                Marca
                            </h2>
                            <ul>
                                <li>Diseño de Logotipo</li>
                                <li>Naming (nombre de marca)</li>
                                <li>Slogan, Tagline</li>
                            </ul>
                            <h2>
                                Identidad
                            </h2>
                            <ul>
                                <li>Manual de Identidad Corporativa</li>
                                <li>Papelería Corporativa</li>
                                <li>Merchandising</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Branding