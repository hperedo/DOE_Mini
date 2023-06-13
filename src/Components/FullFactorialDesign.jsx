// import React, { useState } from "react";
// import Plot from "react-plotly.js";

// const DoEComponent = () => {
//   // Define the factors and their levels
//   const factors = ["Factor A", "Factor B", "Factor C", "Factor D"];
//   const levels = [48.65, 97.3];

//   // Define the experimental design matrix
//   const designMatrix = [];
//   for (const a of levels) {
//     for (const b of levels) {
//       for (const c of levels) {
//         for (const d of levels) {
//           designMatrix.push([a, b, c, d]);
//         }
//       }
//     }
//   }

//   // Perform the experiments and collect the response variable data
//   // Replace this with your own data collection logic
//   const responses = designMatrix.map((row) => {
//     const [a, b, c, d] = row;
//     // Perform the experiment and get the response variable value
//     const response = 0; // Replace with your own calculation
//     return { factors: [a, b, c, d], response };
//   });

//   // Calculate the effects and interaction terms
//   // Replace this with your own analysis logic
//   const mainEffects = factors.map((factor, index) => {
//     const effect = responses.reduce(
//       (sum, { factors, response }) => sum + factors[index] * response,
//       0
//     );
//     return { factor, effect };
//   });

//   const interactions = [];
//   for (let i = 0; i < factors.length - 1; i++) {
//     for (let j = i + 1; j < factors.length; j++) {
//       const interaction = responses.reduce(
//         (sum, { factors, response }) =>
//           sum + factors[i] * factors[j] * response,
//         0
//       );
//       const correlation = calculatePearsonCorrelation(
//         responses.map(({ factors }) => factors[i]),
//         responses.map(({ factors }) => factors[j])
//       );
//       interactions.push({
//         factors: [factors[i], factors[j]],
//         interaction,
//         correlation,
//       });
//     }
//   }

//   // Function to calculate Pearson correlation
//   const calculatePearsonCorrelation = (x, y) => {
//     if (x.length !== y.length) {
//       throw new Error("Array lengths must be equal");
//     }

//     const n = x.length;
//     let sumX = 0;
//     let sumY = 0;
//     let sumXY = 0;
//     let sumXSquared = 0;
//     let sumYSquared = 0;

//     for (let i = 0; i < n; i++) {
//       sumX += x[i];
//       sumY += y[i];
//       sumXY += x[i] * y[i];
//       sumXSquared += x[i] ** 2;
//       sumYSquared += y[i] ** 2;
//     }

//     const numerator = n * sumXY - sumX * sumY;
//     const denominator = Math.sqrt(
//       (n * sumXSquared - sumX ** 2) * (n * sumYSquared - sumY ** 2)
//     );

//     const correlation = numerator / denominator;
//     return correlation;
//   };

//   // Prepare data for plotting
//   const mainEffectsData = [
//     {
//       x: factors.map((factor) => factor.substring(7)),
//       y: mainEffects.map((effect) => effect.effect),
//       type: "bar",
//     },
//   ];

//   const interactionsData = [
//     {
//       x: interactions.map(
//         ({ factors }) =>
//           `${factors[0].substring(7)} × ${factors[1].substring(7)}`
//       ),
//       y: interactions.map(({ interaction }) => interaction),
//       text: interactions.map(({ correlation }) =>
//         correlation.toFixed(2).toString()
//       ),
//       type: "bar",
//     },
//   ];

//   const cubePlotData = [
//     {
//       type: "scatter3d",
//       mode: "markers",
//       x: responses.map(({ factors }) => factors[0]),
//       y: responses.map(({ factors }) => factors[1]),
//       z: responses.map(({ factors }) => factors[2]),
//       marker: { size: 5, color: "blue" },
//     },
//   ];

//   const contoursData = [
//     {
//       type: "contour",
//       x: responses.map(({ factors }) => factors[0]),
//       y: responses.map(({ factors }) => factors[1]),
//       z: responses.map(({ response }) => response),
//       colorscale: "Jet",
//     },
//   ];

//   const surfacePlotData = [
//     {
//       type: "surface",
//       x: levels,
//       y: levels,
//       z: responses.map(({ response }) => response),
//       colorscale: "Jet",
//     },
//   ];

//   return (
//     <div>
//       <h1>Design of Experiments</h1>
//       <h2>Main Effects</h2>
//       <Plot data={mainEffectsData} layout={{ title: "Main Effects" }} />

//       <h2>Interactions</h2>
//       <Plot
//         data={interactionsData}
//         layout={{ title: "Interactions", yaxis: { title: "Interaction" } }}
//       />

//       <h2>Cube Plot</h2>
//       <Plot
//         data={cubePlotData}
//         layout={{
//           title: "Cube Plot",
//           scene: { aspectratio: { x: 1, y: 1, z: 1 } },
//         }}
//       />

//       <h2>Contours</h2>
//       <Plot data={contoursData} layout={{ title: "Contours" }} />

