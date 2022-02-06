import { IProduct } from './Product'

export interface IProductCategory {
  nid: string
  oid: number
  name: string
  active: boolean
  createdAt: Date
  updatedAt: Date
  companyNid: string
  products: IProduct[]
}
