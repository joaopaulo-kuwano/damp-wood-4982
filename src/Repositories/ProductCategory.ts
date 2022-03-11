import { IProductCategory } from '../Entities/ProductCategory'

export interface IProductCategoryFindAllRepo {
  nid: string
  oid: number
  name: string
  active: boolean
  createdAt: Date
  updatedAt: Date
  companyNid: string
}

export interface IProductCategoryRepo {
  add: (form: IProductCategory) => Promise<{ data: any, error: any }>
  findById: (e: string) => Promise<{ data: IProductCategory, error: any }>
  findAll: () => Promise<{ data: IProductCategoryFindAllRepo[], error: any }>
  delete: (e: string) => Promise<{data: any, error: any}>
}
