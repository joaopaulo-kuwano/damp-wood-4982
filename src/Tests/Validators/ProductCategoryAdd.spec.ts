import { ProductCategoryAddRequest } from '../../Validators/ProductCategoryAddRequest'

describe('Validacao de request para adicao de categoria de produto', () => {
  test('form invalido', () => {
    const request = new ProductCategoryAddRequest({})
    const valid = request.validate()
    expect(valid).toBe(false)
    expect(Array.isArray(request.errors)).toBe(true)
    expect(request.errors.length).toBeGreaterThanOrEqual(1)
    expect(request.data).toBeFalsy()
  })

  test('form valido', () => {
    //  ['oid', 'name', 'active', 'companyNid', 'description'],
    const request = new ProductCategoryAddRequest({
      oid: 1,
      name: 'any_cat',
      active: true,
      companyNid: 'any_id',
      description: 'any_desc'
    })
    const valid = request.validate()
    expect(valid).toBe(true)
    expect(Array.isArray(request.errors)).toBe(true)
    expect(request.errors).toHaveLength(0)
    expect(request.data.name).toBe('any_cat')
  })
})
