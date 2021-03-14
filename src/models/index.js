// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const DataPointType = {
  "TEMPERATURE": "TEMPERATURE",
  "HUMIDITY": "HUMIDITY"
};

const { DataPoint, Device, User } = initSchema(schema);

export {
  DataPoint,
  Device,
  User,
  DataPointType
};