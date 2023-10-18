import axios from 'axios';
import dayjs from 'dayjs';

// get Stocks from endpoint
export const getStocks = async ({ date }) => {
  try {
    // generates random date
    randomDate = dayjs(
      new Date(+new Date() - Math.floor(Math.random() * 10000000000))
    ).format('YYYY-MM-DD');
    // validates if date parameter is undefined
    const isDate = date ? date : randomDate;
    const response = await axios.get(
      `http://localhost:4000/stocks?date=${isDate}`
    );
    const result = await response.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
