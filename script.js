var displayPanel=document.querySelector('.displayPanel');
var accounts=document.querySelector('.accountDetails');
var users=document.querySelector('.userDetails');






const sendHTTPRequest= (method,url,data)=>{
    const promise= new Promise((resolve,reject) => {
        const xhr= new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType='json';
    xhr.setRequestHeader('X-APTRINSIC-API-KEY','6234ac6d-ed3b-41c9-9343-88eb319b0e30');
    xhr.setRequestHeader('Connection','keep-alive');
    xhr.setRequestHeader('Accept','*/*');
    xhr.setRequestHeader('Accept-Encoding','gzip, deflate, br');


        xhr.onload= () =>{
            resolve(xhr.response);
        }
        xhr.send();
    });
    return promise;
};

const getAccountData= ()=>{
    sendHTTPRequest('GET','https://api.aptrinsic.com/v1/accounts').then(responseData =>{
       
        accounts=responseData;
        accounts.accounts.forEach(element => {
           displayData(element);
        });
    })
};

const getUserdata=()=>{
    sendHTTPRequest('GET','https://api.aptrinsic.com/v1/users').then(responseData=>{
        users=responseData;
users.users.forEach(element=>{
    console.log(element.firstName);
    let para = document.createElement("li");
    let node = document.createTextNode(element.firstName);
    para.appendChild(node);
    if(element.firstName!="")
    displayPanel.appendChild(para);
})
    })
}

const displayData=(element)=>{
    console.log(element.name);
    // accntDisplay.innerHTML=element.name;
     let para = document.createElement("li");
let node = document.createTextNode(element.name);
para.appendChild(node);
if(element.name!="")
displayPanel.appendChild(para);
 

}



accounts.addEventListener('click',getAccountData);
users.addEventListener('click',getUserdata);