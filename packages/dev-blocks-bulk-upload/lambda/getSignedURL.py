import json
import boto3
from botocore.config import Config
import os
import uuid

s3_client = boto3.client('s3')
bucket_name = os.environ['BUCKET_NAME']

def handler(event, context):
    
    body_ = event['body']
    print(body_)
    print(type(body_))
    
    body_1 = json.loads(body_)
    print(body_1)
    print(type(body_1))
    
    object_Id = body_1['key']
    print(object_Id)
    print(type(object_Id))
    
    file_extension = object_Id.split(".")[1]
    print(file_extension)
    
    if file_extension == "zip":
        object_Id = "zip/" + object_Id
        print(object_Id)
    else:
        object_Id = "public/" + object_Id
        print(object_Id)
    
    
    pre_response_val = s3_client.generate_presigned_post(
        Bucket = bucket_name,
        Key = object_Id,
        ExpiresIn = 600 
    )
    print("************************************")
    print(pre_response_val)
    print("presigned URL to get object Generated")
    print("************************************")
        
        
    response = buildResponse(pre_response_val)
        
    print(response)
    
    return response

def buildResponse(body):
    return {
        "statusCode" : 200,
        "headers" : {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type' : 'application/json'
        },
        "body" : json.dumps(body)
    }

