function solve() {

    | // pipe or  е равно на или 
    . // всеки символ освен новите редове 
    ^ // началото на стринга
    $ // края на стринга
    [] // може да пишем диапазони и да изреждаме елементите вътре
    \ //ескейпва специални символи

    \w // хваща малки букви/ големи букви/ числата от 0 до 9/ и _ долна черата 
    \W // хваща всички обратни символи обратни на \w
    \s // хваща всички празни места white-space character
    \S // хваща обратното на \s
    \d // хваща цифри от 0 до 9
    \D // хваща всичко обратно на цифрите демек обратно на \d
    \b // пример \babc търси думата abc разграничена от празни места, запетайки и др. 
    \B // обратното на \b

    ^def //начало на стринга
    def$ //край на стринга
    [aAb]  // търси всеки един от изброените чарактери
    [a-z] // търси в диапазона от малко а до малко z 
    [а-з] // може да търси и кирилица
    [A-Z] // търси в диапазона A до Z
    [A-Za-z] // търси в диапазона всички малки и всички големи букви
    [A-Zaz-] // търси всички големи букви от A до Z и търси чарактерите a,z,- всеки по отделно 
    [^as] // обръща търсенето търси всичко което не е a или s
    [as.] //търси чарактерите и символите
    [0-9] // хваща цифрите от 0 до 9 
    [aA][bB][cC] // търси изборените букви малки и голями
    abc* // търсиза  символа от звездата на ляво да е от 0 пъти или повече повече
    abc? // търси един или нула пъти
    abc*? // става лейзи 
    abc?? // хвани 0 пъти
    abc+ // хваща 1 или повече пъти
    abc{2} //хваща токена преди него точно 2 пъти 
    abc{2,} // хваща минимум 2 пъти или повече пъти
    abc{2,4} // хваща 2 пъти и до 4 пъти
    [a-z]+ //хваща множеството от символите
    [a-z]*\.?[a-z]+\.bg // примерно хваща по 2 параметъра:  admin.softuni.bg или softuni.bg
    (dsh) // група от елементи
    (dsh)* //търси в групата от елементи само първото
    let regex = /[a-z][A-z]/g; - //препоръчителен начин
    let regex2 = new RegExp() - // не е препоръчителен начин

    let result = text.match(regex)
    let result2 = text.split(regex)
    let result3 = text.replace(regex "0")

    



   
   








}
solve()