import { IdGenerator, MockIdGenerator } from '../Libs/IdGenerator'

describe('Gerador de IDs únicos', () => {
  test('NanoId (config padrão)', () => {
    const lib = new IdGenerator()
    const key = lib.generateId()
    expect(key).toHaveLength(21)
  })

  test('Mock (Math.random)', () => {
    const lib = new MockIdGenerator()
    const key = lib.generateId()
    expect(key.includes('MOCK__')).toBe(true)
    expect(key.length).toBeGreaterThanOrEqual(15)
  })
})
