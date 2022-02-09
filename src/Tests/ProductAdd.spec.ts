import { IdGenerator, MockIdGenerator } from '../Libs/IdGenerator'
import { ProductAddMockRepo } from '../Repositories/ProductAdd'
import { ProductAdd } from '../Services/ProductAdd'
import { IProductAddRequest } from '../Validators/ProductAddRequest'

describe('Cadastro de Produto', () => {
  const form: IProductAddRequest = {
    oid: 1,
    name: 'Any Product Name',
    description: '',
    price: 0,
    costPrice: 0,
    active: true,
    promoted: true,
    cashback: 0,
    companyNid: '',
    productCategoryNid: ''
  }

  test('Geração do repositorio e serviço add product', async () => {
    const repo = new ProductAddMockRepo()
    const idGenerator = new MockIdGenerator()
    const service = new ProductAdd(form, idGenerator, repo)
    const serviceExec = await service.exec()
    expect(serviceExec.error).toBeFalsy()
    expect(serviceExec.data.name).toBe('Any Product Name')
    expect(repo.product.oid).toBe(1)
    expect(repo.product.nid.includes('MOCK__')).toBe(true)
    expect(repo.product.createdAt).toBeInstanceOf(Date)
    expect(repo.product.updatedAt).toBeInstanceOf(Date)
  })

  test('Erro em repositorio', async () => {
    const repo = new ProductAddMockRepo(true)
    const idGenerator = new IdGenerator()
    const service = new ProductAdd(form, idGenerator, repo)
    const serviceExec = await service.exec()
    expect(serviceExec.data).toBeFalsy()
    expect(repo.product).toBeFalsy()
    expect(serviceExec.error).toBeInstanceOf(Error)
    expect(serviceExec.error.toString()).toBe('Error: async operation error')
  })
})
