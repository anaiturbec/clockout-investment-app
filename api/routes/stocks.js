import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: './variables.env' });

export async function StockAggregates(req, res) {
  const date = req.query.date;
  const options = {
    method: 'GET',
    url: `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${date}`,
    headers: {
      Authorization: `Bearer ${process.env.POLY_API_KEY}`,
    },
  };

  const stocks = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  res.send(stocks);
}
