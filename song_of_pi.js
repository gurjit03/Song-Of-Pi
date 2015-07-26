function processData(input) {
    //Enter your code here
    function checkNumber(test) {
        return test.match(/\d+/g);
    } 
    
    var inputArray = input.split('\n');
    var testCases = Number(inputArray[0]);
    var results = [];
    var PI = '31415926535897932384626433833';
    for(var i = 1; i <= testCases; i++) {    
        var test = inputArray[i].split(' ');
        var lengthOfTest = '';
        var counter = 0;
        var totalChars = 0;
        for(var j = 0; j < test.length;j++) {
            lengthOfTest += String(test[j].length);
            totalChars += Number(test[j].length);
            if(Number(test[j].length) > 9 || checkNumber(test[j]))
                break;
        }
        if(totalChars < 500 || Number(test[j].length) > 9 || checkNumber(test[j])) {
            for(var k = 0; k<lengthOfTest.length;k++) {
                if(lengthOfTest.charAt(k) == PI.charAt(k)) 
                    counter++; 
                else
                    break;
            }
            if(counter == lengthOfTest.length || counter > 15)
                results.push( "It's a pi song.") 
            else
                results.push("It's not a pi song.");
        } else {
            results.push("It's not a pi song.");
        }   
    }
    for( var i = 0; i<results.length; i++) 
       console.log(results[i]);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
