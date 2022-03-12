"use strict";
const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-northeast-2",
});

const rek = new AWS.Rekognition();

module.exports.handler = async (event) => {
  const params = {
    CollectionId: "face-collection",
    FaceMatchThreshold: 50,
    Image: {
      S3Object: {
        Bucket: "face-identity-jigmee",
        Name: event["queryStringParameters"]["name"],
      },
    },
    MaxFaces: 1,
  };
  const data = await rek.searchFacesByImage(params).promise();
  let similiarPic = data.FaceMatches[0].Face.ExternalImageId;
  return {
    statusCode: 200,
    body: `https://face-identity-jigmee.s3.ap-northeast-2.amazonaws.com/test/${similiarPic}`,
  };
};
