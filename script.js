function handlePositives(e){
    let inputString = document.getElementById("challenge1").value;
    let arrayNumbers = inputString.split(" ").map(function(item) {
        return parseInt(item);
    });
    let positives = getPositives(arrayNumbers);
    document.getElementById("output1").innerHTML = positives;
}

function getPositives(arrayNumbers) {
    return arrayNumbers.filter(function(item) {
          return item > 0;
        });
}

function handleMerge(e) {
    let inputArray1 = document.getElementById("challenge21").value;
    let inputArray2 = document.getElementById("challenge22").value;

    let array1 = inputArray1.split(" ");
    let array2 = inputArray2.split(" ");

    let merged = array1.concat(array2);
    document.getElementById("output2").innerHTML = merged;
}

function handleObjectValues(e) {
    let inputObject = document.getElementById("challenge31").value;
    let inputKey = document.getElementById("challenge32").value;

    object = JSON.parse(inputObject);
    if (inputKey in object) found = "Yes";
    else found = "No";

    document.getElementById("output3").innerHTML = found;
}