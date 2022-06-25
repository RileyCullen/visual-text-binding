import { cloneDeep } from 'lodash';
import { TDataElement, TDataEntry, TDataset, TTuple } from '../../types/index';

/**
 * Dataset types are semi-mutable. Existing entries can be modified but not removed.
 * In addition, new rows or columns cannot be added. 
 */
class Dataset {
    #name: string;
    #data: TDataset;

    constructor(name: string, data: TDataset) {
        this.#name = name;
        this.#data = data;
    }

    /**
     *
     * @param indexArr Entries follow the form [number, string] where index 0 
     *                 denotes the row and index 1 denotes the column.
     * @param values 
     */
    modify(indexArr: TTuple[], values: Array<TDataEntry>) {
        indexArr.forEach((tuple, i) => {
            let [row, col] = tuple;
            this.#data[row][col] = values[i];
        });
    }

    /**
     * @assumptions Assumes that the rows withihn
     * 
     * @param rows Indicates which rows to return. An empty array indicates all
     *             rows should be returned. 
     */
    getRows(rows: Array<number> = []): TDataset {
        return this.#getRows(this.#data, rows);
    }
    
    /**
     * 
     * @param cols Indicates which columns to return. An empty array indicates
     *             that all columns should be returned.
     */
    getColumns(cols: Array<string> = []): TDataset {
        let tmp: TDataset = [];

        if (cols.length === 0) {
            return cloneDeep(this.#data);
        }

        this.#data.forEach(row => {
            let truncatedRow: TDataElement = {};
            cols.forEach(column => {
                truncatedRow[column] = row[column];
            });
            tmp.push(truncatedRow);
        });

        return tmp;
    }

    getSubset(rows: Array<number> = [], cols: Array<string> = []): TDataset {
        let tmp = this.getColumns(cols);
        return this.#getRows(tmp, rows);
    }

    getName() { return this.#name; }

    #getRows(data: TDataset, rows: Array<number>): TDataset {
        let tmp: TDataset = [];

        if (rows.length === 0) {
            return cloneDeep(data);
        }

        rows.forEach(rowIndex => {
            if (rowIndex >= 0 && rowIndex < data.length) {
                tmp.push(cloneDeep(data[rowIndex]));
            }
        });

        return tmp;
    }
}

export default Dataset;