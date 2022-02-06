import { IIdGenerator } from '../Libs/IdGenerator'
import { IProductAddRepo, IProductAddRepoDTO } from '../Repositories/ProductAdd'
import { IProductAddRequest } from '../Validators/ProductAddRequest'

export class ProductAdd {
  static async exec (form: IProductAddRequest, idGenerator: IIdGenerator, repo: IProductAddRepo) {
    const nid = idGenerator.generateId()
    const createdAt = new Date()
    const updatedAt = new Date()
    // eslint-disable-next-line no-unused-vars
    const productDTO: IProductAddRepoDTO = {
      ...form, nid, createdAt, updatedAt
    }

    const product = await repo.exec(productDTO)
    return product
  }
}
