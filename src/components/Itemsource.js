import {
    Typography,
    Grid,
    Button,
    Stack
  } from "@mui/material";

const Itemsource = ({ name, price, type }) => {
    return (
      <Grid item>
        <Stack alignItems="center" direction="row" spacing={1}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            {name}
          </Typography>
          <Typography mt={0.5} sx={{ fontSize: 13 }} color="text.secondary">
            $ {price}
          </Typography>
          <Button mt={0.5} variant="text" size="small">
            {type}
          </Button>
        </Stack>
      </Grid>
    );
  };

export default Itemsource;