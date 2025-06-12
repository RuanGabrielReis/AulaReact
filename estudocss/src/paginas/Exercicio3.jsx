export default function Exemplo3(){
    const titulo = {
        color: "red",
        backgroundColor: "yellow",
        textAlign: "center",
        padding: "10px"
    };

    return (
        <div>
            <h2 style={titulo}>Exemplo de Estilos em Objeto</h2>

            <p>
            I am thou... thou art I...
The bond thy hast nurtured hath <span style={titulo}>finally matured</span>.
The innermost power of the Arcana hath been set free.
We now bestow upon thee...
The ultimate form of the within thy self...
            </p>
        </div>    
    )
} 