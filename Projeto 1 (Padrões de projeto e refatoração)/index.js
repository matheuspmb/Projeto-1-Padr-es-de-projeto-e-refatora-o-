import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import FormaterHTMLAlt from './src/FormaterHTMLAlt.js';
import CitiesReporter from './src/CitiesReporter.js';
import AbstractFormater from './src/AbstractFormater.js';

const [cmd, script, param1] = process.argv;
const filename = './data/cidades-2.json';

const formaterStrategies = {
  'html': new FormaterHTML(),
  'txt': new FormaterTXT(),
  'html-alt': new FormaterHTMLAlt()
};

if (!formaterStrategies[param1]) {
  console.error('Formato não suportado. Use "html", "txt" ou "html-alt".');
  process.exit(1);
}

let reporter = new CitiesReporter({
  formaterStrategy: formaterStrategies[param1]
}),
output = reporter.report(filename);

console.log(output);
