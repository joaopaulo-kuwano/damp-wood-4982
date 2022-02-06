export interface IIdGenerator {
  generateId: () => string
}

export class IdGenerator implements IIdGenerator {
  public generateId () {
    return ''
  }
}

export class MockIdGenerator implements IIdGenerator {
  public generateId () {
    return Math.random().toString()
  }
}
