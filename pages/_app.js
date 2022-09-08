import '../styles/globals.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

function MyApp({ Component, pageProps }) {
  // let csvToJson = require('convert-csv-to-json');

  // let fileInputName = 'csv-example.csv';
  // let fileOutputName = 'myOutputFile.json';

  // csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);

  return <Component {...pageProps} />;
}

export default MyApp;
