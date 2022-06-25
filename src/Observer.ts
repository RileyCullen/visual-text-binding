import { IVisualElem, TDataEntry, TDataset, TObserverBindings, TTuple } from "../types";
import Dataset from "./Dataset/Dataset";

class Observer {
    #bindings: TObserverBindings;
    
    constructor() {
        this.#bindings = {};
    }

    addDataset(datasetID: string, dataset: Dataset) {
        if (!this.#bindings.hasOwnProperty(datasetID)) {
            this.#bindings[datasetID] = {
                dataset: dataset,
                dependencies: []
            }
        }
    }

    addBinding(datasetID: string, dependency: IVisualElem) {
        this.#bindings[datasetID].dependencies.push(dependency);
    }

    updateDataset(datasetID: string, indexArr: TTuple[], values: TDataEntry[]) {
        if (this.#bindings.hasOwnProperty(datasetID)) {
            this.#bindings[datasetID].dataset.modify(indexArr, values);
            this.#updateDependencies(datasetID);
        }       
    }

    #updateDependencies(datasetID: string) {
        if (this.#bindings.hasOwnProperty(datasetID)) {
            let entry = this.#bindings[datasetID];
            entry.dependencies.forEach(dep => {
                let data = entry.dataset.getSubset();
                dep.update(data);
            });
        }
    }
}

export default Observer;