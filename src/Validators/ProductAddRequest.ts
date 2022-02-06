import { FieldError, ValidatorResponse } from '.'

export interface IProductAddRequest {
  oid: number
  name: string
  description: string
  price: number
  costPrice: number
  active: boolean
  promoted: boolean
  cashback: number
  companyNid: string
  productCategoryNid: string
}

export function ProductAddValidator (form: any): ValidatorResponse<IProductAddRequest> {
  const errors: FieldError[] = []

  function addError (field: string, type: string, message?: string): void {
    errors.push({ field, type, message: message || '' })
  }

  if (typeof form.oid !== 'number') addError('oid', 'number')
  if (typeof form.name !== 'string') addError('name', 'string')
  if (typeof form.description !== 'string') addError('description', 'string')
  if (typeof form.price !== 'number') addError('price', 'number')
  if (typeof form.costPrice !== 'number') addError('costPrice', 'number')
  if (typeof form.active !== 'boolean') addError('active', 'boolean')
  if (typeof form.promoted !== 'boolean') addError('promoted', 'boolean')
  if (typeof form.cashback !== 'number') addError('cashback', 'number')
  if (typeof form.companyNid !== 'string') addError('companyNid', 'string')
  if (typeof form.productCategoryNid !== 'string') addError('productCategoryNid', 'string')
  return { data: form, errors: errors }
}
