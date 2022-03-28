import Ajv, { Schema } from 'ajv'
import { ErrorObject } from '.'
const ajv = new Ajv()

export interface IProductCategoryAddRequest {
  oid: number
  name: string
  description: string
  active: boolean
  companyNid: string
}

export class ProductCategoryAddRequest {
  schema: Schema;
  errors: ErrorObject[] = []
  data!: IProductCategoryAddRequest

  constructor (private readonly form: any) {
    this.schema = {
      type: 'object',
      properties: {
        oid: { type: 'integer' },
        name: { type: 'string' },
        description: { type: 'string' },
        active: { type: 'boolean' },
        companyNid: { type: 'string' }
      },
      required: ['oid', 'name', 'active', 'companyNid', 'description'],
      additionalProperties: false
    }
  }

  public validate (): boolean {
    const validator = ajv.compile(this.schema)
    const valid = validator(this.form)
    if (valid) this.data = this.form
    else this.errors = validator.errors as any
    return valid
  }
}

/**
 *   nid: string
  oid: number
  name: string
  active: boolean
  createdAt: Date
  updatedAt: Date
  companyNid: string
  products: IProduct[]
 */
