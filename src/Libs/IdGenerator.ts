import { nanoid } from 'nanoid'

export interface IIdGenerator {
  generateId: () => string
}

export class IdGenerator implements IIdGenerator {
  public generateId () {
    return nanoid()
  }
}

export class MockIdGenerator implements IIdGenerator {
  public generateId () {
    return 'MOCK__' + Math.random().toString()
  }
}
