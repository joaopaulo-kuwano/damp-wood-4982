import { IProductCategory } from '../Entities/ProductCategory'
import { ProductCategoryRedisRepo } from '../Repositories/ProductCategoryRedis'

describe('CRUD em repositório REDIS', () => {
  const form: IProductCategory = {
    active: true,
    companyNid: '',
    createdAt: new Date(),
    name: 'Lanches',
    nid: 'any_nid',
    oid: 0,
    updatedAt: new Date(),
    products: []
  }

  test('cadastro, busca por id, busca geral e exclusao de itens', async () => {
    const repo = new ProductCategoryRedisRepo()
    await repo.connect()
    const { data, error } = await repo.add(form)
    expect(error).toBe(null)
    expect(data).toBeTruthy()

    let list = await repo.findAll()
    expect(list.error).toBeNull()
    expect(list.data.length).toBeGreaterThan(0)
    expect(Array.isArray(list.data)).toBe(true)

    const cat = await repo.findById(form.nid)
    expect(cat.data).toBeTruthy()
    expect(cat.error).toBeNull()
    expect(cat.data.nid).toBe(form.nid)
    expect(new Date(cat.data.createdAt)).toEqual(form.createdAt)

    const remove = await repo.delete(form.nid)
    expect(remove.data).toBeTruthy()
    expect(remove.error).toBeNull()

    list = await repo.findAll()
    expect(list.error).toBeNull()
    expect(Array.isArray(list.data)).toBe(true)
    expect(list.data.length).toBe(0)
  })
})
