#! /usr/bin/env node
'use strict';

const puppeteer = require('puppeteer');
const { ArgumentParser } = require('argparse');
const { version } = require('../package.json');
const fs = require('fs')
 
const parser = new ArgumentParser({
  description: 'Argparse example'
});
 
parser.add_argument('-i', '--input', { help: 'name of input file', default: "" });
parser.add_argument('-o', '--output', { help: 'name of output file', default: "" });
parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('-d', '--debug', { action: 'store_true' });
 
let args = parser.parse_args();
let debug = args.debug;
let inputFile = args.input;
let outputFile = args.output;

if (inputFile == "") {
  console.error("Must set --input")
  process.exit(-1)
}

if (outputFile== "") {
  console.error("Must set --output")
  process.exit(-1)
}

var fileContent = ''

try {
  fileContent = fs.readFileSync(inputFile, 'utf8')
} catch(err) {
    console.error(err)
    process.exit(-1)
}

if (debug) {
  console.log("Got input: ")
  console.log(fileContent)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

;(async () => {
  const browser = await puppeteer.launch({ headless: !debug });
  const page = await browser.newPage();

  await page.setViewport({
    width: 1600,
    height: 1080,
    deviceScaleFactor: 1,
  });

  await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './output/'});
  await page.goto('https://scribe.pf2.tools');
  await page.waitForResponse(response => response.ok())
  

  await page.evaluate(content => {
    vm.editor.setValue(content)
  }, fileContent);

	await sleep(500);

  let result = await page.evaluate(_ =>
    // vm.html(vm.editor.getValue())
		vm.getHtml()
  )

	// try {
	// 	fs.writeFileSync(outputFile, result)
	// } catch (err) {
	// 	console.error(err)
	// 	process.exit(-1)
	// }
  
  if (debug) {
    await sleep(3000000)
  }

  await browser.close();
})();
