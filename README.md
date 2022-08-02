# How to Serve HLS Video from an S3 Bucket

This repository contains code that creates an S3 bucket that can be used to stream HLS as described in my [post](https://hlsbook.net/how-to-serve-hls-video-from-an-s3-bucket/). 

You need to [install](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install) version 2 of the AWS CDK.

## Useful commands

Clone this repository and run `npm install` to install the required dependencies.

To create the bucket in your AWS account, run the following command with your own domain: `cdk deploy -c domain=https://hlsbook.net`.

If you don't specify the `domain` parameter, requests will be allowed from anywhere and the `Referer` header check won't be added to the bucket policy.

To remove the bucket, run `cdk destroy`.
