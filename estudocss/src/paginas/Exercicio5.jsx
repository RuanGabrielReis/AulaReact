export default function Exercicio5({nota1, nota2}) {
    const aprovado = {
        color: "white",
        backgroundColor: "blue"
    };
    const reprovado = {
        color: "white",
        backgroundColor: "red"
    };
    
    let media = (Number(nota1) + Number(nota2))/2;

    if (media >= 6) {
    return (
        <div>  
        <h2>Exercicio 5 - Calculo de Média</h2>

        <p style={{textAlign: "justify"}}>
            O componente <span style={{fontWeight: "700"}}>Exercicio2</span> recebe dois parametros referente a nota1 e nota2, calcule a média aritmérica, e verifica se o aluno esta <span style={aprovado}>aprovado</span> ou <span style={reprovado}>reprovado</span>. Para estar aprovado é necessário média 6 ou superior. <span style={{fontStyle: "italic"}}>Note que esse paragrafo esá justificado</span>.
            <br/>
            <br/>
            Nota 1: {nota1}<br/>
            Nota 2: {nota2}<br/>
            Media: {media}<br/><br/>

            <span style={aprovado}>Aluno aprovado!</span>
        </p>
        </div>
    )
    } else {
        return (
            <div>  
            <h2>Exercicio 5 - Calculo de Média</h2>
    
            <p style={{textAlign: "justify"}}>
                O componente <span style={{fontWeight: "700"}}>Exercicio2</span> recebe dois parametros referente a nota1 e nota2, calcule a média aritmérica, e verifica se o aluno esta <span style={aprovado}>aprovado</span> ou <span style={reprovado}>reprovado</span>. Para estar aprovado é necessário média 6 ou superior. <span style={{fontStyle: "italic"}}>Note que esse paragrafo esá justificado</span>.
                <br/>
                <br/>
                Nota 1: {nota1}<br/>
                Nota 2: {nota2}<br/>
                Media: {media}<br/><br/>

                <span style={reprovado}>Aluno reprovado!</span>
            </p>
            </div>
        )    
    }
}