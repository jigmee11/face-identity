"use strict";
const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-northeast-2",
});

const rekognition = new AWS.Rekognition();

module.exports.handler = async (event) => {
  const { Records } = event;
  const { s3 } = Records[0];
  const { object } = s3;
  const { key } = object;
  const name = key.split("/")[1];
  var params = {
    CollectionId: "face-collection",
    DetectionAttributes: [],
    ExternalImageId: name,
    Image: {
      S3Object: {
        Bucket: "face-identity-jigmee",
        Name: key,
      },
    },
  };
  const indexData = await rekognition.indexFaces(params).promise();
  console.log(indexData);
};
