import styles from "./Header.module.css";
import Link from "next/link";

import Search from "../search/";

export default function header({ showTransparent = true }) {
  return (
    <header
      className={`${styles.cabecera}${
        showTransparent
          ? " " + styles.cabecera__trasparent
          : " " + styles.cabecera__color
      }`}
      id="header"
    >
      <Link href="/">
        <img
          src={showTransparent ? "/logo.png" : "/logo_color.png"}
          id="logo"
        />
      </Link>
      <Search />
      <div className={styles.register}>
        <button>Registrarse</button>
        <button>Login</button>
      </div>
    </header>
  );
}
