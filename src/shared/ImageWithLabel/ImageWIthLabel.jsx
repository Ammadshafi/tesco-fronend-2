import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {Grid }from "@mui/material";
import './imagewithlabel.css'

const ImageWIthLabel = ({
  setImage,
  setpath,
  setLabel,
  setWidth,
  setHeight,
  labelVariant,
  keys,
  parameters,subType=false
}) => {

  return (
    <>
    {!subType&&
     <Link to={`/${setpath}`} style={{textDecoration:"none"}}>
     <Grid container
     sx={{
       backgroundColor:setpath===parameters&&"rgba(0, 0, 0, 0.402);",
      padding:"0.4em",
       borderRadius:"0.7em"
     }}
      spacing={2} alignItems={"center"} display="flex" justifyContent={"center"} >
     
         <Grid item
         className="image-with-label-logo"
           sx={{
             backgroundImage: `url(${setImage})`,
             width: setWidth,
             height: setHeight,
             backgroundSize: "fill",
             backgroundRepeat: "no-repeat",
             
             cursor: "pointer",
           }}
         />
          <Grid item>
          <Typography
           sx={{ cursor: "pointer" }}
           variant={labelVariant}
           fontWeight={"600"}
           color={"white"}
         >
           {setLabel}
         </Typography>
          </Grid>
<<<<<<< Updated upstream
       
         
     
     </Grid>
     </Link>
    }
    {subType&&
     <Link to={`/sub-dashboard/${setpath}`} style={{textDecoration:"none"}}>
     <Stack
     sx={{
       backgroundColor:setpath===parameters&&"rgba(0, 0, 0, 0.402);",
       padding:"0.5em 2em",
       borderRadius:"0.7em"
     }}
     spacing={2} direction="row" alignItems={"center"} >
     
         <Box
           sx={{
             backgroundImage: `url(${setImage})`,
             width: setWidth,
             height: setHeight,
             backgroundSize: "fill",
             backgroundRepeat: "no-repeat",
             
             cursor: "pointer",
           }}
         />
=======
          {dropState && (
            <Grid
              item
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              direction="column"
              paddingTop={"0.5em"}
            >
              <Link to={!subType?`/${setpath}`:`/dashboard/${setpath}`} style={{ textDecoration: "none" }}>
                <motion.div
                  style={{ display: "flex",alignItems:"center"}}
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
                >
                  <motion.div>{setIcon}</motion.div>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    variant={labelVariant}
                    fontWeight={"600"}
                    color={"white"}
                    
                  >
                    Topic list 1
                  </Typography>
                </motion.div>
              </Link>

              <Link to={!subType?`/${setpath}`:`/dashboard/${setpath}`} style={{ textDecoration: "none" }}>
                <motion.div
                  style={{ display: "flex",alignItems:"center"}}
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
                >
                  <motion.div>{setIcon}</motion.div>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    variant={labelVariant}
                    fontWeight={"600"}
                    color={"white"}
                    
                  >
                    Topic list 1
                  </Typography>
                </motion.div>
              </Link>
            </Grid>
          )}
        </motion.div>
      )}
      {subType && !setDrop && (
        <Link to={`/dashboard/${setpath}`} style={{ textDecoration: "none" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.4,
              },
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid
              container
              sx={{
                backgroundColor:
                  setpath === parameters && "rgba(0, 0, 0, 0.402);",

                borderRadius: "0.7em",
              }}
              alignItems={"center"}
              minWidth="15em"
              display="flex"
            >
              <motion.div
                animate={{ rotate: rotation }}
                onClick={() => setRotaion(rotation + 360)}
              >
                {setIcon}
              </motion.div>
>>>>>>> Stashed changes

         <Typography
           sx={{ cursor: "pointer" }}
           variant={labelVariant}
           fontWeight={"600"}
           color={"white"}
         >
           {setLabel}
         </Typography>
         
     
     </Stack>
     </Link>}
     
    </>
  );
};

export default ImageWIthLabel;
