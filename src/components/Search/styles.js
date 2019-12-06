import styled from "styled-components"

export const SearchWrapper = styled.div`
  margin-top: 3rem;
  input {
    background: var(--background);
    padding: 12px;
    border: none;
    border-radius: 10px;
    outline: none;

    &::placeholder {
      color: var(--texts);
    }

    &:active,
    &:focus {
      border: 1px solid var(--highlight);
    }
  }
`
