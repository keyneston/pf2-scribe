#! /usr/bin/env node
const showdown = require('showdown')
const scribe = require("./scribe.js")

var entry = new scribe.Entry('', 'test123', body='# Hello World ((Title))\n\n How are you?')
console.log(entry)

console.log(scribe.Entry)



//let desc = pages.join('\n')
//  .replace(/^head.*/gmi, '')
//  .replace(/^\).*/gmi, '')
//  .replace(/^\w+ *\([\s\S]+?\n\)/gmi, '')
//
//console.log("Pre shodown: ", desc)
//
//desc = showdown.makeHtml(desc)
//  .replace(/<.*?>/gmi, '')
//  .trim()
//  .substr(0, 160)
//  .split(/\n\n/)[0]
//  .trim();
//
//console.log(desc)
