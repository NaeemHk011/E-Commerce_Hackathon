
import { type SchemaTypeDefinition } from 'sanity'
import {product} from "../product"
import { ourTeam } from '../ourTeam'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,ourTeam],
}
