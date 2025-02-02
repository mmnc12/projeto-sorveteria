import Image from "next/image";
import Logo from "../../../public/logo.png";
import estilos from "./rodape.module.css";
export default function Rodape() {
  return (
    <div className={estilos.container_rodape}>
      <div className={estilos.logo_info}>
        <div>
          <Image className={estilos.img} src={Logo} alt="Imagem da logo" />
        </div>
        <div className={estilos.info_contato}>
          <h3>ENDEREÇO</h3>
          <p>Av Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div className={estilos.info_contato}>
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div className={estilos.info_contato}>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div className={estilos.autor}>
        <p>Gelateria. Orgulhosamente desenvolvido por "Manoel Mecias do Nascimento"</p>
      </div>
    </div>
  )
}