import styled, { css } from 'styled-components'

const ButtonStyles = css`
  padding: 0.7rem 1.7rem;
  text-decoration: none;
  border: 1px solid rgb(226, 214, 207);
  border-radius: 6px;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 1.125rem;
  cursor: pointer;
  width: fit-content;
  background-color: #efeae7;
  color: #ce6509;
  @media (max-width: 960px) {
    /* margin: 0 0.5rem 0 0.5rem; */
    text-align: center;
    text-decoration: none;
    padding: 0.25rem 1rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 0.85rem 0.85rem;
  }
  :hover {
    transform: scale(1);
  }
  box-shadow: rgb(181 176 174) 4px 4px 8px, rgb(255 252 245 / 50%) -8px -8px 16px;
`

export const Button = styled.a`
  ${ButtonStyles};
`

export default Button
