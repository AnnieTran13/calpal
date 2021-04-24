<<<<<<< HEAD
import { React, useState } from "react";
=======
import React, {useState} from "react";
import { Link } from "react-router-dom";
>>>>>>> aef6a4f4de7255e5f4db847357253785f6fa7f73
import "./Journal.css";
import {
  withStyles,
  makeStyles,
  Typography,
  Container,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
<<<<<<< HEAD
import { useSelector } from "react-redux";
=======
import recipie from "../Recipes/Recipe"
>>>>>>> aef6a4f4de7255e5f4db847357253785f6fa7f73

const useStyles = makeStyles({
  table: {
    Width: 100,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
];

function Journal() {
  const classes = useStyles();
<<<<<<< HEAD
  const points = useSelector((state) => state.points);

  const openRecipePage = () => {};

  return (
    <>
      <Container>
        <Typography variant="h3" className="title">
          Your Journal
        </Typography>
      </Container>
      <Container>
        <Typography variant="h5" component="h2">
          Your points : {points}
        </Typography>
      </Container>
      <Container>
        <Card className="caloriecard">
          <CardContent>
            <Typography variant="h5" component="h2">
              Your calories
            </Typography>
            <Typography align="center">0 calories</Typography>
          </CardContent>
        </Card>
      </Container>
=======
  const openRecipePage = () => {
    window.location="recipes";
  };
  const [calorisState] =useState();

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
              <Typography align="center">{calorisState} calories</Typography>
            </CardContent>
          </Card>
        </Container>
>>>>>>> aef6a4f4de7255e5f4db847357253785f6fa7f73

      <Container className="table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Breakfast</StyledTableCell>
                <StyledTableCell align="center">Calories</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.calories}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" onClick={openRecipePage}>
          Add food
        </Button>
      </Container>

      <Container className="table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Lunch</StyledTableCell>
                <StyledTableCell align="center">Calories</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.calories}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Container className="table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Dinner</StyledTableCell>
                <StyledTableCell align="center">Calories</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.calories}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Container className="table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Snacks</StyledTableCell>
                <StyledTableCell align="center">Calories</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.calories}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Journal;
