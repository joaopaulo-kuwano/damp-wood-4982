import { ApiLoader } from '../Api'

export class AppLoader {
  constructor () {
    const api = new ApiLoader()
    api.setupMiddlewares()
    api.setupRoutes()
    api.initServer()
  }
}
