import { IAddon } from './Addon'

export interface IAddonCategory {
  nid: string
  oid: string
  name: string
  description: string
  active: boolean
  companyNid: string
  createdAt: Date
  updatedAt: Date
  addons: IAddon[]
}
