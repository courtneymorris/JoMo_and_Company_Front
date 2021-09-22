import React, { useState } from "react";
import { Typography, Container, Paper, Card } from "@material-ui/core";

export default function Markets() {
  return (
    <Container>
      <Card>
        <Typography
          variant="h4"
          align="center"
          style={{ fontFamily: "'Lobster Two', 'cursive'" }}
        >
          Come find us in person at these markets and events!
        </Typography>
      </Card>

      <Paper>
        <Typography variant="subtitle2">
          September 25 @ 9:00 am - 1:00 pm
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: "'Lobster Two', 'cursive'" }}
        >
          Nampa Farmers Market
        </Typography>
        <Typography variant="subtitle1">LLoyd Square Park</Typography>
        <Typography variant="body1">Music from Jim Stewart</Typography>
      </Paper>

      <Paper>
        <Typography variant="subtitle2">
          October 2 @ 9:00 am - 1:00 pm
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: "'Lobster Two', 'cursive'" }}
        >
          Nampa Farmers Market
        </Typography>
        <Typography variant="subtitle1">LLoyd Square Park</Typography>
        <Typography variant="body1">Music From The Touch Band</Typography>
      </Paper>

      <Paper>
        <Typography variant="subtitle2">
          October 9 @ 9:00 am - 1:00 pm
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: "'Lobster Two', 'cursive'" }}
        >
          Nampa Farmers Market
        </Typography>
        <Typography variant="subtitle1">LLoyd Square Park</Typography>
        <Typography variant="body1">
          Bring your pet in costume...prizes will be awarded! Music From JB Duo
        </Typography>
      </Paper>

      <Paper>
        <Typography variant="subtitle2">
          October 16 @ 9:00 am - 1:00 pm
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: "'Lobster Two', 'cursive'" }}
        >
          Nampa Farmers Market
        </Typography>
        <Typography variant="subtitle1">LLoyd Square Park</Typography>
        <Typography variant="body1">Music from Seattle Goes South</Typography>
      </Paper>

      <Paper>
        <Typography variant="subtitle2">
          October 23 @ 9:00 am - 1:00 pm
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: "'Lobster Two', 'cursive'" }}
        >
          Nampa Farmers Market
        </Typography>
        <Typography variant="subtitle1">LLoyd Square Park</Typography>
        <Typography variant="body1">
          Decorate your pumpkin for prizes! Music from Mom & Double Image
        </Typography>
      </Paper>

      <Paper>
        <Typography variant="subtitle2">
          October 30 @ 9:00 am - 1:00 pm
        </Typography>
        <Typography
          variant="h5"
          style={{ fontFamily: "'Lobster Two', 'cursive'" }}
        >
          Nampa Farmers Market
        </Typography>
        <Typography variant="h6">Trick or Treat at the Market!</Typography>
        <Typography variant="subtitle1">LLoyd Square Park</Typography>
        <Typography variant="body1">
          It's the final day for the 2021 Market season and we go out in style!
          Bring the kids in their Halloween costume and Trick or Treat at the
          Vendor Booths. There will be a costume contest and a lot of fun! Music
          From Idaho Arts Charter School
        </Typography>
      </Paper>
    </Container>
  );
}
