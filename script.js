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