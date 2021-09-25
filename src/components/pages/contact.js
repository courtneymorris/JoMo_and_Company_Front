import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Container,
  Paper,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Button } from "../styled-components/button.style";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yrb76g5",
        "template_q0t8xnv",
        e.target,
        "user_tll3YCj1FXFxXze6hOMpp"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Container>
      <form className="form-wrapper" onSubmit={sendEmail}>
        <Typography
          variant={"h3"}
          align="center"
          noWrap={true}
          style={{
            fontFamily: "'Lobster Two', cursive",
            fontSize: "1.8rem",
            paddingTop: 0,
            paddingBottom: "1rem",
            color: "#344e6f",
          }}
        >
          Get in touch with us!
        </Typography>

        <div className="form-group">
          <label htmlFor="FullName">Your name</label>
          <input className="form-input" type="text" name="name" id="FullName" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your email address</label>
          <input className="form-input" type="email" name="email" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Subject</label>
          <input
            className="form-input-subject"
            type="test"
            name="subject"
            id="subject"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-textarea"
            name="message"
            name="message"
            id="message"
            placeholder="What's on your mind?"
          ></textarea>
        </div>

        <div className="centered-btn-wrapper">
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Container>
  );
}
