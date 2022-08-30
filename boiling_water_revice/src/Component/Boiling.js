export default function Boiling({celcious, faharenhite}) {
    const result = (celcious >= 100 || faharenhite >= 212) ? "Water Would Boil" : "Water Would Not Boil"
    return result;
}