// Function to download a file using fetch and save it with a specified filename
const fs = require("fs");
const request = require("request-promise-native");

async function downloadPDF(pdfURL, outputFilename) {
    let pdfBuffer = await request.get({uri: pdfURL, encoding: null});
    console.log("Writing downloaded PDF file to " + outputFilename + "...");
    fs.writeFileSync(outputFilename, pdfBuffer);
}


// Array of URLs for the PDFs you want to download
const pdfUrls = [
]

  


function getAfterProduction(inputString) {
  const regex = /production\/(.+)/;
  const match = inputString.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null; // If the keyword is not found in the input string
  }
}
// Function to download all the PDFs from the array of URLs
async function downloadPDFs() {
  for (let i = 0; i < pdfUrls.length; i++) {
    const url = pdfUrls[i];
    const filename = getAfterProduction(url); // Customize the filename if needed
    await downloadPDF(url, filename);
  }
}

// Call the function to start downloading PDFs
downloadPDFs();