import { React, useState } from "react";
import "./Profile.css";
import { Typography, Container, TextField, Button } from "@material-ui/core";
import { setGoal } from "../../actions";

function Profile() {
  const [goal, setGoals] = useState();

  const handleChange = (event) => {
    setGoal(event.target.goal);
  };

  return (
    <>
      <Container className="container">
        <Typography variant="h3" className="title">
          Your Profile
        </Typography>
      </Container>
      <Container className="container">
        <Typography variant="h5" className="goalText">
          My daily goal
        </Typography>
      </Container>
      <Container className="container">
        <TextField
          id="outlined-size-normals"
          label="Calories"
          variant="outlined"
          value={goal}
        />
      </Container>
      <Container className="container">
        <Button variant="contained" color="primary" onClick={handleChange}>
          Save changes
        </Button>
      </Container>
    </>
  );
}

export default Profile;
