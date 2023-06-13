"use client";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

export default function Registration() {
  return (
    <>
      <header className="text-center">New User Created</header>
      <div className="pl-14 pt-20 flex items-center justify-center">
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
              <Button size="small">Home Page</Button>
            </Link>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
