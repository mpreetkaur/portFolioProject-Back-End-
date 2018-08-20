$("#btnMath").click(function () {
    var num1 = Number($("#in1").val());
    var num2 = Number($("#in2").val());
    var num3 = Number($("#in3").val());
    var num4 = Number($("#in4").val());
    var num5 = Number($("#in5").val());
    var sum = num1 + num2 + num3 + num4 + num5;
    var product = num1 * num2 * num3 * num4 * num5;
    var average = (num1 + num2 + num3 + num4 + num5) / 5;
    var largest = (Math.max(num1, num2, num3, num4, num5));
    var smallest = (Math.min(num1, num2, num3, num4, num5));

    $("#sum").text("The sum is: " + sum);
    $("#product").text("The product is: " + product);
    $("#average").text("The average is: " + average);
    $("#largest").text("The largest number is : " + largest);
    $("#smallest").text("The smallest number is: " + smallest);
    $("#in1").val("");
    $("#in2").val("");
    $("#in3").val("");
    $("#in4").val("");
    $("#in5").val("");
})
$("#codeMath").hide();
$("#btnCodeMath").click(function () {
    $("#codeMath").toggle();
})

$("#findPalindrome").click(function () {
    var plWord = $("#word").val();
    var checkPalindrome = plWord.split('').reverse().join('');

    if (plWord === checkPalindrome && plWord !== "") {
        $("#result").text('The word is palindrome.');
    } else if (plWord !== "" && plWord !== checkPalindrome){
        $("#result").text('The word is not palindrome!');
    }
})
$("#plndrm").hide();
$("#btnPlndrm").click(function () {
    $("#plndrm").toggle();
})

$("#findFactrl").click(function () {
    var numValue = $("#num").val();
    initValue = 1;
    for (i = numValue; i > 0; i--) {
        initValue *= i
    }
    $("#factor").text("The factorial of " + numValue + " is " + initValue);

})
$("#fctrlCode").hide();
$("#btnFctrl").click(function () {
    $("#fctrlCode").toggle();
})

$("#calculate").click(function () {
    var start = $("#num1").val();
    var finish = $("#num2").val();
    $("#fizBuz").text(" ");

    for (i = 1; i <= 100; i++) {
        if (i % start === 0 && i % finish === 0) {
            $("#fizBuz").append(" FizzBuzz, ");

        }
        else if (i % start === 0) {
            $("#fizBuz").append(" Fizz, ");
        }
        else if (i % finish === 0) {
            $("#fizBuz").append(" Buzz, ");
        } else {
            $("#fizBuz").append(" " + i + ",")
        }
    }
    var str = $("#fizBuz").text();
    str = str.substring(0, str.length - 2);
    $("#fizBuz").text(str)

})
$("#fizBuzCode").hide();
$("#btnFizBuz").click(function () {
    $("#fizBuzCode").toggle();
})


