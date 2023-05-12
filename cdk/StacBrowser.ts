import { Stack, aws_s3 as s3, aws_s3_deployment as s3_deployment, StackProps} from "aws-cdk-lib";
import { RemovalPolicy, CfnOutput } from "aws-cdk-lib";

import { Construct } from "constructs";


export class StacBrowser extends Stack {
    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id);

        const bucket = new s3.Bucket(this, `${Stack.of(this).stackName}-static-bucket`, {
            removalPolicy: RemovalPolicy.DESTROY,
        })

        new s3_deployment.BucketDeployment(this, 'BucketDeployment', {
            destinationBucket: bucket,
            sources: [s3_deployment.Source.asset(props.stacBrowserDistPath)]
          });

        new CfnOutput(this, "bucket-name", {
        exportName: `${Stack.of(this).stackName}-bucket-name`,
        value: bucket.bucketName,
        });

    }
}

export interface Props extends StackProps {
    // location of the stac-browser dist directory in the local filesystem
    stacBrowserDistPath: string;
}
