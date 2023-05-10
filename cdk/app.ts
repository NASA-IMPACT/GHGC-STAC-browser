#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";

import { Config } from "./config";
import { StacBrowser } from "./StacBrowser";
const { stage, buildStackName, browserCloudFrontDistrbutionArn, stacBrowserDistPath} =
  new Config();

export const app = new cdk.App({});

new StacBrowser(app, buildStackName("browser"), {cloudFrontDistributionArn: browserCloudFrontDistrbutionArn, stacBrowserDistPath: stacBrowserDistPath});