let input=document.querySelectorAll('textarea')[0];
let characterCount=document.getElementById("charCount");
let wordCount=document.getElementById("wordCount");

input.addEventListener('keyup', function(){
characterCount.innerHTML = input.value.length;

let words = input.value.match(/\b[-?(\w+)?]+\b/gi);

if(words){
  wordCount.innerHTML=words.length;
}
else{
 wordCount.innerHTML =0;
}

} );

