import Head from "next/head";
import { useState, useCallback, useEffect } from "react";

import styles from "../styles/Home.module.css";

import Search from "../components/search";

import { filters } from "../mocks";

export default function Home() {
  const [y, setY] = useState(null);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      const header = document.getElementById("header");
      const landing = document.getElementById("landing");
      if (y > landing.offsetHeight - 100) {
        header.className = `${styles.cabecera} ${styles.cabecera__trasparent}`;
      } else {
        header.className = `${styles.cabecera}`;
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Usual</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.cabecera} id="header">
        <h1>Usual</h1>
        <Search />
        <div className={styles.register}>
          <button>Registrarse</button>
          <button>Login</button>
        </div>
      </header>
      <main>
        <div className={styles.landing} id="landing">
          <h2 className={styles.title}>Frase molona sobre el proyecto</h2>
        </div>

        <div className={styles.topFiltros}>
          <h3>Top filtros</h3>
          <div className={styles.filterList}>
            {filters.map((filter) => (
              <a href="#" className={styles.filter} key={filter.name}>
                <img src={filter.image}></img>
                <h4>{filter.name.toUpperCase()}</h4>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.banner__text}>
            <h3>Frase sobre el consumo local</h3>
            <p>Frase más larga sobre nosotros</p>
          </div>
        </div>
      </main>
    </div>
  );
}
