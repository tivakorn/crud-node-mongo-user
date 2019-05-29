const json = {
    "string": "hello",
    "number": 1,
    "object": {
        "nested_string": "nested_hello",
        "nested_number": 2,
        "nested_object": {

        },
        "nested_array": ["hello"]
    },
    "array": ["hello"],
    "func": () => { return "result" }
}

const { string, object : { nested_string}, func } = json

console.log(func())

const values = [1,2,3,4,5,6,7,8,9,10]

const user = {
    name: "pleum"
}

const readName = ({name}) => {
    console.log(name)
}

readName(user)