import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>NARDT</div>
      <div className={styles.text}>
      NARDT creative thoughts agency &copy; ALL rights reserved.
      </div>
    </div>
  )
}

export default Footer 