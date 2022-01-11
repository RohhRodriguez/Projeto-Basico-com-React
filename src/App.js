import Item from './components/item';
import Card from './components/Card';

const App= () => {
  return(
    <>
    <ul>
      <h1>Exercício de Aplicação com React</h1>
      <p>
      Exemplo de aplicação em React, utilizando recurso de importação de components e criação de classes e funções.
      </p>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </ul>

    <ul>
      <h1>Exemplo de Função: Adicionar e Remover</h1>
      <Card/>
    </ul>

    <ul>
      <p>Desenvolvido por Rônica CS Rodrigues utilizando como referência a aula "Trabalhando Componentes em React" - (Nathally Souza)</p>
    </ul>

    </>
  )
}

export default App;
