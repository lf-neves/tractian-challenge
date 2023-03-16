import { Unit } from "./Units";
import { User } from "./Users";

export interface Company {
  id: number;
  name: string;
  units: Array<Unit>;
  users: Array<User>;
}
