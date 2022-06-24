import { TDataset } from "../../types";

class DatasetVisualizer {
    #data: TDataset;
    constructor(data: TDataset) {
        this.#data = data;
    }

    visualize(): HTMLElement {
        let container = document.createElement('div');
        this.#data.forEach(row => {
            for (let col in row) {
                console.log(row[col])
                let cell = document.createElement('p');
                cell.innerHTML = row[col].toString();
                container.appendChild(cell);
            }
        });
        return container;
    }
}

export default DatasetVisualizer;