import { IProductCategory } from '../Entities/ProductCategory'
import { IProductCategoryRepo } from './ProductCategory'
import { createClient } from 'redis'

export const MockProductCategory: IProductCategory = {
  nid: '',
  oid: 0,
  name: '',
  active: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  companyNid: '',
  products: []
}

export class ProductCategoryRedisRepo implements IProductCategoryRepo {
  client!: any

  async connect () {
    const _client = createClient<any>({
      url: 'redis://default:I3FUHqrT6SDXujFouHs7kon4lpngoavm@redis-18502.c17.us-east-1-4.ec2.cloud.redislabs.com:18502'
    })
    _client.on('error', (err) => { throw new Error(err) })
    await _client.connect()
    this.client = _client
  }

  async delete (nid: string) {
    try {
      const list: IProductCategory[] = await this.client.json.get('productCategories')
      const filter = list.filter(e => e.nid !== nid)

      await this.client.json.set('productCategories', '$', [...filter])
      return { data: {}, error: null }
    } catch (err) {
      return { data: null, error: err }
    }
  }

  async add (form: IProductCategory) {
    try {
      // await this.client.hSet(form.nid, 'productCategory', JSON.stringify(form))
      const results = await this.client.json.get('productCategories')
      await this.client.json.set('productCategories', '$', [...results, form])
      return { data: {}, error: null }
    } catch (err) {
      return { data: null, error: err }
    }
  }

  async findById (nid: string) {
    try {
      const list: IProductCategory[] = await this.client.json.get('productCategories')
      const category = list.filter(e => e.nid === nid)
      if (!category.length) return { data: MockProductCategory, error: 'category not found' }
      if (category.length > 1) return { data: MockProductCategory, error: 'duplicated category' }
      return { data: category[0], error: null }
    } catch (err) {
      return { data: MockProductCategory, error: err }
    }
  }

  async findAll () {
    try {
      const list: IProductCategory[] = await this.client.json.get('productCategories')
      return { data: list, error: null }
    } catch (err) {
      return { data: [MockProductCategory], error: err }
    }
  }
}
