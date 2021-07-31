import {readFileSync} from 'fs'
import path from 'path'

const content: string = readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8')
const output: Array<number> = content.split(/\n/).map((val: string) => parseInt(val))

output.forEach((valOne: number) => {
    output.forEach((valTwo: number) => {
        output.forEach((valThree: number) => {
            if ((valOne + valTwo + valThree) === 2020) {
                console.log(`${valOne} + ${valTwo} + ${valThree} = ${(valOne + valTwo + valThree)}`)
                console.log(`${valOne} * ${valTwo} * ${valTwo} = ${(valOne * valTwo * valThree)}`)
                process.exit(0)
            }
        })
    })
})
