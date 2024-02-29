import  React from 'react';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from 'react-router-dom';

function HomeIcon(props) {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
    </Link>
  );
}

export default function SvgIconsColor() {
  return (
    <Stack direction="row" spacing={3}>
      {/* <HomeIcon /> */}
      {/* <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      
      <HomeIcon color="action" />
      <HomeIcon color="disabled" /> */}
       <HomeIcon color="success" />
      {/* <HomeIcon sx={{ color: pink[500] }}  /> */}
    </Stack>
  );
}
