function cutAndReverse(string) {

    console.log(string.slice(0 , string.length / 2).split("").reverse().join(""));
    console.log(string.slice(string.length / 2).split("").reverse().join(""));

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')