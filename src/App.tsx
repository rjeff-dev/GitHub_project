import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './conteirners/Projetos'
import Sidebar from './conteirners/Sidebar'
import Sobre from './conteirners/Sobre'
import EstiloGlobal, { Container } from './style'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoDark, setEstaUsandoDark] = useState(false)

  function trocaTema() {
    setEstaUsandoDark(!estaUsandoDark)
  }

  return (
    <ThemeProvider theme={estaUsandoDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocarTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
