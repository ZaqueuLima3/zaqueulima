import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.div`
  width: 18rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem;
  position: fixed;
  text-align: center;
  border-right: 1px solid var(--borders);
  background-color: var(--mediumBackground);

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`
