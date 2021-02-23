import { GoogleSpreadsheet } from 'google-spreadsheet';

export const appendSpreadsheet = async (row) => {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet('1wmCfd5wgrmfgmAmOzK5A-D_lNnHAHW4TeHizga_49Go');
  
  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  console.log(process.env.REACT_APP_CLIENT_EMAIL, process.env.REACT_APP_PRIVATE_KEY)
  
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_CLIENT_EMAIL,
    private_key: process.env.REACT_APP_PRIVATE_KEY,
  });
  
  await doc.loadInfo(); // loads document properties and worksheets
  
  const sheet = doc.sheetsByTitle['Responses']; // or use doc.sheetsByIndex[0];  doc.sheetsById[id] or doc.sheetsByTitle[title]
  const result = await sheet.addRow(row);
}