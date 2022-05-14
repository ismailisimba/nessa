const submitButt = document.getElementById("submit");
addEveListeners();

function addEveListeners(){
    submitButt.addEventListener("click",sendEmails,true);
}


function readForm(data){
    const myobj = data;
    myobj.params[0].dataObj.name = document.getElementById("name").value;
    myobj.params[0].dataObj.email = document.getElementById("email").value;
    myobj.params[0].dataObj.subject = document.getElementById("subject").value;
    myobj.params[0].dataObj.message = document.getElementById("message").value;

    const validateEmail = ()=>{
        return String(myobj.params[0].dataObj.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      console.log(validateEmail());
    return myobj;
}


function myLog(val){
  alert("Your Email Has Been Sent!");
  window.location.reload();
}



async function sendEmails (){
const reqString = "https://script.google.com/macros/s/AKfycbw39czh1LjMDSNlVJjUueIwwLMSfzfyBMrzmEPaPeqXfs3UzCDdKSDqtFds7fhA_IPQ/exec?paraOne=nessacomoestas";
var data = {
    "params": [
        {
            "initVal": "initKey",
            "action": "login",
            "token": "letMeIn",
            "dataObj": {"name":"Kil",
                        "email":"Roy",
                        "message":"WasHere!",
                    "subject":"Vibes n Inshallah!"}
        }
    ]
}
 data = readForm(data);




data = JSON.stringify(data);
    

  var myRequest = new Request(reqString);
  

       
  const returnVal = await fetch(myRequest, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      //'Content-Type': 'text/txt'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: data // body data type must match "Content-Type" header
  })
        .then(function(response) {
          if (!response.ok) {
            
            throw new Error("HTTP error, status = " + response.status);
            
          }
          
          return response.text();
        })
        .then(function(myBlob) {
          
          var cloudObject = JSON.parse(myBlob);
          
          myLog(cloudObject);
          return cloudObject;
          
        })
        .catch(function(error) {
          console.log(error.message);
        });

        
       // document.querySelectorAll(".mycolumns")[1].innerHTML = returnVal;
        return returnVal; 

    // tempDiv.innerHTML = Object.entries(localVar.values)[0][1][3] ;  
}