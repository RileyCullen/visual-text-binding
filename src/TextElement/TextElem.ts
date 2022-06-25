import { IVisualElem, TDataEntry, TDataset, TTuple } from "../../types";
import dragElement from "../Helpers/Draggable";
import validateInput from "../Helpers/ValidateInput";
import Observer from "../Observer";

class TextElem implements IVisualElem {
    #container: HTMLElement;
    #data: TDataset;
    #tuple: TTuple;
    #newVal: TDataEntry;
    #observer: Observer;
    #dataID: string;
    #pStyle: Object;

    constructor(dataID: string, data: TDataset, tuple: TTuple, 
        observer: Observer, divStyle: Object = {}, pStyle: Object = {}) {
        this.#container = document.createElement('div');
        Object.assign(this.#container.style, divStyle)

        this.#data = data;
        this.#tuple = tuple;
        this.#newVal = NaN;
        this.#observer = observer;
        this.#dataID = dataID;
        this.#pStyle = pStyle;

        dragElement(this.#container);
    }

    visualize() {        
        this.#createTextElem();
        return this.#container;
    }

    update(data: TDataset) {
        this.#data = data;
        this.#container.replaceChildren();
        this.#createTextElem();
    }

    #createTextElem() {
        let [row, col] = this.#tuple,
            dataElem = this.#data[row][col];

        let domElem = document.createElement('p');
        Object.assign(domElem, this.#pStyle);
        domElem.contentEditable = 'true';
        domElem.addEventListener('input', () => {
            this.#newVal = validateInput(domElem);
        });
        domElem.addEventListener('focusout', () => {
            this.#observer.updateDataset(this.#dataID, [[row, col]], [this.#newVal]);
        }); 
        domElem.innerHTML = dataElem.toString();
        this.#container.appendChild(domElem);
    }
}

export default TextElem;