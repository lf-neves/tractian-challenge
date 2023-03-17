import { Asset } from "./Asset";
import { User } from "./Users";

export interface Unit {
  companyId: number;
  id: number;
  name: string;
  assets: Array<Asset>;
  users: Array<User>;
}
