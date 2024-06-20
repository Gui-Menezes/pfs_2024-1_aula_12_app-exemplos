
function Hello(prop) {
    // const nome = prop.nome ? prop.nome :'World'
    return (
        // <h3>Hello {nome}!</h3>
        (prop.nome
            ? <h3>Hello {prop.nome}!</h3>
            : <h3>Hello World</h3>
        )
    )
}

export default Hello;