
import React from "react";
import { Grid, } from "@mui/material";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import dashboardIamge from "../../Assest/Navigation/menu.png";
import image from "../../Assest/Dashboard/Questinnaire.png";

import ImageWithListComponent from "../ImageWithListComponent/ImageWithListComponent";
import { resultDataHead, topicsCellData} from "../../utils/fakedata/fakedata";
<<<<<<< Updated upstream

=======
import ScrollComponent from "../ScrollComponent/ScrollComponent";
import backgroundImage from "../../BG.png";
>>>>>>> Stashed changes

const QuestionAnswer= () => {
  return (
    <ScrollComponent>
    <Grid container direction={"column"}
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover",
      minHeight:"100%"
     
    }}
    >
    <HeaderComponent
      headerLabel={"Questionnaires"}
      headerLabelIamges={dashboardIamge}
    />
<<<<<<< Updated upstream
    <Grid container padding={5} direction="row">
=======
  
    <Grid container paddingTop={5} paddingBottom={5} paddingLeft={2} paddingRight={2} direction="row">
      <Grid item xl={12} xs={12}>
>>>>>>> Stashed changes
      <ImageWithListComponent
        labelList={"QUESTIONNAIRES"}
        setImage={image}
        searchType={false}
        buttonLabel="Create Account"
        questionType={"question-answer"}
        tableHead={resultDataHead}
        cellData={topicsCellData}
        tableType={"result"}
        optionType={"option"}
       
      />
      </Grid>
     
    </Grid>
<<<<<<< Updated upstream
=======
    
>>>>>>> Stashed changes
  </Grid>
  </ScrollComponent>
   
  )
}

export default QuestionAnswer