import { TDataset } from "../../types";
import dragElement from "../Helpers/Draggable";

class DatasetVisualizer {
    #data: TDataset;
    constructor(data: TDataset) {
        this.#data = data;
    }

    visualize(): HTMLElement {
        let container = document.createElement('table');

        let header = document.createElement('tr');
        for (let col in this.#data[0]) {
            let headerText = document.createElement('th');
            headerText.innerHTML = col;
            headerText.style.backgroundColor = '#04AA6D';
            headerText.style.color = 'white';
            headerText.style.textAlign = 'left';
            headerText.style.padding = '12px 0px 12px 10px';
            header.appendChild(headerText);
        }
        container.appendChild(header);

        this.#data.forEach((row, i) => {
            let tableRow = document.createElement('tr')
            for (let col in row) {
                let cell = document.createElement('td');
                cell.innerHTML = row[col].toString();
                cell.style.padding = '10px';
                tableRow.appendChild(cell);
            }
            tableRow.style.border = '1px solid black';
            container.appendChild(tableRow);
        });

        container.style.border = '2px solid';
        container.style.borderCollapse = 'collapse';

        dragElement(container);

        return container;
    }
}

export default DatasetVisualizer;