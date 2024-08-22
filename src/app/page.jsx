import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "./componets/featured/featured";
import CategoryList from "./componets/categoryList/categoryList";
import CardList from "./componets/cardList/cardList";
import Menu from "./componets/menu/menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
