import Card from './components/Card.jsx';
import Hello from './components/Hello.jsx';
import ListCards from './components/ListCards.jsx';
import listaProdutos from './data/Produto.json'


function App() {
  
  return (
    <>
    <h1>App-Exemplos</h1>
    <Hello nome="Fulano"/>
    <Hello nome="Beltrano"/>
    <Hello nome="Ciclano"/>
    <Hello />

    {/* Incluindo card manualmente */}
    <Card titulo="Produto 1">
      <h3>Descrição</h3>
      <p>Detalhe do Produto</p>
    </Card>

    {/* Incluindo cards com MAP */}
    {/* {listaProdutos.map((produto) => (
      <Card titulo={produto.nome}>
      <h3>{produto.preco.toFixed(2)}</h3>
      </Card>
      ))} */}

    {/* Incluindo cards por componente */}
      <ListCards lista={listaProdutos} />
    </>
  )
}

export default App
