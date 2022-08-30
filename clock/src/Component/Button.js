export default function Button({changHandelar, locale, buttonLocale}) {
    return (
        <button onClick={() => changHandelar(locale)}>{buttonLocale}</button>
    )
}