import { TDataEntry } from "./DataEntry";

export type TDataElement = { [key: string]: TDataEntry};

export type TDataset = Array<TDataElement>;