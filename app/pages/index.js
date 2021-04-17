import Head from "next/head";
import { useState, useCallback, useEffect } from "react";

import styles from "../styles/Home.module.css";

import Header from "../components/header";

import { filters, bussiness } from "../mocks";

export default function Home() {
  const [y, setY] = useState(null);
  const [showTransparent, setShowTransparent] = useState(true);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;

      if (window && y > landing.offsetHeight - 100) {
        setShowTransparent(false);
      } else {
        setShowTransparent(true);
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
      </Head>

      <Header showTransparent={showTransparent} />
      <main>
        <div className={styles.landing} id="landing">
            <h2 className={styles.slogan}>COME A MEJOR PRECIO EN TU RESTAURANTE HABITUAL</h2>
        </div>

        <div className={styles.topFiltros}>
          <h3>Top filtros</h3>
          <div className={styles.filterList}>
            {filters.map((filter) => (
              <a href="/stores" className={styles.filter} key={filter.name}>
                <img src={filter.image}></img>
                <h4>{filter.name.toUpperCase()}</h4>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.banner__text}>
            <h3>Frase sobre el consumo local y responsable</h3>
            <p>Frase más larga sobre nosotros</p>
          </div>
        </div>
        <div className={styles.bussiness}>
          <h3>Únete a los mejores negocios de la zona</h3>
          <div className={styles.bussiness__list}>
            {bussiness.map((bussiness) => (
              <a
                href="#"
                className={styles.bussiness__card}
                key={bussiness.name}
              >
                <img src={bussiness.image}></img>
                <div>
                  <h4>{bussiness.name}</h4>
                  <p>{bussiness.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className={`${styles.banner} ${styles.banner__bussiness}`}>
          <div className={styles.banner__text}>
            <h3>Frase para los negocios</h3>
            <p>Frase más larga para los negocios</p>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footer__text}>
            <p>Copyright © Usual</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
