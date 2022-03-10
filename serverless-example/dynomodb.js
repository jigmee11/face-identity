"use strict";
const AWS = require("aws-sdk");
AWS.config.update({
  region: "ap-northeast-2",
});

var dynamodb = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

// module.exports.createItem = async (event) => {
//   const params = {
//     TableName: "games",
//     Item: {
//       user_id: "jigmee",
//       game_id: "g543",
//       player_score: 30,
//       timestamp: "12/03/2019",
//     },
//   };
//   dynamodb.put(params, (err, data) => {
//     console.log(data);
//   });
// };

// module.exports.createItem = async (event) => {};

module.exports.createItem = async () => {
  const table = await dynamodb
    .query({
      TableName: "games",
      IndexName: "user_id-player_score-index",
      KeyConditionExpression:
        "user_id = :user and player_score between :s1 and :s2",
      ExpressionAttributeValues: {
        ":user": "jigmee",
        ":s1": 10,
        ":s2": 40,
      },
    })
    .promise();
  return {
    statusCode: 200,
    body: JSON.stringify({
      games: table,
    }),
  };
};
