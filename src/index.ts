require('dotenv').config()

// eslint-disable-next-line import/first
import { AppLoader } from './Loaders'

function initApp () {
  // eslint-disable-next-line no-unused-vars
  const app = new AppLoader()
}

initApp()
