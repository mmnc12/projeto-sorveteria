import estilos from "./page.module.css";
import Image from "next/image";
import sabores from "../../public/banner-sabores.jpg";
import eventos from "../../public/eventos-image.jpg";
import sobre from "../../public/sobre-image.jpg";

export default function Home() {
  return (
    <div className={estilos.page}>
      <main className={estilos.main}>
        <div className={estilos.img_titulo}>
          <h1>SORVETE ARTESANAL</h1>
        </div>
        <div className={estilos.cards_texto}>
          <div className={estilos.img_texto}>
            <div className={estilos.imagem}>
              <Image className={estilos.img} src={sabores} alt="imagem de sorvete" />
            </div>
            <div className={estilos.texto}>
              <h2>NOSSOS SABORES</h2>
              <span>Novos e deliciosos!</span>
              <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo.</p>
            </div>
          </div>
          <div id={estilos.nossos_eventos} className={estilos.img_texto}>
            <div className={estilos.texto}>
              <h2>NOSSOS EVENTOS</h2>
              <span>Delícias com sorvete!</span>
              <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinho para te atender os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com agente.</p>
            </div>
            <div className={estilos.imagem}>
              <Image className={estilos.img} src={eventos} alt="imagem de sorvete" />
            </div>
          </div>
          <div className={estilos.img_texto}>
            <div className={estilos.imagem}>
              <Image className={estilos.img} src={sobre} alt="imagem de sorvete" />
            </div>
            <div className={estilos.texto}>
              <h2>SOBRE NÓS</h2>
              <span>Alegria em cada casquinha!</span>
              <p>Venha tomar o melhor sorvete da região aqui com agente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visite e aproveitar o atendimento e o melhor sorvete da cidade.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
