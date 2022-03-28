import { IProductCategoryRepo } from '../Repositories/ProductCategory'

export class ProductCategoryList {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly repo: IProductCategoryRepo
  ) {}

  async listAll () {
    const { data, error } = await this.repo.list({})
  }

  async listByCompany (companyNid: string) {

  }

  async findById (nid: string) {

  }
}
