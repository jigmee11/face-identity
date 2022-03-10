"use strict";
var randomWords = require("random-words");

module.exports.test = async (event) => {
  console.log(event);
  const words = randomWords(1);
  return {
    statusCode: 200,
    body: JSON.stringify({
      word: words,
    }),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
