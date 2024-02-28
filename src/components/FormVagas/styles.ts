import styled from 'styled-components'

interface CampoProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface FormVagaProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  children?: React.ReactNode
}

export const FormVaga = styled.form<FormVagaProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  & > * {
    margin-bottom: 12px;
  }
`
export const Campo = styled.input.attrs((props) => ({
  placeholder: 'Front-end, fullstack, node, design',
  type: 'search'
}))<CampoProps>`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrincipal};

  /* Adicionando a propriedade onChange */
  &:focus {
    outline-color: ${(props) => props.theme.corPrincipal};
  }
`

export interface BotaoProps {
  theme?: any
}

export const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
