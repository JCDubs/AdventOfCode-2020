import {readFileSync} from 'fs'
import path from 'path'

const content: string = readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8')
const positionsRight: number = 3;
let currentPosition: number = 0;
let numberOfTrees: number = 0;

content.split(/\n/)
.forEach((line:string, idx: number) => {
    if (idx > 0) {
        let treeLine:string = line;
        currentPosition += positionsRight;
    
        while (currentPosition + 1 >= (treeLine.length -1) + positionsRight) {
            treeLine += treeLine
        }

        if (treeLine[currentPosition] === '#') {
            numberOfTrees++
        }
    }
})

console.log(`Will hit ${numberOfTrees} trees`)
