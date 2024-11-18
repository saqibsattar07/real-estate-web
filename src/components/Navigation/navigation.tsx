import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import styles from "./navigation.module.css"; // Import the custom CSS module

const navList = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <p className={styles.brand}>EState</p>

        <ul className={styles.navList}>
          {navList.map((nav) => (
            <li key={nav.title} className={styles.navItem}>
              <Link className={styles.navLink} href={nav.href}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.avatarContainer}>
          <Avatar>
            <AvatarImage src="/profile/saqib.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
