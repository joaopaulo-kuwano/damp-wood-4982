import { SupabaseClient } from '@supabase/supabase-js'
import { IProductCategory } from '../Entities/ProductCategory'
import { IProductCategoryRepo, ListParams, RepoError } from './ProductCategory'

export class ProductCategorySupaRepo implements IProductCategoryRepo {
  // eslint-disable-next-line no-useless-constructor
  constructor (private client: SupabaseClient) { }

  async add (form: IProductCategory): Promise<{ data: IProductCategory[], error: RepoError }> {
    const api = await this.client.from('ProductCategory').insert(form)
    return { data: api.data as any, error: api.error as any }
  }

  async list (params: ListParams) {
    let select = '*'
    // eslint-disable-next-line prefer-const
    let match = {}
    if (!params.withProducts) select = 'id, oid, name, active, createdAt, updatedAt, companyId'
    if (params.id) Object.assign(match, { id: params.id })
    if (params.companyId) Object.assign(match, { companyId: params.companyId })
    const api = await this.client.from<IProductCategory>('ProductCategory').select(select).match(match)
    return { data: api.data, error: api.error }
  }

  async delete (id: string) {
    const api = await this.client.from<IProductCategory>('ProductCategory')
      .delete({ returning: 'representation' })
      .match({ id })
    return { data: api.data, error: api.error }
  }
}
