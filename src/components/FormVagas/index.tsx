import React, { FormEvent, useState } from 'react'

import { FormVaga, Campo, Botao } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVaga onSubmit={(e) => aoEnviarForm(e)}>
      <Campo onChange={(e) => setTermo(e.target.value)} />
      <Botao>Pesquisar</Botao>
    </FormVaga>
  )
}
export default FormVagas
