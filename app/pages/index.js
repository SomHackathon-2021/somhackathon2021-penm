import Head from "next/head";
import styles from "../styles/Home.module.css";

import Search from "../components/search";

export default function Home() {
  const filters = [
    {
      name: "sushi",
      image:
        "https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80",
    },
    {
      name: "burgers",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
    },
    {
      name: "pizza",
      image:
        "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
    {
      name: "ver más...",
      image:
        "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Nombre de la app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.cabecera}>
        <h1>Nombre app</h1>
        <Search />
        <div className={styles.register}>
          <button>Registrarse</button>
          <button>Login</button>
        </div>
      </header>
      <main>
        <div className={styles.landing}>
          <h2 className={styles.title}>Frase molona sobre el proyecto</h2>
        </div>

        <div className={styles.topFiltros}>
          <h3>Top filtros</h3>
          <div className={styles.filterList}>
            {filters.map((filter) => (
              <a href="#" className={styles.filter}>
                <img src={filter.image}></img>
                <h3>{filter.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
