import styles from '../styles/card.module.css';

const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img className={styles.portada} src={data.portada} alt={data.titulo} />
        <h3 className={styles.titulo}>{data.titulo}
          <br />
          <span className={styles.autor}>{data.autor}</span>
        </h3>
        <div className={styles.consinopsis}>
          <p className={styles.sinopsis}>{data.sinopsis}</p>
        </div>
      </div>
    </div>
  )
}

export default Card