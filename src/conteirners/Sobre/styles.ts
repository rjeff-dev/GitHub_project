import styled from "styled-components"

export const GithubSecao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 32px;

  img {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
