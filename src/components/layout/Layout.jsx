import Footer from "./footer/Footer";
import Header from "./header/Header";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
