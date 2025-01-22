
import { type SchemaTypeDefinition } from 'sanity'
import {product} from "../product"
import { ourTeam } from '../ourTeam'
import { pro } from '../pro'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,ourTeam,pro],
}
