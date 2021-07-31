import {readFileSync} from 'fs'
import path from 'path'

const content: string = readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8')
const output: Array<number> = content.split(/\n/).map((val: string) => parseInt(val))

output.forEach((val: number, idx: number) => {
    output.forEach((valToCheck: number, valIdx: number) => {
        if (valIdx !== idx && (valToCheck + val) === 2020) {
            console.log(`${val} + ${valToCheck} = ${(valToCheck + val)}`)
            console.log(`${val} * ${valToCheck} = ${(valToCheck * val)}`)
            process.exit(0)
        }
    })
})
