document.addEventListener("DOMContentLoaded", function() {

    function checkDivision(number, divisor) {
        return number % divisor === 0;
    }

    function greetUser(event) {
        event.preventDefault();

        const firstName = document.getElementById("fname").value;
        const lastName = document.getElementById("lname").value;
        const startNum = parseInt(document.getElementById("start-num").value, 10);
        const endNum = parseInt(document.getElementById("end-num").value, 10);
        const firstDivisor = parseInt(document.getElementById("first-num").value, 10);
        const firstWord = document.getElementById("first-word").value;
        const secondDivisor = parseInt(document.getElementById("second-num").value, 10);
        const secondWord = document.getElementById("second-word").value;
        const thirdDivisor = parseInt(document.getElementById("third-num").value, 10);
        const thirdWord = document.getElementById("third-word").value;

        document.getElementById("greeting").textContent = `Welcome to Made By, ${firstName} ${lastName}!`;
        
        const outputDiv2 = document.getElementById("output1");
        outputDiv2.innerHTML = "";
        
        const words = {
            first: firstWord,
            second: secondWord,
            third: thirdWord,
            default: "Not divisible"
        };
        for (let i = startNum; i <= endNum; i++) {
            let fullLine = `${i}. `;
            let wordOutput = "";

            if (checkDivision(i, firstDivisor)) {
                wordOutput += words["first"];
            } 
            if (checkDivision(i, secondDivisor)) {
                if (wordOutput) {
                    wordOutput += " ";
                }
                wordOutput += words["second"];
            }
            if (checkDivision(i, thirdDivisor)) {
                if (wordOutput) {
                    wordOutput += " ";
                }
                wordOutput += words["third"];
            }

            if (!wordOutput) {
                wordOutput = words.default;
            }
            
            fullLine += wordOutput;

            outputDiv2.innerHTML += `<p>${fullLine}</p>`;
        }
    }
    
    document.getElementById("name-form"),addEventListener("submit", greetUser);

    function resetFormAndJS() {
        document.getElementById("greeting").textContent = "";
        document.getElementById("output1").innerHTML ="";
        document.getElementById("name-form").reset();
    }
    document.getElementById("resetbutton").onclick = resetFormAndJS;
});