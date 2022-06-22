/**
 * Code taken from IG: simonhoiberg.
 */
const generateUID = (): string => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).slice(2);
    return head + tail;
};

export default generateUID;