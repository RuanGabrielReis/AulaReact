export default function Exercicio5({consultas}) {
    let salariotot = consultas * 150;
    let desconto = salariotot*0.08;
    let salariofin = salariotot - desconto;
    return (
        <div>
            <div>Quantidade de consultas: {consultas}</div>
            <div>Salário Bruto: {salariotot}</div>
            <div>Desconto INSS: {desconto}</div>
            <div>Salário Líquido: {salariofin}</div>
        </div>
    )
}