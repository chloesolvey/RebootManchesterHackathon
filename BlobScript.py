from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient
from azure.identity import DefaultAzureCredential

import os 

credential = DefaultAzureCredential()

cwd = os.getcwd()
# Replace these with your Azure Blob Storage details
account_url = "https://nerdherdcustomerdata.blob.core.windows.net"
connection_string = "DefaultEndpointsProtocol=https;AccountName=nerdherdcustomerdata;AccountKey=xgfEuJ1rACVI5U+820wSZr6KSiV6gkH4g+6D3fvaXr8nsxmaa0J+ucK0VEhkOpsHZMIYptNn41sj+AStw1mYcA==;EndpointSuffix=core.windows.net"  # Your Azure Storage Account connection string
container_name = "nerdherdcontainer"        # The container name in Azure Blob Storage
local_file_path = cwd+ "/customerdata.json"  # Path to the existing JSON file (e.g., 'existing_file.json')
blob_name = "nerdherdcontainer.json"  # Name of the blob (could be the same or different)

# Initialize a BlobServiceClient using the connection string
blob_service_client = BlobServiceClient(account_url=account_url, credential=credential)

# Get a reference to the container
container_client = blob_service_client.get_container_client(container_name)

# Upload the file to Blob Storage
with open(local_file_path, "rb") as data:
    blob_client = container_client.get_blob_client(blob_name)
    blob_client.upload_blob(data, overwrite=True)  # overwrite=True to replace an existing file
    print(f"File '{blob_name}' uploaded to container '{container_name}'.")