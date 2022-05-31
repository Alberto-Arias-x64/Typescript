type operations = 'multply' | 'add' | 'divide'

const multiplicator = (a: number, b: number, op: operations): Array<number> => {
    if (op === 'multply') return [a * b]
    if (op === 'add') return [a + b]
    if (op === 'divide') {
        if (b === 0) throw new Error("Can't divide to 0")
        return [a / b]
    }
    throw new Error("Op is not valid");
    
}
const a:number = Number(process.argv[2])

console.log(multiplicator(5, 2, 'divide')[0])
console.log(a)