import Navbar from "./Navbar";
import Footer from "./Footer";
import style from "../styles/main.module.css";
export default function Layout({ children }) {
  return (
    <div className={style.main}>
      <div id="wide screen container" className="wide:w-fhd">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
