export const downloadTable = (table) => {
  let heading = '<thead>'
  let body = '</tbody>'
  // access table.
  for (let t = 0; t < table.length; t++) { // Loop through table.
    const tableChildren = table[t].childNodes;

    for (let r = 0; r < tableChildren.length; r++) { // Loop through sections in the table
      const rowChildren = tableChildren[r].childNodes
      
      for (let d = 0; d < rowChildren.length; d++) { // loop through rows in the section.
        const rowData = rowChildren[d]

        if (rowData.dataset.exportStyle === 'heading') { // Get table headings.
          heading += `<th bgcolor="#62af23">${rowData.innerHTML}</th>`

        } else {
          const rowChildren = rowData.childNodes
          body += '<tr height="300">'

          for (let td = 0; td < rowChildren.length; td++) { // Loop through the TDs in the row.

            if (rowChildren[td].dataset.exportStyle === 'goal-section-heading') { // Goal Section Header TD
              body += `<td colspan="7" align="center" bgcolor="#8bf3a5"><font size="4">${rowChildren[td].innerHTML}</font></td>`

            } else if (rowChildren[td].dataset.exportStyle === 'goal-row-data') { // General TDs
              body += `<td valign="middle" width="150" height="50">${rowChildren[td].innerHTML}</td>`

            } else if (rowChildren[td].dataset.exportStyle === 'goal-row-data-description') { // description TD
              body += `<td width="300">${rowChildren[td].innerHTML}</td>`
            }
          }
          body += '</tr>'
        }
      }
    }
    const headingFinal = heading + '</thead>'
    const bodyFinal = body + '</tbody>'
    const tableFinal = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><table table-layout="auto">' + headingFinal + bodyFinal + '</table></html>';
    const output = window.open('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' + encodeURIComponent(tableFinal))
    return output
  }
}