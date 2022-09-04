const axios = require("axios");
const limit = require("limiter");
const limiter = new limit.RateLimiter({
  tokensPerInterval: 20,
  interval: 1000,
});
const limiter2 = new limit.RateLimiter({
  tokensPerInterval: 100,
  interval: 120000,
});

exports.handler = async function (event) {
  if (event.queryStringParameters.ign) {
    try {
      const { ign } = event.queryStringParameters;
      const url = `${process.env.API_URL_NAME}/${ign}`;
      await limiter.removeTokens(1);
      await limiter2.removeTokens(1);
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
  } else if (event.queryStringParameters.puuid) {
    try {
      const { puuid } = event.queryStringParameters;
      const url = `${process.env.API_URL_MATCH}/${puuid}/ids?count=100`;
      await limiter.removeTokens(1);
      await limiter2.removeTokens(1);
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
  } else if (event.queryStringParameters.matchID) {
    try {
      const { matchID } = event.queryStringParameters;
      const url = `${process.env.API_URL_MATCH_DATA}/${matchID}`;
      await limiter.removeTokens(1);
      await limiter2.removeTokens(1);
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
  }
};
