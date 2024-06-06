// // sum.test.js
// import { expect, it, describe, test} from 'vitest'
// import {sum, makefullname, isPassed} from './function.ts'

// describe.skip(sum.name, () => {
//     test('adds 2 + 2 to equal 4', () =>{
//         const total = sum(2,2);
//         expect(total).toBe(4)
//     })
// })

// const firstname = "John"
// const lastname = "Doe"

// describe.skip(makefullname.name, () => {
//     it('should return the fullname', ()=>{
//         const fullname = makefullname(firstname, lastname);
        
//         expect(fullname).toBe("John Doe");
//     })

//     it('invalid Input', ()=>{
//         const fullname = makefullname(lastname, firstname);
        
//         expect(fullname).toBe("Doe John");
//     })

//     it('empty', ()=>{
//         const fullname = makefullname("", "");
        
//         expect(fullname).toBe(" ");
//     })
// })

// describe.skip("Passing", ()=> {
//     it("it should return true if the grade is in the passing grade", ()=>{
//         const isPassedResult = isPassed(80, false)
        
//         expect (isPassedResult).toBe(true)
//     })

//     it("it should return true if the student is exempted", ()=>{
//         const isPassedResult = isPassed(0, true)
        
//         expect (isPassedResult).toBe(true)
//     })

//     it("should return false if the grade is below the passing grade", ()=>{
//         const isPassedResult = isPassed(79, false)
        
//         expect (isPassedResult).toBe(false)
//     })

//     it("should return false if the input is empty", ()=>{
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         //@ts-ignore
//         const isPassedResult = isPassed()
        
//         expect (isPassedResult).toBe(false)
//     })
// })

