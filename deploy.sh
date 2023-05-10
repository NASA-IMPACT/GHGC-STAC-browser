#!/bin/bash

# load config from .env, assumed to be in the same directory as this script and a valid bash file
set -a # automatically export all variables
source .env
set +a

# print out the environment variables created here with a nice header
echo "Environment variables set:"
echo "=========================="
echo "STAGE: $STAGE"
echo "BROWSER_CLOUDFRONT_DISTRIBUTION_ARN: $BROWSER_CLOUDFRONT_DISTRIBUTION_ARN"
echo "=========================="

# prompt user to continue. If yes, continue. If no, exit.
read -p "Continue? press any key " -n 1 -r
# inform that we are deploying
echo ""
echo "Deploying..."

cdk synth --all
cdk deploy --all --require-approval never