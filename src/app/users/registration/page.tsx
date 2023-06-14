"use client";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

const HomepageButton = styled(Button)({
  marginRight: "12px",
  backgroundColor: "#0069d9",
  "&:hover": {
    borderColor: "#0062cc",
    boxShadow: "none",
  },
});

const LearnmoreButton = styled(Button)({
  border: "1px solid",
  backgroundColor: "#0063cc !important",
  borderColor: "#0063cc !important",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9 !important",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function Registration() {
  return (
    <>
      <header className="text-center">New User Created</header>
      <div className="pl-14 pt-10 flex items-center justify-center">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="user_registration"
            height="100"
            image="/images/registration.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              User successfully created
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Welcome to our app. You can now go ahead and explore our different
              services.
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="">
              <HomepageButton size="small" variant="outlined" color="primary">
                Home Page
              </HomepageButton>
            </Link>
            <LearnmoreButton size="small" variant="contained" color="secondary">
              Learn More
            </LearnmoreButton>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
