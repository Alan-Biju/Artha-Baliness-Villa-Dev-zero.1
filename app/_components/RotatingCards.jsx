// components/RotatingCards.js
import styles from "./styles/RotatingCards.module.scss";

const models = [
  {
    name: "Gretel-ACTGAN",
    description: "Model for generating highly dimensional, mostly numeric, tabular data",
  },
  // Repeat this object or fetch dynamically if needed
];

export default function RotatingCards() {
  return (
    <div className={styles.void}>
      <div className={styles.crop}>
        <ul className={styles.cardList}>
          {models.map((model, index) => (
            <li key={index} style={{ animationDelay: `${-index * 5}s` }} className={styles.li}>
              <div className={styles.card}>
                <a href="#" className={styles.a}>
                  <span className={styles.modelName}>{model.name}</span>
                  <span>{model.description}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.lastCircle}></div>
        <div className={styles.secondCircle}></div>
      </div>
      <div className={styles.mask}></div>
      <div className={styles.centerCircle}></div>
    </div>
  );
}
