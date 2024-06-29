import * as React from "react";
import styles from "./app.module.css";
import data from "./data";
import Box from "./components/Box";

export default function App() {
  const [boxes, setBoxes] = React.useState(data);

  const handleToggle = (id) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((oldBox) => {
        return oldBox.id === id ? { ...oldBox, on: !oldBox.on } : oldBox;
      });
    });

    // setBoxes((oldBoxes) => {
    //   const newBoxes = [];
    //   for (let index = 0; index < oldBoxes.length; index++) {
    //     const box = oldBoxes[index];
    //     if (box.id === id) {
    //       newBoxes.push({
    //         id: box.id,
    //         on: !box.on
    //       });
    //     } else {
    //       newBoxes.push(box);
    //     }
    //   }
    //   return newBoxes;
    // });
  };

  const boxesList = boxes.map((box) => {
    return <Box key={box.id} id={box.id} on={box.on} onToggle={handleToggle} />;
  });

  return <div className={styles.container}>{boxesList}</div>;
}
