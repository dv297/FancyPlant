import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum DataPointType {
  TEMPERATURE = "TEMPERATURE",
  HUMIDITY = "HUMIDITY"
}



export declare class DataPoint {
  readonly id: string;
  readonly type?: DataPointType | keyof typeof DataPointType;
  readonly value?: string;
  readonly Device?: Device;
  constructor(init: ModelInit<DataPoint>);
  static copyOf(source: DataPoint, mutator: (draft: MutableModel<DataPoint>) => MutableModel<DataPoint> | void): DataPoint;
}

export declare class Device {
  readonly id: string;
  readonly name: string;
  readonly Users?: (User | null)[];
  constructor(init: ModelInit<Device>);
  static copyOf(source: Device, mutator: (draft: MutableModel<Device>) => MutableModel<Device> | void): Device;
}

export declare class User {
  readonly id: string;
  readonly deviceID?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}