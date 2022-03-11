import { IProductCategory } from '../Entities/ProductCategory'
import { IIdGenerator } from '../Libs/IdGenerator'
import { IProductCategoryRepo } from '../Repositories/ProductCategory'
import { IProductCategoryAddRequest } from '../Validators/ProductCategoryAddRequest'

export class ProductCategoryService {
  // eslint-disable-next-line no-useless-constructor
  constructor (readonly repo: IProductCategoryRepo) { }

  public async add (form: IProductCategoryAddRequest, idGenerator: IIdGenerator) {
    const nid = idGenerator.generateId()
    const createdAt = new Date()
    const updatedAt = new Date()
    const addForm: IProductCategory = { ...form, nid, createdAt, updatedAt, products: [] }
    const { data, error } = await this.repo.add(addForm)
    return { data, error }
  }

  public async findByCompanyNid (nid: string) {
    const { data, error } = await this.repo.findAll()
    if (error) return { data, error }
    const filter = data.filter(e => e.companyNid === nid)
    
  }
}
