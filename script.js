
$( document ).ready(function() {
var formatdate= moment().format("dddd, MMMM Do YYYY, h:mm:ss a");


  $("#date").text(formatdate)
  var row = ""
  
    for (var i= 1 ; i<=24; i++){
    
      row = $('<div class="row">')
      col1 = $(`<div class ="col-lg-2 hr">${AmPmshow(i)}</div>`)
      col2 = $(`<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`)
      col3 = $(`<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-info"><i class="bi bi-plus-circle"></i> ADD NOTE</button></div>`)
      row.append(col1)
      row.append(col2)
      row.append(col3)    
      $('#planner').append(row)
      getlocalStorage(i)
    }
   $("button.btn.btn-info").click(function(){
   var input = $(this).data("id")
   var inputText = $(this).parent().siblings().find("input").val()
   localStorage.setItem(input,inputText)
   })
 
   function AmPmshow(hr){
     var ampm=""
     if(hr<=12){
       ampm= "AM";
     }else{
       ampm="PM";
     }
     hr = hr % 12;
     hr = hr ? hr : 12;
     return hr + "-" + ampm;
   }
  });

   function getlocalStorage(hr2){
     let inputval = localStorage.getItem(hr2)
     if(true){
      
      var text= $(`input#inputText${hr2}`).val(inputval)
      console.log(text)
     }
   }
  
   function Colorchange(){
     var hourtime = new Date().getHours();
     for (var i= 1 ; i<=24; i++){
       console.log(hourtime,i)
       if(hourtime==i ) {
        $(`#inputText${i}`).css("background","purple")
       }else  if(hourtime<i ){
        
         $(`#inputText${i}`).css("background","#009B93")

       }
     }
   }
   setInterval(function(){
     Colorchange()
   },1000)