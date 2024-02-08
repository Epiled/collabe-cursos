
// Importações do ResponsiveNavigation Component
import  { useState, useEffect } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import styles from "./mainNavigation.module.css";

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (isOpenModal) {
      document.body.classList.add(styles.modalOpen);
    } else {
      document.body.classList.remove(styles.modalOpen);
    }

    // Cleanup function to remove the class when the component unmounts or when isOpenModal changes
    return () => {
      document.body.classList.remove(styles.modalOpen);
    };
  }, [isOpenModal]);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpenModal(!isOpenModal);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle(styles.overlayActive);
  };

  return (
    <div className={styles.container}>
      <Header toggleMenu={toggleMenu} />
      <Navigation isOpen={isOpen} toggleMenu={toggleMenu} openModal={openModal} />
      <Modal isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} className={isOpenModal ? styles.open : styles.close} />
    </div>
  );
}



