import * as React from "react";
//import ReactDom from "react-dom/client"
import { render } from 'react-dom'
import { StyledEngineProvider } from "@mui/material/styles";
//import Demo from "./demo";
import DataGridProDemo from "./demo";

// const root = ReactDom.createRoot(document.querySelector("#root") as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <StyledEngineProvider injectFirst>
//       <DataGridProDemo />
//     </StyledEngineProvider>
//   </React.StrictMode>
// );
const root = document.getElementById('root'); // <- This is the correct method call for React version 17
render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
//       <DataGridProDemo />
//     </StyledEngineProvider>
  </React.StrictMode>,
  root
);
