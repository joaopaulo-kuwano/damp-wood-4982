import { IProduct } from '../Entities/Product'
import { IIdGenerator } from '../Libs/IdGenerator'
import { IProductCategoryRepo } from '../Repositories/ProductCategory'
import { IProductAddRequest } from '../Validators/ProductAddRequest'
import { ProductCategoryAddRequest } from '../Validators/ProductCategoryAddRequest'

export class ProductCategoryAddService {
  form!: IProductAddRequest

  // eslint-disable-next-line no-useless-constructor
  constructor (
    private validator: ProductCategoryAddRequest,
    private idGenerator: IIdGenerator,
    private repo: IProductCategoryRepo
  ) { }

  public async exec () {
    const valid = this.validator.validate()
    if (!valid) return { data: this.validator.errors, statusCode: 400 }
    const nid = this.idGenerator.generateId()
    const createdAt = new Date()
    const updatedAt = new Date()
    const products: IProduct[] = []
    const { data, error } = await this.repo.add({
      ...this.validator.data, nid, createdAt, updatedAt, products
    })
    if (error) return { data: error, statusCode: 500 }
    return { data: data, statusCode: 201 }
  }
}
