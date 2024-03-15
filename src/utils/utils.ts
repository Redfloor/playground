/* eslint-disable no-mixed-operators */
//@ts-ignore
function mulberry32(a) {
    return function() {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

export interface RandomColorProps {
    index: number;
}
export const randomColor = ({index}: RandomColorProps) => {
    const letters = '0123456789ABCDEF';
    const genHex = (i: number) => letters[Math.floor(mulberry32(i)() * 16)];
    const r = `${genHex(index)}${genHex(index^2)}`
    const g = `${genHex(index^3)}${genHex(index^4)}`;
    const b = `${genHex(index^5)}${genHex(index^6)}`;
    return `#${r}${g}${b}`;
}