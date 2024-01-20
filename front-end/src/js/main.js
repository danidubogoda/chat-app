const btnSendElm = document.querySelector('#btn-send');
const txtMsgElm = document.querySelector('#txt-message');
const outputElm = document.querySelector('#output');

btnSendElm.addEventListener('click', ()=>{
const message = txtMsgElm.value.trim();
if(!message) return;

const msgObj = {
    message,
};

addChatMessageRecord(msgObj);
txtMsgElm.value = "";
txtMsgElm.focus();
});


function addChatMessageRecord({message}){
    const messageElm = document.createElement('div');
    messageElm.classList.add('message');
    outputElm.append(messageElm);
    messageElm.innerText = message;
}