import styled from 'styled-components'

export const GithubSecao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 32px;

  img {
    width: 100%;
    height: 157px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
    width: 100%;
  }
`
