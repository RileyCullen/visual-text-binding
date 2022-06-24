const createContainer = (id: string, width: number, height: number): HTMLElement => {
    let div = document.createElement('div');
    div.style.width = width.toString();
    div.style.height = height.toString();
    div.setAttribute('id', id);
    return div;
};

export default createContainer;