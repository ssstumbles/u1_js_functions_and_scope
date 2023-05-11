// function
// define and name
// paramaters/working conditions
//action
//call

//order we CALL PARAMETERS
function sayHelloName(name) {
    console.log (`hello ${name}`)
}
        //does not need to match fucntion order
function sayFullName (firstName, lastName, age) {
    console.log (`hello ${firstName} ${lastName}, you are ${age}!`)
}
//must match CALL order of ARGUMENT
sayFullName ('Ra', 'Rosic', 32)

const sayHi = (name) => console.log(`greetings ${name}`)

sayHi (`Ra`)

const findSum = (num1, num2) => console.log(num1 + num2)

findSum (90, 60)

const findProduct = (n1, n2, n3) => console.log(n1*n2*n3)
findProduct(1,2,3)

const calcArea = (num1,num2) => console.log(num1*num2)

calcArea(10,10)
calcArea(15,10)

//SCOPE AND BLOCK
//scope CAN:  parent to child or global to local
//scope CANNOT: child to parent or local to global NOR horizontally sibling to sibling

// BASICALLY, CANNOT GO UP THE TREE OR SIDE TO SIDE
//LOCAL OVERRIDES GLOBAL

//GLOBAL
const name1 = 'Gloria'
const color = 'yellow'

    //LOCAL
    {
        const name1 = 'Tiffany'
        const color = `orange`
        console.log (name1)
    }

    {
        console.log(name1)
        console.log(color)
    }

    console.log(name1)
    console.log(color)