# MAAP STAC browser

This repository contains the AWS CDK code (written in typescript) used to deploy the STAC browser that acts as a front end to the MAAP STAC catalog.

## Deployment

### Requirements

1. `node.js` is installed
2. `docker` is installed and running
3. node dependencies are installed : run `npm install` from the root of this repo.
4. If deploying on SMCE : make sure you are properly authenticated. Refer to [these instructions](https://github.com/NASA-IMPACT/active-maap-sprint/issues/482#issuecomment-1491475121).
5. An AWS CloudFront distribution exists so that you provide its ARN which will be added to the static browser bucket policies. This distribution could in theory be created as part of this stack and the parameter removed, however, for legacy reasons we need to allow for a distribution created in another AWS account. You will need to update the distribution after the deployment here to add an origin with the newly created bucket name.

### Steps

1. populate the `.env` file. 
2. from the root of this repository, run `./deploy.sh`. Make sure to use `./` and not `source`. 