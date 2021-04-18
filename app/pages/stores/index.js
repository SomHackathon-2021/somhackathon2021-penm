import styles from "../../styles/Stores.module.css";

import dynamic from "next/dynamic";
import ReactTooltip from "react-tooltip";
import { useState } from "react";
import Modal from "react-modal";

import Header from "../../components/header";

const Map = dynamic(() => import("../../components/map/index.js"), {
  loading: () => "Loading...",
  ssr: false,
});

const filtros = ["Tipo", "SuperUsual", "Distancia"];

const tiendas = [
  {
    name: "Hamburguesería Can Carreras",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
    direction: "Carrer de Cuba, 22, Mataró",
    link:
      "https://images.unsplash.com/photo-1586816001966-79b736744398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Amagatai",
    filtro: "hamburguesería",
    superUsual: { is: false },
    direction: "Carrer de Sant Josep, 42, Mataró",
    link:
      "https://images.unsplash.com/photo-1564362437605-e272fae45979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80",
  },
  {
    name: "Fogons",
    filtro: "hamburguesería",
    direction: "Caminet de les Vinyes, 34, Mataró",
    superUsual: { is: true, type: ["SuperProximity"] },
    link:
      "https://images.unsplash.com/photo-1562967914-70f9865b4c2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNhcm5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
    direction: "Carrer de Cuba, 22, Mataró",
    link:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
    direction: "Carrer de Cuba, 22, Mataró",
    link:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
    direction: "Carrer de Cuba, 22, Mataró",
    link:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
    direction: "Carrer de Cuba, 22, Mataró",
    link:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "test",
    filtro: "hamburguesería",
    superUsual: { is: true, type: ["SuperProximity"] },
    direction: "Carrer de Cuba, 22, Mataró",
    link:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

let customStyles = {
  overlay: { backgroundColor: "transparent" },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
  },
};

export default function stores() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    console.log(e);
    customStyles.content.top = e.target.offsetTop + 48;
    customStyles.content.left = e.target.offsetLeft + e.target.clientWidth / 2;
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Header showTransparent={false} />
      <main className={styles.main}>
        <div className={styles.filters}>
          {filtros.map((filter) => (
            <>
              <button key={filter} onClick={openModal} id={`button${filter}`}>
                {filter}
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
              >
                <p>TestTestTestTestTestTestTestTest</p>
              </Modal>
            </>
          ))}
        </div>
        <div className={styles.stores}>
          {tiendas.map((tienda) => (
            <div className={styles.store} key={tienda.name}>
              <img className={styles.store__img} src={tienda.link}></img>
              <p className={styles.store__filter}>{tienda.filtro}</p>
              <p className={styles.store__name}>{tienda.name}</p>
              <p className={styles.store__direction}>{tienda.direction}</p>
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
