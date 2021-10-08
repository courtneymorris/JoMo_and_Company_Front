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

import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";
import aboutJoMo from "../../../static/assets/images/aboutJoMo.jpg";

export default function About() {
  return (
    <div className="about-page-wrapper">
      <Navbar />

      <Container>
        {/* <div className="about-wrapper">
        <div className="about-content-wrapper">
          <div className="about-header">
            <Typography variant="h3">In our hearts and at our core</Typography>
          </div>
        </div>
      </div>
      <div className="about-body">
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          inventore maxime, dolor nemo nihil facilis quod soluta similique
          maiores hic iste repellat velit eius facere laboriosam veniam rem
          laudantium nisi sint sunt vero. Tenetur, aperiam. Quo sequi unde
          explicabo harum!
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          inventore maxime, dolor nemo nihil facilis quod soluta similique
          maiores hic iste repellat velit eius facere laboriosam veniam rem
          laudantium nisi sint sunt vero. Tenetur, aperiam. Quo sequi unde
          explicabo harum!
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          inventore maxime, dolor nemo nihil facilis quod soluta similique
          maiores hic iste repellat velit eius facere laboriosam veniam rem
          laudantium nisi sint sunt vero. Tenetur, aperiam. Quo sequi unde
          explicabo harum!
        </Typography>
      </div> */}

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
      </Container>
      <Footer />
    </div>
  );
}
