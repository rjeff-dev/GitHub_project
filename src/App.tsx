import Projetos from './conteirners/Projetos';
import Sidebar from './conteirners/Sidebar';
import Sobre from './conteirners/Sobre';
import EstiloGlobal, { Container } from './style';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App;
