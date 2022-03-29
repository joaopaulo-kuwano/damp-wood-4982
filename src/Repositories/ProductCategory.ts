import { IProductCategory } from '../Entities/ProductCategory'

export interface RepoError {
  code: string
  details: string
  hint: string
  message: string
}

export interface ListParams {
  id?: string
  companyId?: string
  withProducts?: boolean
}

export interface IProductCategoryRepo {
  add: (form: IProductCategory) => Promise<{ data: IProductCategory[], error: RepoError }>
  list: (params: ListParams) => Promise<{ data: IProductCategory[], error: RepoError }>
  // update: () => Promise<{ data: any, error: any }>
  // delete: (e: string) => Promise<{ data: any, error: any }>
}
