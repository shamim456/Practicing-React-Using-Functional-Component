export function toCelcious(faharenhite) {
    return(
        (faharenhite - 32) * 5/9
    )
}
export function toFaharenhite(Celcious) {
    return(
        (Celcious * 9 / 5) + 32
    )
}
export function convert(tempareture, convertFunction) {
    const input = Number(tempareture);
    const outPut = convertFunction(input);
    const rounded = Math.round(outPut * 1000) / 1000;
    return rounded;
}
