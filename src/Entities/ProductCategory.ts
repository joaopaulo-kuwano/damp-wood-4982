import { IProduct } from './Product'

export interface IProductCategory {
  id: string
  oid: number
  name: string
  active: boolean
  createdAt: Date
  updatedAt: Date
  companyId: string
  products: IProduct[]
}
