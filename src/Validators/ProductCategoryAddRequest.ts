import { FieldError, ValidatorResponse } from '.'

export interface IProductCategoryAddRequest {
  oid: number
  name: string
  active: boolean
  companyNid: string
}

export function ProductCategoryAddValidator (form: any): ValidatorResponse<IProductCategoryAddRequest> {
  const errors: FieldError[] = []

  function addError (field: string, type: string, message?: string): void {
    errors.push({ field, type, message: message || '' })
  }

  if (!form) {
    addError('ALL', 'object', 'invalid json form')
    return { data: form, errors: errors }
  }
  if (typeof form.oid !== 'number') addError('oid', 'number')
  if (typeof form.name !== 'string') addError('name', 'string')
  if (typeof form.active !== 'boolean') addError('active', 'boolean')
  if (typeof form.companyNid !== 'string') addError('companyNid', 'string')
  return { data: form, errors: errors }
}
