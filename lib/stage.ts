import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { UdemyFullstackProjectStack } from './udemy-fullstack-project-stack';

export class AppStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);
    new UdemyFullstackProjectStack(this, 'UdemyFullstackProjectStack');
  }
}

