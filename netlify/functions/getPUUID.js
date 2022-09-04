const axios = require("axios");

exports.handler = async function (event) {
  try {
    const { ign } = event.queryStringParameters;
    const url = `${process.env.API_URL_NAME}/${ign}`;
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
