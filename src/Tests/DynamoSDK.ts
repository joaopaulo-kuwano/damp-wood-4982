import AWS from 'aws-sdk'

export interface DynamoDBParam {
  TableName: string
  Item: any
}

export class DynamoDBSDK {
  db!: AWS.DynamoDB.DocumentClient

  constructor () {
    AWS.config.update({
      region: 'us-east-1',
      accessKeyId: 'AKIAQ5WA5PTGBZW6GWOD',
      secretAccessKey: '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'
    })
    this.db = new AWS.DynamoDB.DocumentClient({})
  }

  async put (param: DynamoDBParam): Promise<{ error: AWS.AWSError, data: AWS.DynamoDB.DocumentClient.PutItemOutput }> {
    return new Promise((resolve, reject) => {
      this.db.put(param, (e, d) => {
        resolve({ error: e, data: d })
      })
    })
  }

  async read (query: AWS.DynamoDB.DocumentClient.QueryInput): Promise<{ error: AWS.AWSError, data: AWS.DynamoDB.DocumentClient.QueryOutput }> {
    return new Promise((resolve, reject) => {
      this.db.query(query, (e, d) => {
        resolve({ error: e, data: d })
      })
    })
  }
}
