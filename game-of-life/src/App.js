import React, { useState } from "react";
import Grid from "./components/Grid";

function App() {
  // const speed = 100;
  let rows = 30;
  let cols = 50;
  const [state, setState] = useState({
    generation: 0,
    gridFull: Array(rows).fill().map(() => Array(cols).fill(false))
  });

  const selectBox = (row, col) => {
    let gridCopy = arrayClone(state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    setState({
      gridFull: gridCopy
    });
  };

  const seed = () => {
    let gridCopy = arrayClone(state.gridFull);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (Math.floor(Math.random() * 4) === 1) {
            gridCopy[i][j] = true;
          }
        }
      }
      setState({ gridFull: gridCopy });
  }

  function componentDidMount() {
    seed();
  }

  return (
    <div className="App">
      <h1 className="text-white text-center font-serif text-4xl pt-10 pb-10">
        Game of Life
      </h1>
      <Grid 
        gridFull={state.gridFull}
        rows={rows}
        cols={cols}
        selectBox={selectBox}
      />
      <h2 className="text-white text-center font-serif text-3xl p-10">
        Generations: {state.generation}
      </h2>
    </div>
  );
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default App;
