import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.lightGrey};
`

export const TableHeadingContainer = styled.thead`
  background: ${props => props.theme.colors.purple};
`

export const TableHeadingItem = styled.th`
  display: ${props => props.sm ? "table-cell" : "none"};
  padding: 1rem 5rem;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.white};
  text-align: center;
  white-space: nowrap;

  @media only screen and (min-width: 40em) {
    display: ${props => props.sm || props.md ? "table-cell" : "none"};
  }

  @media only screen and (min-width: 56.25em) {
    display: ${props => props.sm || props.md || props.lg ? "table-cell" : "none"};
  }
`

export const TableBody = styled.tbody``

export const TableRowHeading = styled.tr.attrs(props => ({
  colSpan: "10",
}))`
`

export const TableDataRowHeading = styled.td.attrs(props => ({
  colSpan: "10",
}))`
  background-color: ${props => props.theme.colors.lightPurple};
  text-align: center;
  padding: 2rem;
  font-size: 1.6rem;
  display: ${props => props.sm ? "table-cell" : "none"};
`


export const TableRowGeneral = styled.tr``

export const TableDataGeneral = styled.td`
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.lightGrey};

  display: ${props => props.export ? "table-cell" : "none"};
  font-size: 1.2rem;
  text-align: center;
  display: ${props => props.sm ? "table-cell" : "none"};

  @media only screen and (min-width: 40em) {
    text-align: left;
    display: ${props => props.sm || props.md ? "table-cell" : "none"};
  }

  @media only screen and (min-width: 56.25em) {
    display: ${props => props.sm || props.md || props.lg ? "table-cell" : "none"};
  }
`

export const TableDataDescription = styled.td`
  padding: 1rem;
  max-width: 70rem;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  font-size: 1.2rem;
  display: ${props => props.sm ? "table-cell" : "none"};

  @media only screen and (min-width: 40em) {
    display: ${props => props.sm || props.md ? "table-cell" : "none"};
  }

  @media only screen and (min-width: 56.25em) {
    display: ${props => props.sm || props.md || props.lg ? "table-cell" : "none"};
  }
`

export const NoTableDataContainer = styled.section`
  width: 100%;
  height: auto;
  margin: 10rem 0;
  display: flex;
  justify-content: center;
`

export const NoTableDataContent = styled.div`
  text-align: center;
  max-width: 40rem;
`

export const NoTableDataTitle = styled.h1`
  font-size: 4rem;
`

export const NoTableDataSubtitle = styled.p`
  font-size: 2.2rem;
`

