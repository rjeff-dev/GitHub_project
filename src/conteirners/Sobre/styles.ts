import styled from "styled-components"

export const GithubSecao = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
