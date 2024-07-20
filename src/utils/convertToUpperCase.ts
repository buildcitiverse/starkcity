export const convertToUpperCase = (text: string) => {
    return text.toUpperCase();
}

export const normalizeAddress = (address: string) => {
    address = address.toLowerCase();
    address = address.replace(/^0x0+/, '0x');
    return address;
};