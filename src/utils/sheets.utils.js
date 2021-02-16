import { GoogleSpreadsheet } from 'google-spreadsheet';

export const appendSpreadsheet = async (row) => {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet('12SRp8qJ8yW5osce4kfWs8puhA7MSUHHmPn6QXsTjMv8');
  
  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await doc.useServiceAccountAuth({
    client_email: 'stp-action-planner@stp-action-planner.iam.gserviceaccount.com',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8G2OeoBFi34Lm\nnVHNMEhk7Nr+YWvTUcn76knuzVlv/X/JUUv/MeTXYg7upMyJAr3oqhJHOo9rLVki\njTU3q3oyuUPhgUYTjyvU1evxu0QhI3ie2zfSQ2LC6kdXveACGyKeohWD5WJ1zlk0\n2hFXJ+gldaZ0GFW1CIAcnhPEK63zdwp29sSPNMbpYQ/sOlZQ+GMsKIiU1k8BVxJS\ndDtssZ8oaKn6DzgBgz1ZSESnKo4mA76gpQXFcVVUnoBnmeiCVvFPcTlFfH9BWGlK\nJ0MhrVDxuppGtgQmzWzAQv94p7jPA/4Bb7KZEvZMyhOknoovnwUfPTWhSgVXTFau\nGSN8VCOVAgMBAAECggEAAJ36Yq/VvsRK8qS7evfYlPQt972sE+JlzjzDh1QHIhXr\n0GZC4JByVr6Mm/3QafanVtcP/knT5J8edr2N2iPm37m53kiFSVUj6KvW/VEG9TDf\nmW3QrhDohwkruL73uCoMoAaaGXesLgTCSCka+3U3DsBnDmRyC4j+mpluKSuXg3/0\nCDFpItgv5NlfACQh/+2FgTE3qsg+zvBrIoTqVzStUg0oCDNNvun1ETTEPeLWEnEU\nMGDT3a3MHFi5NUV8GiQnOVfm6ieWkWkLfJWLYI0t9QT9RC74cz1ofAuzvWZtXXIo\n/Cq2GraN3YPRRZFZIT8M7bbXTvHCXDQs18OtGweBAQKBgQDsnIk1TpzQ0v9UoZI/\nw+7dYtZaQZtXyPgIWUL2NarOWH+axgwCzcSL6TWn3U+dFt0SodC4dVWRLyINZqPK\nokf+KV679pNAc7CKVJDHgnYcAwMkW7wt7jLppSy8/WbOT4oI+NNegzYeAvWmZPUH\nA53PNuifNpgyx0camBlf+jfB1QKBgQDLhVx/eCvrU/uCuAq/jsxINgFhhojZO6xY\nojYzNdCbjdqr81Cq0nYVQwYsFfeRePGHuvCWiHjkH7rlURqVY+v8FUCelJBF8wc/\n2PlbW9+uJY1yI9ju+apRvy5UOGAnX+SbV47oas8O+m5H4NvhuErTXBo3ap030N8T\nrJmEwH36wQKBgBLcR3OgWI+swf2VA3thuuCayEtZf3B37I190ACgNoVMOJ+1ua9f\nh5M/e69tzLLQ575cd668a52vDB/VVqkIVoTD93E0LniswB3Gr+O3WoLRGqcDSPTA\nT/6f0/kcmd1IKdCdRPv7qYyq37nrwjxU5XdnARPv3iHuEJTmGt+zqk4hAoGBALkX\n4abgUPkmGQCqhsPuh+VIkHr00vLWLYkyhZ6PW9iM64oksIGbBN+TZEKl+9DmsKtj\nnbkaBvBZ1y0FVOr2xEEvxuQycv/a5gXwO+AVr1l/N6PN7FZy466S8/yOhQxqTsvk\nlsjTktqpcbCXVQJ1DEArbIBnyvJfWPJYsAom0qxBAoGBAKoz0Cu12oHsfwXJXbjx\nryuRhPqRYvPMKNAClnN77kZfq7Kv2Ge8nB8eC65ns2uuxH2b7Aa6z34od1b9ojCH\nOLIcmtuT1LqC/Q983Ov6pGKwMw7pq0t7EAHDfXxvSG3A/s8Z/rIU3GxmnMk8quD9\nkNsdx899Scwq9HGGJiHPVce8\n-----END PRIVATE KEY-----\n',
  });
  
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  await doc.updateProperties({ title: 'renamed doc' });
  
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const result = await sheet.addRow(row);
}

export const createNewSheet = async (planner) => {
  
}