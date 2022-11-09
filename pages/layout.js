import Link from "next/link";
import styles from "../styles/Layout.module.css";

import React from 'react'

const Layout = ({children}) => {
    return (
        <div>
            <ul>
                <li>
                <Link href="/">
                    Home
                </Link>
                </li>
                <li>
                <Link href="/about">
                    About Us
                </Link>
                </li>
                <li>
                <Link href="/blog">
                    Blog
                </Link>
                </li>
                <li>
                <Link href="/login">
                    Logout
                </Link>
                </li>
            </ul>
            <div className={styles.container}>{children}</div>
        </div>
      );
}

export default Layout