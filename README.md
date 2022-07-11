# How to Serve HLS Video from an S3 Bucket

This repository contains code that creates an S3 bucket that can be used to stream HLS as described in my [post](https://hlsbook.net/how-to-serve-hls-video-from-an-s3-bucket/). 

You'll need to change the domain name to match your own domain on lines 12 and 35 in `lib/hls-stack.ts`.

You'll also need to [install](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install) version of the AWS CDK.

## Useful commands

Clone this repository and run `npm install` to install the required dependencies.

To create the bucket in your AWS account, run the following command: `cdk deploy`.

To remove the bucket, run `cdk destroy`.
