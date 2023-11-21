function reverseString(string) {

   let splitString = string.split("");
   let reversedString = splitString.reverse();
   let joinReverseString = reversedString.join("");

    console.log(joinReverseString);

}
reverseString("hello")