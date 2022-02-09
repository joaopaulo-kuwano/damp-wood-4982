import { ProductAddValidator } from '../Validators/ProductAddRequest'

describe('Validacao de Request -- Add Product', () => {
  const formVazio = {}
  const formValido = {
    oid: 0,
    name: '',
    description: '',
    price: 0,
    costPrice: 0,
    active: true,
    promoted: true,
    cashback: 0,
    companyNid: '',
    productCategoryNid: ''
  }

  // envia qualquer parametro e recebe validacoes
  test('espera receber data e errors do validador', () => {
    const { data, errors } = ProductAddValidator(formVazio)
    expect(data).toBeTruthy()
    expect(errors).toBeTruthy()
  })

  // verifica se form é um objeto
  test('envia form nulo e espera que seja rejeitado', () => {
    const { data, errors } = ProductAddValidator(null)
    expect(data).toBeFalsy()
    expect(errors).toHaveLength(1)
    expect(errors[0].field).toBe('ALL')
    expect(errors[0].type).toBe('object')
    expect(errors[0].message).toBe('invalid json form')
  })

  // validar todas as props do add product
  // nao usar length sem verificar se errors é array porque todos os tipos têm length
  test('envia form invalido e espera erros de validacao', () => {
    const { data, errors } = ProductAddValidator(formVazio)
    expect(data).toEqual(formVazio)
    expect(Array.isArray(errors)).toBe(true)
    expect(errors).toHaveLength(10)
  })

  test('envia form valido e espera nao receber erros', () => {
    const { data, errors } = ProductAddValidator(formValido)
    expect(data).toEqual(formValido)
    expect(Array.isArray(errors)).toBe(true)
    expect(errors).toHaveLength(0)
  })

  test('envia form invalido e valida erro em um campo', () => {
    const { data, errors } = ProductAddValidator({ ...formValido, oid: null })
    expect(data).toEqual({ ...formValido, oid: null })
    expect(Array.isArray(errors)).toBe(true)
    expect(errors).toHaveLength(1)
    expect(errors[0].field).toBe('oid')
    expect(errors[0].type).toBe('number')
    expect(errors[0].message).toBe('')
  })
})
