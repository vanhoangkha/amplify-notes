// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notes } = initSchema(schema);

export {
  Notes
};