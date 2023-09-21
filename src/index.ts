import { HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";

export async function handler() {
  const s3 = new S3Client({});
  const result = await s3.send(new HeadObjectCommand({
    Bucket: 'my-bucket',
    Key: 'my-key'
  }));
  return result;
}
