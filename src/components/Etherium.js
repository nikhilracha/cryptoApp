import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Divider,
    Grid
  } from "@mui/material";

import Itemsource from "./Itemsource";
  
  const Etherium = (props) => {

    console.log("Props", props);
  
    var ethBuy = props.data.coinbase.buyPrice;
    var ethSell = props.data.coinbase.sellPrice;
  
    var ethbinanceBuy = props.data.binance.buyPrice;
    var ethbinanceSell = props.data.binance.sellPrice;
  
    var ethkucoinBuy = props.data.kucoin.buyPrice;
    var ethkucoinSell = props.data.kucoin.sellPrice;

    var lasttime = props.data.time.lastUpdate

    return (
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardHeader
            title="Etherium"
            subheader={`Last updated: ${lasttime}`}
            subheaderTypographyProps={{ fontSize: 12 }}
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs>
                <Grid item md={12}>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Buy
                  </Typography>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Itemsource name="Coinbase" price={ethBuy} type="Buy" />
                  </Grid>
                  <Grid item>
                    <Itemsource name="Binance" price={ethbinanceBuy} type="Buy" />
                  </Grid>
                  <Grid item>
                    <Itemsource name="Kucoin" price={ethkucoinBuy} type="Buy" />
                  </Grid>
                </Grid>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Grid item md={12}>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Sell
                  </Typography>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Itemsource name="Coinbase" price={ethSell} type="Sell" />
                  </Grid>
                  <Grid item>
                    <Itemsource name="Binance" price={ethbinanceSell} type="Sell" />
                  </Grid>
                  <Grid item>
                    <Itemsource name="Kucoin" price={ethkucoinSell} type="Sell" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default Etherium;
  