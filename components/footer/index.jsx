import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by 
      <Link href="https://twitter.com/mehmetpekcan" target="_blank">
        Mehmet Pekcan
      </Link>
    </footer>
  );
}

export default Footer;