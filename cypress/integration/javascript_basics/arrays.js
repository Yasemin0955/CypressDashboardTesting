let tools=['selenium', 'cypress', 'wdio', 'uft', 'protoctor'];
const string=tools.toString();
console.log(string);
const join=tools.join(' * ');
console.log(join);
console.log(tools);

//pop method removes the last element in an array
const pop=tools.pop();
console.log(tools);
console.log(pop);

//push method adds an element at the last index
const push=tools.push('webshare');
console.log(tools);

//sort method sort the array alphabetically
const sort=tools.sort();
console.log(tools);

//reverse method reverse the elements
const reverse=tools.reverse();
console.log(tools);

const shift=tools.shift();
console.log(tools);

const unshift=tools.unshift('selenium');
console,log(tools);

tools.forEach((value)=>{
    if(value=='cypress'){
        console.log('Cypress is trending');
    }else{
        console.log('Element not found');
    }
})
