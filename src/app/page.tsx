import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { SideBar } from "./components/Sidebar/sidebar";
import { Header } from "./components/Header/header";
import Dashboard from "./components/dashboard/dashboard";

export default function Home() {
  return (
    <main>
        <Header />
        <SideBar /> 
        <Dashboard />
    </main>
  );
}
