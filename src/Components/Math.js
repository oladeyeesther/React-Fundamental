// Module
// A single or multiple functions, that can be exported and imported when needed, can be included in a project. 
// In react we do not use link to access modules or packages, instead we import modules. let's see how to import and export a module or modules:


export const addTwo = (a,b) => a + b
export const multiply = (a,b) => a * b
export const subtract = (a,b) => a - b

export default (function doSomeMath() {
    return {
        addTwo,
        multiply,
        subtract,

    }
}) ()

// asteric is a global selector
