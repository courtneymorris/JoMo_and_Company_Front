import React from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Paper,
} from "@material-ui/core";

import aboutJoMo from "../../../static/assets/images/aboutJoMo.jpg";

export default function About() {
  return (
    <Container>
      <Box>
        <Card elevation={3}>
          <CardContent style={{ backgroundColor: "#caa6ab" }}>
            <Typography
              variant="h4"
              align="center"
              style={{
                fontFamily: "'Lobster Two', 'cursive'",
                color: "#344e6f",
              }}
            >
              About JoMo & Co.
            </Typography>
          </CardContent>
          <CardContent style={{ backgroundColor: "#caa6ab" }}>
            <Paper>
              <CardMedia
                style={{ height: 0, paddingTop: "135%" }}
                image={`${aboutJoMo}`}
              />
            </Paper>
          </CardContent>
          <CardContent style={{ backgroundColor: "#caa6ab" }}>
            <Typography variant="body1" style={{ color: "#344e6f" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quae
              asperiores neque ratione expedita tenetur corrupti rerum veniam
              nisi dolores minima eos, iusto odio mollitia, cupiditate dolore
              magni enim accusantium. Illo excepturi officiis possimus culpa
              asperiores vitae a, ipsum tempora et.
              <br />
              <br />
              Dolore rem itaque velit magni laboriosam dolorum, reiciendis quod
              tempore provident? Labore nostrum ea temporibus libero est dolorum
              blanditiis laudantium voluptatum culpa pariatur, fugit dolor
              explicabo aliquam praesentium animi repellat, sit inventore. At
              sit, eveniet dignissimos mollitia harum perspiciatis.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
