import { DynamoDBSDK } from './DynamoSDK'

describe('CRUD em DynamoDB', () => {
  test('Gravacao de Dados', async () => {
    const sdk = new DynamoDBSDK()
    const api = await sdk.put({
      TableName: 'products',
      Item: {
        id: Math.random().toString(),
        type: 'PRODUCT_CATEGORY',
        categoryName: 'ANY_PRODUCT_CATEGORY',
        description: 'ANY_PCATEGORY_DESCRIPTION',
        companyId: '1'
      }
    })
    expect(api.error).toBeFalsy()
  })

  test('Leitura de Dados', async () => {
    const sdk = new DynamoDBSDK()
    const api = await sdk.read({
      TableName: 'products',
      ExpressionAttributeValues: {
        ':v1': '1'
      },
      KeyConditionExpression: 'companyId = :v1'
    })
    expect(api.error).toBeFalsy()
    expect(api.data).toBeTruthy()
  })
})
