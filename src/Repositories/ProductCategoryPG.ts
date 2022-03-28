import knex, { Knex } from 'knex'
import { IProductCategory } from '../Entities/ProductCategory'
import { IProductCategoryRepo, ListParams } from './ProductCategory'
import { MockProductCategory } from './ProductCategoryRedis'

export class ProductCategoryPGRepo implements IProductCategoryRepo {
  client: Knex

  constructor () {
    this.client = knex({
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        tableName: 'migrations'
      },
      pool: { min: 0, max: 10 }
    })
  }

  async add (form: IProductCategory): Promise<{ data: any; error: any; }> {
    try {
      const insert = await this.client('ProductCategory').insert(form)
      return { data: insert, error: null }
    } catch (err) {
      return { data: null, error: err }
    }
  }

  async list (params: ListParams): Promise<{ data: IProductCategory[], error: any }> {
    return { data: [], error: null }
  }

  async update () {
    return { data: MockProductCategory, error: null }
  }

  async delete (e: string): Promise<{ data: any; error: any; }> {
    return { data: null, error: null }
  }
}
