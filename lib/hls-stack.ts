import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';

export class HlsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const corsRule: s3.CorsRule = {
      allowedMethods: [s3.HttpMethods.GET],
      allowedOrigins: ['http://hlsbook.net'],
      allowedHeaders: ['Authorization', 'Range'],
      maxAge: 3000
    };
    const bucket = new s3.Bucket(this, 'HlsBucket', {
      cors: [corsRule],
      removalPolicy: RemovalPolicy.DESTROY
    });
    bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [bucket.arnForObjects('*')],
        principals: [new iam.StarPrincipal()],
        effect: iam.Effect.ALLOW
      })
    );
    bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [bucket.arnForObjects('*')],
        principals: [new iam.StarPrincipal()],
        effect: iam.Effect.DENY,
        conditions: {
          'StringNotLike': { 'aws:Referer': ['http://hlsbook.net/*'] }
        }
      })
    );
    new CfnOutput(this, 'Bucket', { value: bucket.bucketName });
  }
}
