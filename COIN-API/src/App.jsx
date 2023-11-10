import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const getCoinPrices = async () => {
    const response = await axios.get(
      "https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-MATIC"
    );

    console.log(response);
  };

  useEffect(() => {
    getCoinPrices();
  }, []);

  return <div className="bg-red-100">Hello, React!</div>;
};

export default App;
