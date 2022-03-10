"use strict";
const AWS = require("aws-sdk");

// Set the Region
AWS.config.update({
  region: "ap-northeast-2",
});

// Create the S3 service object
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
});

const getUploadUrl = (type, name) => {
  return new Promise((res, rej) => {
    s3.getSignedUrl(
      "putObject",
      {
        Bucket: "face-identity-jigmee",
        Key: name,
        ContentType: type,
      },
      (err, url) => {
        if (err) rej(err);
        res(url);
      }
    );
  });
};

module.exports.getPreSignedURLToPutToS3 = async (
  event,
  context,
  mainCallback
) => {
  // What does this function do?
  // 1. Receive the filename to be uploaded and Create a request param to make a request to create pre-signed URL to upload to S3
  // 2. Make the request to S3
  // 3. Get the pre-signed URL from S3
  // 4. Send the pre-signed URL from S3 as response

  // 1. Receive the filename to be uploaded and Create a request param to make a request to create pre-signed URL to upload to S3
  const { name, type } = event.headers;
  const url = await getUploadUrl(type, name);
  return url;
};
