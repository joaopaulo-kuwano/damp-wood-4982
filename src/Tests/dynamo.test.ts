import { DynamoDBSDK } from './DynamoSDK'

describe('CRUD em DynamoDB', () => {
  test('Gravacao de Dados', async () => {
    const sdk = new DynamoDBSDK()
    const api = await sdk.put({
      TableName: 'LevCardapio',
      Item: {
        nid: Math.random().toString(),
        name: 'AUTTO'
      }
    })
    console.log(api)

    expect(api.error).toBeFalsy()
  })

  test('Leitura de Dados', async () => {
    const sdk = new DynamoDBSDK()
  })
})
