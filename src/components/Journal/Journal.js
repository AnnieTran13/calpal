import React from "react";
import "./Journal.css";
import { Typography, Container, Card, CardContent } from "@material-ui/core";

function Journal() {
  return (
    <>
      <React.Fragment>
        <Container>
          <Typography variant="h3" className="title">
            Journal Page
          </Typography>
          <Card className="caloriecard">
            <CardContent>
              <Typography variant="h5" component="h2">
                Your calories
              </Typography>
              <Typography align="center">0 calories</Typography>
            </CardContent>
          </Card>
        </Container>
      </React.Fragment>
    </>
  );
}

export default Journal;
