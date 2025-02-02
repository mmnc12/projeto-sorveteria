import Image from "next/image";
import Sobre_imagem from "../../../public/sobre-image.jpg";
import Sorveteria from "../../../public/sorveteria.jpg";
import estilos from "./sobre.module.css";

export default function Sobre() {
  return (
    <div className={estilos.container_sobre}>
      <div className={estilos.titulo_fundo}>
        <h1>A GELATERIA</h1>
      </div>
      <div className={estilos.texto_imagem}>
        <div className={estilos.texto}>
          <h3>Sobre Nós</h3>
          <span>Nós simplesmente amamos sorvete!</span>
          <p>
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
          </p>
          <p>
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
          </p>
        </div>
        <div className={estilos.imagem}>
          <Image className={estilos.img} src={Sobre_imagem} alt="imagem de pessoas com sorvete" />
          <Image className={estilos.img} src={Sorveteria} alt="imagem de uma sorveteria" />
        </div>
      </div>
    </div>
  )
}