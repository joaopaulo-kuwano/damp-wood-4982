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
  exec: (e: IProductAddRepoDTO) => Promise<{ data: IProductAddRepoDTO, error: any }>
  product: IProductAddRepoDTO
}

export class ProductAddMockRepo implements IProductAddRepo {
  product!: IProductAddRepoDTO

  // eslint-disable-next-line no-useless-constructor
  constructor (readonly throwError?: boolean) { }

  async exec (form: IProductAddRepoDTO) {
    try {
      if (this.throwError) throw new Error('async operation error')
      this.product = form
      return { data: this.product, error: null }
    } catch (err) {
      return { error: err, data: this.product }
    }
  }
}
