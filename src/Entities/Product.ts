import { IProductCategory } from './ProductCategory'

export interface IProduct {
  nid: string
  oid: number
  name: string
  description: string
  price: number
  costPrice: number
  active: boolean
  promoted: boolean
  productCategory: IProductCategory
  createdAt: Date
  updatedAt: Date
  cashback: number
  images: string[]
  companyNid: string
  productCategoryNid: string
}
