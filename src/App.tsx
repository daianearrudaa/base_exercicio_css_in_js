import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './global'
import { ThemeProvider } from 'styled-components'

import Colors from './styles'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <ThemeProvider theme={Colors}>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <Hero />
        <div>
          <ListaVagas />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
