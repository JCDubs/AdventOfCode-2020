import {readFileSync} from 'fs'
import path from 'path'

const content: string = readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8')
const values = content.split(/\n/)
.map((line:string) => {
    const spliValues:Array<string> = line.split(/(\d{1,2})-(\d{1,2}) ([A-z]+): (.*)/gm).filter(value => value)
    if (spliValues.length === 4) {
        const password: string = spliValues[3]
        const char: string = spliValues[2]
        const numOfMatchingChars: number = [password[parseInt(spliValues[0]) - 1], password[parseInt(spliValues[1]) - 1]]
        .filter(charAtIndex => charAtIndex === char).length
        
        if (numOfMatchingChars === 1) {
            return password
        }
    }
}).filter(val => val)

console.log(`${values.length} password are valid.`)
