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
    // this.app.use('/dynamo-product-category', DynamoProdCatRouter)
  }

  public initServer () {
    this.app.listen(3001, () => {
      console.log('app running')
    })
  }
}
