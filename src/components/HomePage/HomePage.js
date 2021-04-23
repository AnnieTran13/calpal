import React from "react";
import "./HomePage.css";
import { Typography, Container } from "@material-ui/core";

function HomePage() {
  return (
    <>
      <React.Fragment>
        <Container>
          <Typography variant="h1" className="title">
            CALPAL
          </Typography>
          <Typography variant="subtitle1" className="subtitle">
            The calorie counter.
          </Typography>
        </Container>
        <Container>
          <Typography variant="body1" className="description">
            Calpal is your friend when it comes to tracking your calories. Set
            your goal and we will help you reach it. Keep track of everything in
            you're nifty journal, get all the informations on the food you eat
            and most importantly, be rewarded for your hard work and
            perseverance!
          </Typography>
        </Container>
      </React.Fragment>
    </>
  );
}

export default HomePage;
