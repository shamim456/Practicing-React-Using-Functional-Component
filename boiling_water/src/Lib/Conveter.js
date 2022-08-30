export function toCelcious(fahenhite) {
    return (fahenhite - 32) * 5 / 9;
}

export function toFahrenhite(celcious) {
    return(
        (celcious * 5/9) + 32
    )
}
export function convert (tempareture, convertFunction) {
    const input = Number(tempareture);
    const output = convertFunction(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded;
}