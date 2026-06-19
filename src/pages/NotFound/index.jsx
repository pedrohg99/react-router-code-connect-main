import styles from "./notfound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.notfoundcontainer}>
      <div className={styles.notfoundcontent}>
        <div className={styles.errorcode}>404</div>

        <h1>Página não encontrada</h1>

        <p>Ops! A página que você está procurando não existe ou foi movida.</p>

        <a href="/" className={styles.backbutton}>
          Voltar para o início
        </a>
      </div>

      <div className={styles.circle}></div>
    </div>
  );
};
