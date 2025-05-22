export default function Exercicio3({valor,taxa,tempo}) {
    let parc = Number(valor) +(Number(valor)*((Number(taxa)**2)/100)*Number(tempo));
    return (
        <div>
            O valor da parcela é {parc}
        </div>
    )
}