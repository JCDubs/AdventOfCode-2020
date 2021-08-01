import {readFileSync} from 'fs'
import path from 'path'

const content: string = readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8')
const values = content.split(/\n/)
.map((line:string) => {
    const spliValues:Array<string> = line.split(/(\d{1,2})-(\d{1,2}) ([A-z]+): (.*)/gm).filter(value => value)
    if (spliValues.length === 4) {
        const regex: RegExp = new RegExp(`${spliValues[2]}`, 'gi')
        const charCount: number = (line.match(regex) || []).length -1
        if (charCount >= parseInt(spliValues[0]) && charCount <= parseInt(spliValues[1])) {
            return spliValues[3]
        }
    }
}).filter(val => val)

console.log(`${values.length} password are valid.`)
