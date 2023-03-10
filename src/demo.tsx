import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGridPro,
  GridToolbarExport,
  GridToolbarContainer,
  GridColumnsPanel
} from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Mouse } from "@mui/icons-material";
import './dark-mode.css';
export default function DataGridProDemo() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100000
  });

  // Make the DataGridPro a styled component
  // Then use this component in the return below

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <Box sx={{ height: 520, width: "100%" }}>
      <DataGridPro
        {...data}
        components={{ Toolbar: CustomToolbar }}
        loading={data.rows.length === 0}
        rowHeight={38}
        className = "dark-mode"
        componentsProps={{
          
          // columnMenu: {
          //   sx: {
          //     //Modify styling to columnMenu
          //     color: "#ffffff",
          //     backgroundColor: "#333333",
              
          //   }
          // },
          // filterPanel: {
          //   sx: {
          //     //Modify styling to filterPanel
          //     color: "#ffffff",
          //     backgroundColor: "#cccccc"  
          //   }
            
          
          
          // }
        }}
      />
    </Box>
  );
}
