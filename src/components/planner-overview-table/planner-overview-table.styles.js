import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #e7e7e7
`

export const TableHeadingContainer = styled.thead`
  background: #e7e7e7;
`

export const TableHeadingItem = styled.th`
  display: ${props => props.export ? "table-cell" : "none"};
`

export const TableBody = styled.tbody``

export const TableRowHeading = styled.tr.attrs(props => ({
  colSpan: "10",
}))`
  background-color: green;
  text-align: center;
  padding: 2rem;
`

export const TableDataRowHeading = styled.td.attrs(props => ({
  colSpan: "10",
}))`
  background-color: #e7e7e7;
  text-align: center;
  padding: 2rem;
  border: 1px solid #e7e7e7;
`


export const TableRowGeneral = styled.tr``

export const TableDataGeneral = styled.td`
  padding: 1rem;
  border: 1px solid #e7e7e7;

  display: ${props => props.export ? "table-cell" : "none"};
`

export const TableDataDescription = styled.td`
  padding: 1rem;
  max-width: 30rem;
  border: 1px solid #e7e7e7;
`

