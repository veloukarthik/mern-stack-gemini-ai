let text = "Try programiz.pro";
let vowels = ["a","e","i","o","u"]
let text1="";
for(let i=0;i<text.length;i++)
{
    if(vowels.indexOf(text[i]) == -1)
    {
        text1 += text[i];
    }
}

console.log(text1);