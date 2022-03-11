import { IIdGenerator } from '../Libs/IdGenerator'
import { IProductAddRepo, IProductAddRepoDTO } from '../Repositories/Produc'
import { IProductAddRequest } from '../Validators/ProductAddRequest'

export class ProductAdd {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    readonly form: IProductAddRequest,
    readonly idGenerator: IIdGenerator,
    readonly repo: IProductAddRepo
  ) {}

  async exec () {
    const nid = this.idGenerator.generateId()
    const createdAt = new Date()
    const updatedAt = new Date()
    // eslint-disable-next-line no-unused-vars
    const productDTO: IProductAddRepoDTO = {
      ...this.form, nid, createdAt, updatedAt
    }

    const { data, error } = await this.repo.exec(productDTO)
    return { data, error }
  }
}
