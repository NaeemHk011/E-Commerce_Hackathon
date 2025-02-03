
import { type SchemaTypeDefinition } from 'sanity'
import {product} from "../product"
import { ourTeam } from '../ourTeam'
import { order } from '../order'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,ourTeam,order],
}
