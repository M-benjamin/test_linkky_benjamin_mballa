/**=================================================
 * TEST 1
 ===================================================*/
const fs = require('fs');

//read content from my file test1.json
let test1 = fs.readFileSync('./data_input/test1.json', 'utf8');

//convert test1 into Objet
let test1Obj = JSON.parse(test1);

//put my answer in array of objet
let answerArr = test1Obj.answers;

//create an empty objet for final result
let test1Result = {
    polls: []
}

//loop into my answer 
answerArr.forEach(ans => {
    if (ans.poll_id == 1 && ans.id == 1)
        test1Result.polls.push({
            id: ans.poll_id,
            value: ans.value
        });
    if (ans.poll_id == 2 && ans.id == 3)
        test1Result.polls.push({
            id: ans.poll_id,
            value: ans.value
        });
    if (ans.poll_id == 3 && ans.id == 2)
        test1Result.polls.push({
            id: ans.poll_id,
            value: ans.value
        });

})

//convert my result into json
let test1String = JSON.stringify(test1Result);

//and save it in a file call test1_result.json in data output folder
fs.writeFileSync('./data_output/test1_result.json', test1String);


/**=================================================
 * TEST 2
 ===================================================*/
 //read content from my file test1.json
let test2 = fs.readFileSync('./data_input/test2.json', 'utf8');

//convert test1 into Objet
let test2Obj = JSON.parse(test2);

//put my answer in array of objet
let answerArr2 = test2Obj.answers;

//create my empty object for final result
let test2Result = {
    polls: []
}

//this part of code make every id uniq and delete occurance
var output = [];

answerArr2.forEach(function (value) {
    var existing = output.filter(function (v, i) {
        return v.poll_id == value.poll_id;
    });

    if (existing.length) {
        var existingIndex = output.indexOf(existing[0]);
        output[existingIndex].value = output[existingIndex].value.concat(value.value);
    } else {
        if (typeof value.value == 'string' || typeof value.value == 'boolean' || typeof value.value == 'number')
            value.value = [value.value];
        output.push(value);
    }
});


//loop into the result of my output 
output.forEach(ans => {

    if (ans.poll_id == 1 && ans.id == 1)
        test2Result.polls.push({
            id: ans.poll_id,
            value: ans.value
        });
    if (ans.poll_id == 2 && ans.id == 3)
        test2Result.polls.push({
            id: ans.poll_id,
            value: ans.value
        });
    if (ans.poll_id == 3 && ans.id == 2)
        test2Result.polls.push({
            id: ans.poll_id,
            value: ans.value
        });
})

//convert my result into json
let test2String = JSON.stringify(test2Result);

//and save it in a file call test2_result.json in data output folder
fs.writeFileSync('./data_output/test2_result.json', test2String);