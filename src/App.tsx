import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal from './global'
import { ThemeProvider } from 'styled-components'

import Colors from './styles'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <ThemeProvider theme={Colors}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
