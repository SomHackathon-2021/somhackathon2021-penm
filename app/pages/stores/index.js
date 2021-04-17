import styles from "../../styles/Stores.module.css";

import dynamic from "next/dynamic";
import ReactTooltip from "react-tooltip";

import Header from "../../components/header";

const Map = dynamic(() => import("../../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

const filtros = ["Tipo", "Super Usual", "Distancia"];

const tiendas = [
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: false },
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
  },
];

export default function stores() {
  return (
    <>
      <Header showTransparent={false} />
      <main className={styles.main}>
        <div className={styles.filters}>
          {filtros.map((filter) => (
            <button key={filter}>{filter}</button>
          ))}
        </div>
        <div className={styles.stores}>
          {tiendas.map((tienda) => (
            <div className={styles.store} key={tienda.name}>
              <img
                className={styles.store__img}
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              ></img>
              <p className={styles.store__filter}>{tienda.filtro}</p>
              <p className={styles.store__name}>{tienda.name}</p>
              {tienda.superUsual?.is && (
                <>
                  <img
                    src={"/android-chrome-512x512.png"}
                    className={styles.store__superUsual}
                    data-tip="Este comercio colabora para mejorar el consumo local"
                  />
                  <ReactTooltip place="bottom" type="info" effect="solid" />
                </>
              )}
            </div>
          ))}
        </div>
        <Map className={styles.map} />
        <div className={styles.space}></div>
      </main>
    </>
  );
}
