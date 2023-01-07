import { Grid } from "@mui/material";
import React from "react";

import CardWithImage from "../CardImage/CardWithImage";
import { dashboardcardData } from "../../utils/fakedata/fakedata";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import dashboardIamge from "../../Assest/Navigation/menu.png";
import "./dashboard.css";
import { resultDataHead } from "../../utils/fakedata/fakedata";
import Cardindicator from "../CardIndiactor/Cardindicator";
import ScrollComponent from "../ScrollComponent/ScrollComponent";
const DashboardComponent = ({data=[]}) => {
  return (
<<<<<<< Updated upstream
    <Grid container direction={"column"}>
=======
    <ScrollComponent>
    <Grid
      container
      direction={"column"}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        minHeight:"100%",
        
        // height:"100%"
       
      }}
      className="dashboard-component-container"
    >
>>>>>>> Stashed changes
      <HeaderComponent
        headerLabel={"Dashboard"}
        headerLabelIamges={dashboardIamge}
      />
<<<<<<< Updated upstream
      
      <Grid
=======


<Grid
>>>>>>> Stashed changes
        container
        direction={"row"}
        spacing={10}
        padding={7}
        justifyContent={"center"}
        alignItems="center"
        
      >
        { data.map((each, index) => (
          <Grid item key={index}>
            <CardWithImage
              imagePath={each.image}
              totalNumber={each.number}
              labelCard={each.label}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        alignItems="center"
        direction={"row"}
<<<<<<< Updated upstream
        spacing={5}
        padding={2}
      >
        <Grid item >
=======
        spacing={3}
        padding={3}
      >
        <Grid item xs={8} xl={6}>
>>>>>>> Stashed changes
          <Cardindicator
            darkTheme={false}
            setDetails={"Student pass for month for this september"}
            setTitle="monthly passer"
            tableHead={resultDataHead}
          />
        </Grid>
<<<<<<< Updated upstream
        <Grid item >
=======
        <Grid item xs={8} xl={6}>
>>>>>>> Stashed changes
          <Cardindicator
            setDetails={"student statics pass verse fail"}
            setTitle={"Passer percentage"}
            chartEnable={true}
            
          />
        </Grid>
      </Grid>
<<<<<<< Updated upstream
     
     
    </Grid>
=======

   
    </Grid>
    </ScrollComponent>
    
>>>>>>> Stashed changes
  );
};

export default DashboardComponent;
