import React from "react"
import style from "./../../styles/iconos.module.scss"
import Image from "next/image"
import IconoFacebook from "./../../public/iconoFacebook.png"
import IconoInstagram from "./../../public/iconoInstagram.png"
import IconoWhatsapp from "./../../public/iconoWhatsapp.png"
import IconoMessenger from "./../../public/IconoMessenger.png"
import IconoTelefono from "./../../public/IconoTelefono.png"
const Iconos = () => {
    return (
        <>
            <div className={style.principal}>
                <div>
                <a href="https://www.facebook.com/confianzayvidaseguros" target="_blank" rel="noreferrer"><Image src={IconoFacebook} width={40} height={40} /></a>
                </div>
                <div>
                <a href="#" target="_blank" rel="noreferrer"><Image src={IconoInstagram} width={40} height={40} /></a>
                </div>
                <div>
                <a href="https://api.whatsapp.com/send?phone=51966656455&text=Confianza%20&%20Vida" target="_blank" rel="noreferrer"><Image src={IconoWhatsapp} width={40} height={40} /></a>
                </div>
                <div>
                <a href="https://m.me/confianzayvidaseguros" target="_blank" rel="noreferrer"><Image src={IconoMessenger} width={40} height={40} /></a>
                </div>
                <div>
                <a href="tel:+51966656455" target="_blank" rel="noreferrer"><Image src={IconoTelefono} width={40} height={40} /></a>
                </div>
            </div>
        </>
    )
}
export default Iconos