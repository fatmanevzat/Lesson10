var haystack_1 = ['3', '123124234', undefined, 'needle', NaN, 'world', "nee", 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'nedle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

function findNeedle(arr) {
    let ifFind = arr.find((item) => item === "needle");
    let indexNum = arr.findIndex((item)=> item === "needle")
    console.log(indexNum)

    console.log(`Bu array 'de ${ifFind} var.index numarasi ${indexNum}'tür`)
}
findNeedle(haystack_1)


function findNee( arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "string"){
        //console.log(arr[i])
        if(arr[i].includes(value)){
            return (`Bu array'de ${value} var.index numarasi ${i}'dir`)
        } else {
            return "yoktur";
        }
    }
}
console.log(ifFind)
}
console.log(findNee(haystack_3, "wor"))



function filterword( arr, value) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "string"){
        //console.log(arr[i])
        if(arr[i].includes(value)){
            result.push()
            return (`Bu array'de ${value} var.index numarasi ${i}'dir`)
        }
    }
}
return result;
}
console.log(filterword(haystack_1, "hay"))



