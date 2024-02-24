import styled from 'styled-components'

export const Livaga = styled.li`
  border: 1px solid ${(props) => props.theme.corPrincipal};
  background-color: ${(props) => props.theme.corSecundaria};
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

  :hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corSecundaria};
    cursor: default;

  :hover a {
    border-color: ${(props) => props.theme.corPrincipal};
    background-color: ${(props) => props.theme.corSecundaria};
    color: ${(props) => props.theme.corPrincipal};
  }
`
export const H3Titulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const Alink = styled.a`
  border-color: ${(props) => props.theme.corSecundaria};
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`
