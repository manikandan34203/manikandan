import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import './About.css';

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
      <h1>About Us</h1>
      <p>
        <Typography variant="h4">Welcome to MY Restaurant, your one-stop destination for an unparalleled culinary experience delivered right to your doorstep. At My Restaurant, we believe in the power of great food to bring people together and create unforgettable moments. Our mission is to make ordering food online a seamless and delightful experience for every customer.</Typography></p>
        <p>
          
        </p>
        <br />
        <p>
         
        </p>
      </Box>
    </Layout>
  );
};

export default About;
