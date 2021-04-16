import Head from "next/head";
import styles from "../styles/Home.module.css";

import Search from "../components/search";

export default function Home() {
  const filters = ["sushi", "burgers", "pizza", "ver más..."];

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
              <div className={styles.filter}>{filter}</div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
