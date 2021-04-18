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
          <div>
            <h2 className={styles.slogan}>AHORRA DINERO MIENTRAS DISFRUTAS</h2>
            <h3 className={styles.slogan}>
              Consigue descuentos exlusivos pagando por adelantado
            </h3>
          </div>
          <button>Subscribete a tu restaurante local favorito</button>
        </div>

        <div className={styles.foodWaste}>
          <div className={styles.foodWaste__text}>
            <h2>
              AYUDANOS A INCREMENTAR EL CONSUMO RESPONSABLE Y DE PROXIMIDAD
            </h2>
            <h3>EL PLANETA Y SUS HABITANTES TE LO AGRADECERAN!</h3>
            <p>
              El consumo de proximidad es respetuoso con el medio ambiente, es
              económico, disminuye la denominada “huella de carbono” y respeta
              la continuidad de la biodiversidad de nuestros ecosistemas.
              Reducir la pérdida y el desperdicio de alimentos puede incrementar
              la disponibilidad de comida y, por lo tanto, hacer que esta sea
              más asequible para los consumidores sin incrementar la producción
              ni continuar desgastando los recursos naturales.
            </p>
          </div>
          <div className={styles.foodWaste__cifras}>
            <div className={`${styles.foodWaste__card}`}>
              <h3>10%</h3>
              <p>reducción media en tus compras habituales</p>
            </div>
            <div className={`${styles.foodWaste__card}`}>
              <h3>1</h3>
              <p>millón de kg de comida no malgastada des de 2021</p>
            </div>
            <div className={`${styles.foodWaste__card}`}>
              <h3>34</h3>
              <p>
                restaurantes que ya se han unido al consumo local y responsable
              </p>
            </div>
          </div>
        </div>

        <div className={styles.banner}>
          <div className={styles.banner__text}>
            <h3>
              Únete al consumo local y colabora ambiental, social y
              economicamente
            </h3>
          </div>
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
        <div className={`${styles.banner} ${styles.banner__bussiness}`}>
          <div className={styles.banner__text}>
            <h3>La revolución 4.0 para tu negocio ya está aquí!</h3>
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
        <footer className={styles.footer}>
          <div className={styles.footer__text}>
            <p>Copyright © Usual</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
