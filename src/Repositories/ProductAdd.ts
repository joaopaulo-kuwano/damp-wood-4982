export interface IProductAddRepoDTO {
  nid: string
  oid: number
  name: string
  description: string
  price: number
  costPrice: number
  active: boolean
  promoted: boolean
  createdAt: Date
  updatedAt: Date
  cashback: number
  companyNid: string
  productCategoryNid: string
}

export interface IProductAddRepo {
  exec: (e: IProductAddRepoDTO) => Promise<void>
  product: IProductAddRepoDTO
}

export class ProductAddRepo implements IProductAddRepo {
  product!: IProductAddRepoDTO

  async exec (form: IProductAddRepoDTO) {
    this.product = form
  }
}
