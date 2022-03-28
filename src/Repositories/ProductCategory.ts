import { IProductCategory } from '../Entities/ProductCategory'

export interface ListParams {
  nid?: string
  companyNid?: string
  withProducts?: boolean
}

export interface IProductCategoryRepo {
  add: (form: IProductCategory) => Promise<{ data: any, error: any }>
  list: (params: ListParams) => Promise<{ data: IProductCategory[], error: any }>
  update: () => Promise<{ data: any, error: any }>
  delete: (e: string) => Promise<{ data: any, error: any }>
}
