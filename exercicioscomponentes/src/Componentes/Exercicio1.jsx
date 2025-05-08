export default function Exercicio1({fahren}) {
    let celsius = ((Number(fahren) -32)*5)/9
    return (
        <div>
            {fahren} em celsius é {celsius}
        </div>
    )
}