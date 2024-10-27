export const strToBool = str => {
    if (str) {
        return  str.toLowerCase() === "true"
    }
    return false;
};