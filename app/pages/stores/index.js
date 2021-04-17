import styles from "../../styles/Stores.module.css";

import dynamic from "next/dynamic";

import Header from "../../components/header";

const Map = dynamic(() => import("../../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

const filtros = ["Tipo", "Super Usual", "Distancia"];

const tiendas = [
  "test",
  "test2",
  "test3",
  "test4",
  "test5",
  "test6",
  "test7",
  "test8",
];

export default function stores() {
  return (
    <>
      <Header showTransparent="false" />
      <main className={styles.main}>
        <div className={styles.filters}>
          {filtros.map((filter) => (
            <button key={filter}>{filter}</button>
          ))}
        </div>
        <div className={styles.stores}>
          {tiendas.map((tienda) => (
            <div className={styles.store} key={tienda}>
              <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></img>
              <p>{tienda}</p>
            </div>
          ))}
        </div>
        <Map className={styles.map} />
        <div className={styles.space}></div>
      </main>
    </>
  );
}
