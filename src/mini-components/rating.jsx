import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

 function HalfRating({ rating }) {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        size="small"
        readOnly
      />
    </Stack>
  );
}

export default function Ratings({ value }) {
  return (
    <div className="w-[95px]">
      <HalfRating rating={value} />
    </div>
  );
}
