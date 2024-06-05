export function sum (a: number, b : number) {
    return a + b
}

export function makefullname(first: string, second: string) {
    return `${first} ${second}`
}

export function isPassed(grade: number, isExempted: boolean){
    if(isExempted) return true;
    if(grade >= 80) return true
    return false
}