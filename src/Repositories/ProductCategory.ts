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
  add: (form: IProductCategory) => Promise<{ data: IProductCategory[] | null, error: RepoError | null }>
  list: (params: ListParams) => Promise<{ data: IProductCategory[] | null, error: RepoError | null }>
  // update: () => Promise<{ data: any, error: any }>
  delete: (e: string) => Promise<{ data: IProductCategory[] | null, error: RepoError | null }>
}
