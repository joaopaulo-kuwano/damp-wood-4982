import { Request, Response, Router } from 'express'
import { IdGenerator } from '../Libs/IdGenerator'
import { ProductCategoryPGRepo } from '../Repositories/ProductCategoryPG'
import { ProductCategoryAddService } from '../Services/ProductCategoryAdd'
import { ProductCategoryAddRequest } from '../Validators/ProductCategoryAddRequest'

const app = Router()

app.get('/', (req: Request, res: Response) => {
  return res.status(501).json({})
})

app.post('/', async (req: Request, res: Response) => {
  const validator = new ProductCategoryAddRequest(req.body)
  const idGenerator = new IdGenerator()
  const repo = new ProductCategoryPGRepo()
  const service = new ProductCategoryAddService(validator, idGenerator, repo)
  const response = await service.exec()
  res.status(response.statusCode).json(response.data)
})

export const ProductCategoryRouter = app
