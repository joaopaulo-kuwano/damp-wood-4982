import { IdGenerator } from '../Libs/IdGenerator'
import { ProductCategorySupaRepo } from '../Repositories/ProductCategorySupa'
import { SupaSDK } from './SupaSDK'

function makeSut () {
  const sdk = new SupaSDK()
  const client = sdk.getClient()
  const repo = new ProductCategorySupaRepo(client)
  return { client, repo }
}

describe('Repositorio de Categoria Produto em Supabase', () => {
  test('Cadastro de Categoria', async () => {
    const { repo } = makeSut()
    const form = {
      active: true,
      companyId: '1',
      id: new IdGenerator().generateId(),
      name: 'PROD_CATEGORY',
      oid: 1,
      products: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const api = await repo.add(form)
    expect(api.error).toBeFalsy()
    expect(api.data.length).toBe(1)
    expect(api.data[0].id).toBe(form.id)
  })
})
