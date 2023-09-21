import { HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { mockClient } from "aws-sdk-client-mock";
import { handler } from '.';
import 'aws-sdk-client-mock-jest';

describe('handler', () => {
  it('works', async () => {
    const s3 = new S3Client({});
    debugger;
    const s3Mock = mockClient(s3).on(HeadObjectCommand).resolvesOnce({
      ContentType: 'application/pdf'
    });

    const result = await handler();

    expect(result).not.toBeUndefined();
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
  });
})
