import styles from "./index.module.css";

export default function Box({ id, on, onToggle }) {
  const style = {
    backgroundColor: on ? "black" : "transparent"
  };

  return (
    <div onClick={() => onToggle(id)} style={style} className={styles.item} />
  );
}
