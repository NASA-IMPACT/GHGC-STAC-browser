# GHGC STAC browser

This repository contains the AWS CDK code (written in typescript) used to deploy the STAC browser that acts as a front end to the GHGC STAC catalog. The app in itself is from https://github.com/radiantearth/stac-browser.

## Deployment

The deployment is triggered manually with github workflows. See the actions in this repository, based on `.github/workflows/deploy.yml`. You can run a workflow for either the `development`, `staging` or `prod` environment.
