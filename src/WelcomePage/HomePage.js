import React from "react";
import "./HomePage.css";
import { Typography, Container, Button, Box } from "@material-ui/core";

function HomePage() {
  return (
    <>
      <React.Fragment>
        <Container>
          <Typography variant="h1" className="title" align="center">
            CALPAL
          </Typography>
          <Typography variant="subtitle1" className="subtitle" align="center">
            The calorie counter.
          </Typography>
        </Container>
        <Container>
          <Typography variant="body1" className="description" align="center">
            Calpal is your friend when it comes to tracking your calories. Set
            your goal and we will help you reach it. Keep track of everything in
            you're nifty journal, get all the informations on the food you eat
            and most importantly, be rewarded for your hard work and
            perseverance!
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button variant="outlined" className="button" color="primary">
              Getting Started
            </Button>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default HomePage;
