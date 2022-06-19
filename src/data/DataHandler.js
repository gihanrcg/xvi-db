import GSheetReader from 'g-sheets-api';


export const options = {
    apiKey: 'AIzaSyAMBLguUDxc5TACm9MIycuwmYun9er9lK4',
    sheetId: '1LvJjlD3djDUCo9iKDooQ7nhVPDq21A7QgXyBQt9xpuo',
    sheetNumber: 1,
    sheetName: 'Form Responses 1', // if sheetName is supplied, this will take precedence over sheetNumber
    returnAllResults: true,
}

export const readGoogleSheet = () => {
    return new Promise((resolve, reject) => {
        GSheetReader(options, results => {
            resolve(results);
        }, err => {
            reject(err);
        });
    })
} 

// export const readData = async () => {
//     const result = await readGoogleSheet();
//     return result;
// }



