
import Head from "next/head";
import Header from "../../components/header";
import styles from "../../styles/restaurante.module.css";

export default function store() {
    return (
     <>
    <Header showTransparent={false} />
    <main>
        <div className={styles.imagen}></div>
        <div>
            <h1 className={styles.nombre} >Burguer Mar</h1>
        </div>

    </main>
     </>
    )

}
