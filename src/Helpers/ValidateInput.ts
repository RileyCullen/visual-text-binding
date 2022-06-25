/**
 * 
 * @param cell 
 * @returns 0 if input is null or not a number.
 */
const validateInput = (cell: HTMLElement): number => {
    let val = cell.textContent;

    if (val === null) return 0;

    let num = Number(val);

    if (isNaN(num)) return 0;

    return num;
};

export default validateInput;