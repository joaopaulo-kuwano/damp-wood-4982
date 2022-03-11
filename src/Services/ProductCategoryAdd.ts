import { IProductCategory } from '../Entities/ProductCategory'
import { IIdGenerator } from '../Libs/IdGenerator'
import { IProductCategoryRepo } from '../Repositories/ProductCategory'
import { IProductCategoryAddRequest } from '../Validators/ProductCategoryAddRequest'

export class ProductCategoryAdd {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    readonly form: IProductCategoryAddRequest,
    readonly idGenerator: IIdGenerator,
    readonly repo: IProductCategoryRepo
  ) { }

  async exec () {
    const nid = this.idGenerator.generateId()
    const createdAt = new Date()
    const updatedAt = new Date()
    // eslint-disable-next-line no-unused-vars
    const cat: IProductCategory = {
      ...this.form, nid, createdAt, updatedAt, products: []
    }

    const { data, error } = await this.repo.add(cat)
    return { data, error }
  }
}
