const download = (name, file) => {
  let element = document.createElement('a')
  element.setAttribute('href', file)
  element.setAttribute('download', name)

  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}


export const downloadTable = (table, filename) => {
  let heading = '<thead>'
  let body = '</tbody>'
  // access table.
  for (let t = 0; t < table.length; t++) { // Loop through table.
    const tableChildren = table[t].childNodes;

    for (let r = 0; r < tableChildren.length; r++) { // Loop through sections in the table
      const rowChildren = tableChildren[r].childNodes
      
      for (let d = 0; d < rowChildren.length; d++) { // loop through rows in the section.
        const rowData = rowChildren[d]

        if (rowData.dataset.exportStyle === 'heading-row') { // enter table heading row.
          const colHeadings = rowData.childNodes;
          for (let ch = 0; ch < colHeadings.length; ch++) { // loop through column headings.
            heading += `<th bgcolor="#7478F5" valign="middle"><font size="3" face="arial" color="#ffffff">${colHeadings[ch].innerHTML}</font></th>`
          }
        } else {
          const rowChildren = rowData.childNodes
          body += '<tr height="300">'

          for (let td = 0; td < rowChildren.length; td++) { // Loop through the TDs in the row.

            if (rowChildren[td].dataset.exportStyle === 'goal-section-heading') { // Goal Section Header TD
              body += `<td colspan="8" align="center" valign="middle" bgcolor="#E4E4F6"><font size="5" face="arial" color="#7478F5">${rowChildren[td].innerHTML}</font></td>`

            } else if (rowChildren[td].dataset.exportStyle === 'goal-row-data') { // General TDs
              body += `<td valign="middle" width="150"><font face="arial" size="2">${rowChildren[td].innerHTML}</font></td>`

            } else if (rowChildren[td].dataset.exportStyle === 'goal-row-data-description') { // description TD
              body += `<td valign="middle" width="600" white-space:wrap; ><font face="arial" size="2">${rowChildren[td].innerHTML}</font></td>`
            } else if (rowChildren[td].dataset.exportStyle === 'goal-row-process') { // process TD
              let processList = [];
              const ol = rowChildren[td].childNodes[0].childNodes
              let stepCount = 0;
              ol.forEach(el => {
                if (el.nodeName === 'UL') {
                  el.childNodes.forEach(ulEl => {
                    processList.push(`|--- ${ulEl.innerHTML}`)
                  })
                } else {
                  processList.push(`<br style="mso-data-placement:same-cell;" />`)
                  processList.push(`${stepCount += 1}. ${el.innerHTML}`)
                }
              })
              body += `<td width="500"><font face="arial" size="2">
                ${processList.join('<br style="mso-data-placement:same-cell;" />')}
              </font></td>`
            } 
          }
          body += '</tr>'
        }
      }
    }
    const headingFinal = heading + '</thead>'
    const bodyFinal = body + '</tbody>'
    const tableFinal = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><table table-layout="auto">' + headingFinal + bodyFinal + '</table></html>';
    const output = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' + encodeURIComponent(tableFinal)
    download(filename, output)
  }
}