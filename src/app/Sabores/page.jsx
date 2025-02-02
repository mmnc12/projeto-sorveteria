import Image from "next/image";
import Oreo from "../../../public/sabor-oreo.png";
import Pistache from "../../../public/sabor-pistache.png";
import Cookies from "../../../public/sabor-cookies-avela.png";
import Kiwi from "../../../public/sorbet-kiwi.png";
import Limao from "../../../public/sorbet-limao.png";
import Morango from "../../../public/sorbet-morango.png";
import estilos from "./sobores.module.css";

export default function Sabores() {
  return (
    <div className={estilos.container_sabores}>
      <div className={estilos.fundo_titulo}>
        <h1>NOSSOS SABORES</h1>
      </div>
      <div className={estilos.subtitulo_cards}>
        <div>
          <h2>SABORES DE SORVETE</h2>
        </div>
        <div className={estilos.cards}>
          <div className={estilos.card}>
            <Image className={estilos.img} src={Oreo} alt="Imagem de sorvete de oreo" />
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>
          <div className={estilos.card}>
            <Image className={estilos.img} src={Pistache} alt="Imagem de sorvete de pistache" />
            <h3>Sorvete Pistache</h3>
            <p>Cremoso sorvete com sabor pistache com pedacinhos de sementes.</p>
          </div>
          <div className={estilos.card}>
            <Image className={estilos.img} src={Cookies} alt="Imagem de sorvete de Cookies & Avelã" />
            <h3>Sorvete Cookies & Avelã</h3>
            <p>Nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
          <div className={estilos.card}>
            <Image className={estilos.img} src={Kiwi} alt="Imagem de sorvete de Kiwi" />
            <h3>Sorvete de Kiwi</h3>
            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
          </div>
          <div className={estilos.card}>
            <Image className={estilos.img} src={Morango} alt="Imagem de sorvete de Morango" />
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div className={estilos.card}>
            <Image className={estilos.img} src={Limao} alt="Imagem de sorvete de Limão" />
            <h3>Sorvete de Limão Siciliano</h3>
            <p>O incrível sorverte gourmet de limão siciliano vai te encantar.</p>
          </div>
        </div>
      </div>
    </div>
  )
}