import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Divider,
    Grid
  } from "@mui/material";

  import Itemsource from "./Itemsource";
  
  const Bitcoin = (props) => {
    console.log("Props", props);
  
    var btcBuy = props.data.coinbase.buyPrice;
    var btcSell = props.data.coinbase.sellPrice;
  
    var btcbinanceBuy = props.data.binance.buyPrice;
    var btcbinanceSell = props.data.binance.sellPrice;
  
    var btckucoinBuy = props.data.kucoin.buyPrice;
    var btckucoinSell = props.data.kucoin.sellPrice;

    var lasttime = props.data.time.lastUpdate
  
    return (
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardHeader
            title="Bitcoin"
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
                    <Itemsource name="Coinbase" price={btcBuy} type="Buy" />
                  </Grid>
                  <Grid item>
                    <Itemsource
                      name="Binance"
                      price={btcbinanceBuy}
                      type="Buy"
                    />
                  </Grid>
                  <Grid item>
                    <Itemsource name="Kucoin" price={btckucoinBuy} type="Buy" />
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
                    <Itemsource name="Coinbase" price={btcSell} type="Sell" />
                  </Grid>
                  <Grid item>
                    <Itemsource
                      name="Binance"
                      price={btcbinanceSell}
                      type="Sell"
                    />
                  </Grid>
                  <Grid item>
                    <Itemsource
                      name="Kucoin"
                      price={btckucoinSell}
                      type="Sell"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default Bitcoin;
  