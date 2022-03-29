import { IdGenerator } from '../Libs/IdGenerator'
import { SupaSDK } from './SupaSDK'

interface IProductCategory {
  id: string
  name: string
  description: string
  companyId: string
  oid: number
  createdAt: Date
  updatedAt: Date
}

describe('CRUD Categoria Produto com supabase', () => {
  test('Inserir valor', async () => {
    const form = {
      id: new IdGenerator().generateId(),
      name: 'ANY_PROD_CATEGORY',
      description: 'ANY_DESC',
      companyId: new IdGenerator().generateId(),
      oid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const sdk = new SupaSDK()
    const { data, error } = await sdk.getClient().from<IProductCategory>('ProducCategory').insert(form)
    expect(error).toBeFalsy()
    expect(data).toHaveLength(1)
    expect(data).toBeTruthy()
  })
})
