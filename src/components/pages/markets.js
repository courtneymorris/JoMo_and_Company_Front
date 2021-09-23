import React, { useState } from "react";
import { Box, Typography, Container, Paper, Card } from "@material-ui/core";

export default function Markets() {
  return (
    <Container>
      <div className="markets-schedule-wrapper">
        <Card>
          <Typography
            variant="h4"
            align="center"
            style={{ fontFamily: "'Lobster Two', 'cursive'" }}
          >
            Come find us in person at these markets and events!
          </Typography>
        </Card>

        <div className="schedule-wrapper">
          <Paper>
            <Typography variant="subtitle2" align="center">
              September 25 @ 9:00 am - 1:00 pm
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ fontFamily: "'Lobster Two', 'cursive'" }}
            >
              Nampa Farmers Market
            </Typography>
            <Typography variant="subtitle1" align="center">
              LLoyd Square Park
            </Typography>
            <Typography variant="body1" align="center">
              Music from Jim Stewart
            </Typography>
          </Paper>
        </div>

        <div className="schedule-wrapper">
          <Paper>
            <Typography variant="subtitle2" align="center">
              October 2 @ 9:00 am - 1:00 pm
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ fontFamily: "'Lobster Two', 'cursive'" }}
            >
              Nampa Farmers Market
            </Typography>
            <Typography variant="subtitle1" align="center">
              LLoyd Square Park
            </Typography>
            <Typography variant="body1" align="center">
              Music From The Touch Band
            </Typography>
          </Paper>
        </div>

        <div className="schedule-wrapper">
          <Paper>
            <Typography variant="subtitle2" align="center">
              October 9 @ 9:00 am - 1:00 pm
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ fontFamily: "'Lobster Two', 'cursive'" }}
            >
              Nampa Farmers Market
            </Typography>
            <Typography variant="subtitle1" align="center">
              LLoyd Square Park
            </Typography>
            <Typography variant="body1" align="center">
              Bring your pet in costume...prizes will be awarded! Music From JB
              Duo
            </Typography>
          </Paper>
        </div>

        <div className="schedule-wrapper">
          <Paper>
            <Typography variant="subtitle2" align="center">
              October 16 @ 9:00 am - 1:00 pm
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ fontFamily: "'Lobster Two', 'cursive'" }}
            >
              Nampa Farmers Market
            </Typography>
            <Typography variant="subtitle1" align="center">
              LLoyd Square Park
            </Typography>
            <Typography variant="body1" align="center">
              Music from Seattle Goes South
            </Typography>
          </Paper>
        </div>

        <div className="schedule-wrapper">
          <Paper>
            <Typography variant="subtitle2" align="center">
              October 23 @ 9:00 am - 1:00 pm
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ fontFamily: "'Lobster Two', 'cursive'" }}
            >
              Nampa Farmers Market
            </Typography>
            <Typography variant="subtitle1" align="center">
              LLoyd Square Park
            </Typography>
            <Typography variant="body1" align="center">
              Decorate your pumpkin for prizes! Music from Mom & Double Image
            </Typography>
          </Paper>
        </div>

        <div className="schedule-wrapper">
          <Paper>
            <Typography variant="subtitle2" align="center">
              October 30 @ 9:00 am - 1:00 pm
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ fontFamily: "'Lobster Two', 'cursive'" }}
            >
              Nampa Farmers Market
            </Typography>
            <Typography variant="h6" align="center">
              Trick or Treat at the Market!
            </Typography>
            <Typography variant="subtitle1" align="center">
              LLoyd Square Park
            </Typography>
            <Typography variant="body1" align="center">
              It's the final day for the 2021 Market season and we go out in
              style! Bring the kids in their Halloween costume and Trick or
              Treat at the Vendor Booths. There will be a costume contest and a
              lot of fun! Music From Idaho Arts Charter School
            </Typography>
          </Paper>
        </div>
      </div>

      <div className="spacer" />
    </Container>
  );
}
