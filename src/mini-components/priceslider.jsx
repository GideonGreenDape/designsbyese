import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
  return (
    <Box sx={{ width: 200 }}>
      <Slider
        size="small"
        defaultValue={95}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
