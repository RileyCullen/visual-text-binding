import { IDataColumn, TDataEntry } from "../../types";

class DataColumn implements IDataColumn {
    name: string;
    data: Array<TDataEntry>;

    constructor(name: string, data: Array<TDataEntry>) {
        this.name = name;
        this.data = data;
    }

    getEntry(index: number): TDataEntry {
        if (index >= 0 && index < this.data.length) {
            return this.data[index];
        } else {
            return NaN;
        }
    }

    getRange(start: number, end: number): Array<TDataEntry> {
        return this.data.slice(start, end);
    }

    getAll() {
        return this.getRange(0, this.data.length);
    }

    getName(): string { return this.name; }

    /**
     * Example Usage
     * let double = (a: TDataEntry) => { return a * a; };
     * let col = new DataColumn('test', [1, 2, 3]);
     * let newCol = new DataColumn('transformed', col.transform(double));
     * => [1, 4, 9]
     * 
     * @param fn Callback function that represents an transformation that will 
     *           be performed for each entry in data.
     */
    transform(fn: (a: TDataEntry) => TDataEntry): Array<TDataEntry> {
        let transformedArr: Array<TDataEntry> = [];

        this.data.forEach(d => {
            let curr = d;
            if (d !== NaN) {
                curr = fn(d);
            }
            transformedArr.push(curr);
        });
        console.log(transformedArr)
        return transformedArr;
    }
}

export default DataColumn;