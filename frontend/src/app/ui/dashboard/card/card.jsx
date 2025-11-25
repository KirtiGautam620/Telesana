import styles from "./card.module.css";

const Card = ({ item }) => {
  
  if (!item) {
    return null; 
  }

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {item.icon}
      </div>
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.value}>{item.value}</span>
        <span className={styles.detail}>
          {item.change ? (
            <>
              <span
                className={item.change.isPositive ? styles.positive : styles.negative}
              >
                {item.change.value}
              </span>{" "}
              {item.change.status}
            </>
          ) : (
            item.detailText
          )}
        </span>
      </div>
    </div>
  );
};

export default Card;