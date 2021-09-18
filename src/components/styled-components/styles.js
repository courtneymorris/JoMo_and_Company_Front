// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   cardGrid: {
//     padding: "20px 0",
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   CardMedia: {
//     paddingTop: "56.25%",
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
// }));

// export default useStyles;

import React from "react";
import Slider from "@mui/material/Slider";
import { experimentalStyled as styled } from "@mui/material/styles";

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

export default function StyledComponents() {
  return (
    <div>
      <Slider defaultValue={30} />
      <CustomizedSlider defaultValue={30} />
    </div>
  );
}
