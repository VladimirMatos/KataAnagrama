const { test, expect } = require("@jest/globals");
const anagram = require("../main");
var fs = require("fs")
var wordfile = fs.readFileSync("../wordlist.txt", 'UTF-8').split('\n')

const array = {
    "aops": ["soap", "paso", "sapo"], "apss": ["spas"]
}

test('null exception test',()=>{
    expect(anagram(null)).toBe('null Exception detect');
})

test('Empty input test',()=>{
    expect(anagram(" ")).toBe(' ');
})

test('int input test',()=>{
    expect(anagram(["sapo","spas","paso","soap"])).toBe(array)
})

test('int input test',()=>{
    expect(anagram(wordfile)).toBe(undefined)
})