let adviceid = document.querySelector('#advice-id');
let advicetext = document.querySelector('#advice-txt');
let dice = document.querySelector('#dice')

getAdvice()
.then(()=>{
    console.log("Success!");
})
.catch((err)=>{
    console.log("Opps it's ERROR");
    console.log(err);
})

async function getAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice",  { cache: "no-cache" });
    const getdata = await response.json()
    adviceid.innerHTML = getdata.slip.id
    advicetext.innerHTML = '""' + getdata.slip.advice + '""'
}
getAdvice()

dice.addEventListener("click", ()=>{
    getAdvice()
})