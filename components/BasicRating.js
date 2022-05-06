import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating({ rating }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <div className="flex">
        <Rating name="read-only" value={rating} readOnly precision={0.5} />
        {/* <Typography component="legend">Rating</Typography> */}
      </div>
    </Box>
  );
}
