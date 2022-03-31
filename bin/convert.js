#! /usr/bin/env node
console.log(process.env)


const showdown = require('showdown')
const scribe = require("./scribe.js")

pages = ["# Hello World"]

let desc = pages.join('\n')
  .replace(/^head.*/gmi, '')
  .replace(/^\).*/gmi, '')
  .replace(/^\w+ *\([\s\S]+?\n\)/gmi, '')

desc = showdown.makeHtml(desc)
  .replace(/<.*?>/gmi, '')
  .trim()
  .substr(0, 160)
  .split(/\n\n/)[0]
  .trim();

console.log(desc)
