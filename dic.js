const input=document.querySelector('input');
const button=document.querySelector('button');
const result=document.querySelector('.result');


button.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(input.value);
    getdata(input.value);
});

 const getdata=async(word)=>{
    const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data=await response.json();
    console.log(data);

    result.innerHTML=`
    <h2><strong>Word :</strong>${data[0].word}</h2>
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p><strong>Meaning : </strong>${data[0].meanings[0].definitions[0].definition}</p>
    <p><strong>Example : </strong>${data[0].meanings[0].definitions[0].example}</p>
    <p><strong>Antonyms : </strong></p>
    `;

    
    if(data[0].meanings[0].definitions[0].antonyms.length===0){
    result.innerHTML+=`<span>Not found</span>`}
    else{
        for(let i=0;i<data[0].meanings[0].definitions[0].antonyms.length;i++)
        {
            result.innerHTML+=`<li>${data[0].meanings[0].definitions[0].antonyms[i]}</li>`
        }
    }


 }