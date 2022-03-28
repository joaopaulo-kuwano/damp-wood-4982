import { ApiLoader } from '../Api'
import { Pool } from 'pg'

export class AppLoader {
  constructor () {
    const api = new ApiLoader()
    api.setupMiddlewares()
    api.setupRoutes()
    api.initServer()

    const endpointUrl = 'dynamodb.us-east-1.amazonaws.com'
    const accessKey = 'AKIAQ5WA5PTGBZW6GWOD'
    const secretKey = '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'
  }
}
