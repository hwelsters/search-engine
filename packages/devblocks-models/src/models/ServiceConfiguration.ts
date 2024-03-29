export interface AmplifyStackConfiguration {
  readonly stackName: string;
  readonly amplifyAppName: string;
  readonly amplifyServiceRoleName: string;
  readonly amplifyAuthConfiguration: AmplifyAuthConfiguration;
}

export interface AmplifyAuthConfiguration {
  readonly stackName: string;
  readonly userPoolName: string;
  readonly userPoolClientName: string;
  readonly userPoolIdentityName: string;
  readonly authenticatedRoleName: string;
  readonly unauthenticatedRoleName: string;
}

export interface DocumentSearchStackConfiguration {
  readonly stackName: string;
  readonly documentStorageBucketName: string;
  readonly bulkUploadDocumentsLambdaName: string;
  readonly deleteDocumentLambdaName: string;

  readonly searchDocumentLambdaName: string;
  readonly searchDocumentApiName: string;
  readonly searchDocumentDeploymentName: string;
  readonly searchDocumentStageName: string;
  readonly searchDocumentLogsName: string;

  readonly storeTextTextractLambdaName: string;
  readonly storeTextTranscribeLambdaName: string;
  readonly storeTagsRekognitionLambdaName: string;
  readonly storeTextTextractTopicName: string;
  readonly storeTextTranscribeTopicName: string;
  readonly storeTagsRekognitionTopicName: string;

  readonly autocompleteLambdaName: string;
  readonly autocompleteApiName: string;
  readonly autocompleteDeploymentName: string;
  readonly autocompleteStageName: string;

  readonly updateOpensearchLambdaName: string;

  readonly processDocumentLambdaName: string;
  readonly processDocumentStateMachineName: string;
  readonly objectCreatedEventRuleName: string;

  readonly editDocumentLambdaName: string;
  readonly editDocumentApiName: string;
  readonly editDocumentDeploymentName: string;
  readonly editDocumentStageName: string;

  readonly locationServiceName: string;

  readonly documentSearchIndexName: string;
}

export interface StaticWebsiteHostingStackConfiguration {
  readonly stackName: string;
  readonly bucketName: string;
  readonly bucketDeploymentName: string;
  readonly distributionName: string;
  readonly originAccessIdentityName: string;
}
