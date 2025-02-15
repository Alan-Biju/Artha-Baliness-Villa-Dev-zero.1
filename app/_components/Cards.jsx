import Image from "next/image";
import { Carousel } from "flowbite-react";
import Cottage from './heroComponent/Cottage'
import styles from './styles/_cards.module.scss'

export default function Component() {
  return (
    <div className={styles.card_container}>
    <Carousel slideInterval={5000} indicators={true}>
      <div className="flex h-full items-center justify-center">
        <Cottage/>
      </div>
      <div className="flex h-full items-center justify-center">
      <Cottage/>
      </div>
      <div className="flex h-full items-center justify-center">
      <Cottage/>
      </div>
    </Carousel>
  </div>
  
  );
}
