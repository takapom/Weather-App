import { useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  // ハンバーガーメニューの開閉状態を管理
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューボタンをクリックしたときの動作
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Weather Forecast</div>

      {/* スマホ画面用のメニューボタン */}
      <div className={styles.menuButton} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* 通常のナビゲーションリンク */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
        <li className={styles.text}><Link href="/">検索</Link></li>
        <li className={styles.text}><Link href="https://www3.nhk.or.jp/news/">ニュース</Link></li>
        <li className={styles.text}><Link href="/tech">技術スタック</Link></li>
      </ul>
    </nav>
  );
}
