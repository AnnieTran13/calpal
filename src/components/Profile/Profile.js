import React from "react";
import "./Profile.css";
import { Typography, Container } from "@material-ui/core";

function Profile() {
  return (
    <>
      <React.Fragment>
        <Container>
          <Typography variant="h3" className="title">
            Profile Page
          </Typography>
        </Container>
      </React.Fragment>
    </>
  );
}

export default Profile;