//       <h2>Surface Plot</h2>
//       <Plot data={surfacePlotData} layout={{ title: "Surface Plot" }} />
//     </div>
//   );
// };

// export default DoEComponent;

/////////////////////////////////////////////////////////////////////
import React, { useState } from "react";
import Plot from "react-plotly.js";

const DoEComponent = () => {
  // Define the factors and their levels
  const factors = ["Factor A", "Factor B", "Factor C", "Factor D"];
  const levels = [48.65, 97.3];

  // Define the experimental design matrix
  const designMatrix = [];
  for (const a of levels) {
    for (const b of levels) {
      for (const c of levels) {
        for (const d of levels) {
          designMatrix.push([a, b, c, d]);
        }
      }
    }
  }

  // Perform the experiments and collect the response variable data
  // Replace this with your own data collection logic
  const responses = designMatrix.map((row) => {
    const [a, b, c, d] = row;
    // Perform the experiment and get the response variable value
    const response = [50, 5, 2, 25]; // Replace with your own calculation
    return { factors: [a, b, c, d], response };
  });

  // Calculate the effects and interaction terms
  // Replace this with your own analysis logic
  const mainEffects = factors.map((factor, index) => {
    const effect = responses.reduce(
      (sum, { factors, response }) => sum + factors[index] * response,
      0
    );
    return { factor, effect };
  });

  const interactions = [];
  for (let i = 0; i < factors.length - 1; i++) {
    for (let j = i + 1; j < factors.length; j++) {
      const interaction = responses.reduce(
        (sum, { factors, response }) =>
          sum + factors[i] * factors[j] * response,
        0
      );
      interactions.push({
        factors: [factors[i], factors[j]],
        interaction,
      });
    }
  }

  // Prepare data for plotting
  const mainEffectsData = [
    {
      x: factors.map((factor) => factor.substring(7)),
      y: mainEffects.map((effect) => effect.effect),
      type: "bar",
    },
  ];

  const interactionsData = [
    {
      x: interactions.map(
        ({ factors }) =>
          `${factors[0].substring(7)} × ${factors[1].substring(7)}`
      ),
      y: interactions.map(({ interaction }) => interaction),
      type: "bar",
    },
  ];

  const cubePlotData = [
    {
      type: "scatter3d",
      mode: "markers",
      x: responses.map(({ factors }) => factors[0]),
      y: responses.map(({ factors }) => factors[1]),
      z: responses.map(({ factors }) => factors[2]),
      marker: { size: 5, color: "blue" },
    },
  ];

  const contoursData = [
    {
      type: "contour",
      x: responses.map(({ factors }) => factors[0]),
      y: responses.map(({ factors }) => factors[1]),
      z: responses.map(({ response }) => response),
      colorscale: "Jet",
    },
  ];

  const surfacePlotData = [
    {
      type: "surface",
      x: levels,
      y: levels,
      z: responses.map(({ response }) => response),
      colorscale: "Jet",
    },
  ];

  return (
    <div>
      <h1>Design of Experiments</h1>
      <h2>Main Effects</h2>
      <Plot data={mainEffectsData} layout={{ title: "Main Effects" }} />

      <h2>Interactions</h2>
      <Plot data={interactionsData} layout={{ title: "Interactions" }} />

      <h2>Cube Plot</h2>
      <Plot
        data={cubePlotData}
        layout={{
          title: "Cube Plot",
          scene: { aspectratio: { x: 1, y: 1, z: 1 } },
        }}
      />

      <h2>Contours</h2>
      <Plot data={contoursData} layout={{ title: "Contours" }} />

      <h2>Surface Plot</h2>
      <Plot data={surfacePlotData} layout={{ title: "Surface Plot" }} />
    </div>
  );
};

export default DoEComponent;

/////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import Plot from "plotly.js";

// const DoeComponent = () => {
//   const [data, setData] = useState([]);

//   // Function to perform the DOE and generate the plots
//   const performDoe = () => {
//     // Perform DOE calculations and generate data for plots

//     // Example code to generate random data for demonstration
//     const x = [1, 2, 3, 1, 2, 3, 1, 2, 3]; // X-axis values
//     const y = [4, 5, 6, 4, 5, 6, 4, 5, 6]; // Y-axis values
//     const z = [7, 8, 9, 7, 8, 9, 7, 8, 9]; // Z-axis values

//     // Set the data for the plots
//     setData([
//       {
//         type: "scatter3d",
//         x: x,
//         y: y,
//         z: z,
//         mode: "markers",
//         marker: {
//           size: 5,
//           color: "blue",
//         },
//         name: "Cube Plot",
//       },
//       // Add more trace objects for other plots (main effects, interactions, etc.)
//     ]);
//   };

//   return (
//     <div>
//       <button onClick={performDoe}>Perform DOE</button>
//       <div id="plots">
//         {/* Render the plots using Plotly */}
//         <Plot
//           data={data}
//           layout={{ width: 500, height: 500, title: "Cube Plot" }}
//         />
//         {/* Add more Plot components for other plots */}
//       </div>
//     </div>
//   );
// };

// export default DoeComponent;
