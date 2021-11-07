import { Grid, Box } from "@mui/material";
import Etherium from "./components/Etherium";
import Bitcoin from "./components/Bitcoin";
import React, { useEffect } from "react";
import axios from "axios";


function App() {

  const [btcdata, setBTCData] = React.useState(null);
  const [ethdata, setETHData] = React.useState(null);

  const getBTCPrices = () => {
    axios.get("https://3eqes.sse.codesandbox.io/api/BTC").then((response) => {
      console.log(response.data.data);
      const res = response.data.data;
      setBTCData(res);
    });
  };

  const getETHPrices = () => {
    axios.get("https://3eqes.sse.codesandbox.io/api/ETH").then((response) => {
      console.log(response.data.data);
      const res = response.data.data;
      setETHData(res);
    });
  };

//This lifecycle function will set a timer to run for every 5 sec and therefore the prices are updated every 5 sec. 
  useEffect(() => setInterval(()=>{
    getBTCPrices();
    getETHPrices();
  },5000), []);

  // useEffect(()=>{
  //   getBTCPrices();
  //   getETHPrices();
  // },[]);

  return (
    <div className="App">
      {btcdata && ethdata?
      <Box sx={{ flexGrow: 1, alignContent: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs md={6}>
          <Bitcoin data={btcdata} />
        </Grid>
        <Grid item xs md={6}>
          <Etherium data={ethdata}/>
        </Grid>
      </Grid>
    </Box>
      :<p>loading</p>}
      
    </div>
  );
}

export default App;
