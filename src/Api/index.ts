import express from 'express'
import { ProductCategoryRouter } from './ProductCategory'

export class ApiLoader {
  app = express()

  public setupMiddlewares () {
    this.app.use(express.json())
  }

  public setupRoutes () {
    // this.app = express()
    this.app.use('/product-category', ProductCategoryRouter)
  }

  public initServer () {
    this.app.listen(3001, () => {
      console.log('app running')
    })
  }
}
