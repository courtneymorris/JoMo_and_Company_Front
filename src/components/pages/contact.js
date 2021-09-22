import React, { useState } from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

export default function Contact() {
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography
            variant={"h4"}
            align="center"
            noWrap={true}
            style={{
              fontFamily: "'Lobster Two', cursive",
              fontSize: "1.8rem",
              paddingTop: 0,
            }}
          >
            Get in touch!
          </Typography>
          <CardMedia
            style={{ height: 0, paddingTop: "135%" }}
            image="https://images.unsplash.com/photo-1582794543462-0d7922e50cf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          />
          <Typography variant="h6" align="right">
            phone: (208)369-2178
          </Typography>

          <Typography variant="h6" align="right">
            email: krissi@jomoandcompany.com
          </Typography>

          <Typography variant="h6" align="right">
            instagram: @jomoandcompany
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
