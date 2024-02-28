import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './global'
import { ThemeProvider } from 'styled-components'

import Colors from './styles'
import Cabecalho from './components/Cabecalho'
import FormVagas from './components/FormVagas'
import { FormVaga } from './components/FormVagas/styles'

function App() {
  return (
    <ThemeProvider theme={Colors}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
