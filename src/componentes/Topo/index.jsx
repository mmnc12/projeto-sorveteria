import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import estilos from "./topo.module.css";
import Sabores from "@/app/Sabores/page";
import Sobre from "@/app/Sobre/page";

export default function Topo() {
  return (
    <div className={estilos.container_topo}>
      <div className={estilos.logo_link}>
        <div>
          <Image className={estilos.img} src={Logo} alt="Imagem da logo" />
        </div>
        <div className={estilos.links}>
          <Link className={estilos.link} href="/">Home</Link>
          <Link className={estilos.link} href="/Sabores">Sabores</Link>
          <Link className={estilos.link} href="/Sobre">Sobre</Link>
        </div>
      </div>
    </div>
  );
}