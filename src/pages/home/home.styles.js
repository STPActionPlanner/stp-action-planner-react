import styled from 'styled-components'

export const PageContainer = styled.div`
  height: 100%;
  width: 100vw;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media only screen and (min-width: 90em) {
    padding: 0rem;
  }
`

export const HomeContainer = styled.main`
  height: 100%;
  width: 100%;
  max-width: 144rem;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeContent = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeadingContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const HeadingTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 600;
`

export const HeadingSubtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`