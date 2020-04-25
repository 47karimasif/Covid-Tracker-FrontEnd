import axios from "./node_modules/axios";

const url = "https://api.rootnet.in/covid19-in/stats/latest";

export const fetchData = async () => {
  try {
    const {
      summary: { total, discharged, deaths },
    } = await axios.get(url);
    return {
      total,
      discharged,
      deaths,
    };
  } catch (error) {
    console.log(error);
  }
};
