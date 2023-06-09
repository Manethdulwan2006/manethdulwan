let avalabalekeywords=[
    'Android Studio Login Design',
    'Java Script Calculator',
    'web AI',
    'Lerning Management system',
];

const resultbox=document.querySelector(".resultbox");
const inputbox=document.getElementById("inputbox")
resultbox.innerHTML='';
inputbox.onkeyup=function(){
    let result=[];
    let input=inputbox.value;
   
    if (input.length>0){
        result=avalabalekeywords.filter((keyword)=>{
         return   keyword.toLowerCase().includes(input.toLowerCase())
        });
        console.log(result);
      
    }
    display (result);
    
}
function display(result){
    const content=result.map((list)=>{
        return"<li onclick=selectinput(this)>"+ list +"</li>";
    });
    resultbox.innerHTML="<ul>"+content+"</ul>";

}
 function selectinput(list){
    inputbox.value=list.innerHTML;
    resultbox.innerHTML='';

   
 }
 
 function performSearch(query) {
    return ['Result 1', 'Result 2', 'Result 3'];
  }