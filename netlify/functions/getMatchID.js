const axios = require("axios");

exports.handler = async function (event) {
  try {
    const { puuid } = event.queryStringParameters;
    const url = `${process.env.API_URL_MATCH}/${puuid}/ids?count=100`;
    const response = await axios.get(url, {
      headers: {
        "X-Riot-Token": process.env.API_KEY,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
