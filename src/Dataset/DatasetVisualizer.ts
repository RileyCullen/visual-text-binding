import { IVisualElem, TDataEntry, TDataset } from "../../types";
import dragElement from "../Helpers/Draggable";
import Observer from "../Observer";

class DatasetVisualizer implements IVisualElem {
    #data: TDataset;
    #container: HTMLElement;
    #dataID: string;
    #observer: Observer;
    #newVal: TDataEntry;

    constructor(dataID: string, data: TDataset, observer: Observer) {
        this.#data = data;
        this.#container = document.createElement('table');
        this.#dataID = dataID;
        this.#observer = observer;
        this.#newVal = NaN;
    }

    visualize(): HTMLElement {
        this.#createTable();
        dragElement(this.#container);
        return this.#container;
    }

    update(data: TDataset) {
        this.#data = data;
        this.#container.replaceChildren();
        this.#createTable();
    }

    #createTable() {
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
        this.#container.appendChild(header);

        this.#data.forEach((row, i) => {
            let tableRow = document.createElement('tr')
            for (let col in row) {
                let cell = document.createElement('td');
                cell.contentEditable = 'true';
                cell.addEventListener('input', (e) => {
                    let val = cell.textContent;

                    if (val !== null) {
                        let num = Number(val);
                        if (!isNaN(num)) this.#newVal = num;
                    }
                });
                cell.addEventListener('focusout', () => {
                    this.#observer.updateDataset(this.#dataID, [[i, col]], [this.#newVal])
                });

                cell.innerHTML = row[col].toString();
                cell.style.padding = '10px';
                tableRow.appendChild(cell);
            }
            tableRow.style.border = '1px solid black';
            this.#container.appendChild(tableRow);
        });

        this.#container.style.border = '2px solid';
        this.#container.style.borderCollapse = 'collapse';
    }
}

export default DatasetVisualizer;