const rootCaptionsClass = "K6EKFb"
const speakerClass = "TBMuR.bj4p3b"
const speakerImageClass = "KpxDtd.r6DyN"
const speakerNameClass = "zs7s8d.jxFHg"
const speakerCaptionsParentClass = "Mz6pEf.wY1pdd"
const speakerCaptionsClass = "iTTPOb.VbkSUe"

let allSpeakers = []
let speaker = {"name": null, "message":null }
let newMessage = "";
let observerCC = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation){
        if (mutation.removedNodes.length == 1){
            removedNode = mutation.removedNodes[0];
            if (removedNode.nodeName == "DIV")
            {
                allSpeakers.push(speaker);
            }
        }
        if (mutation.addedNodes.length == 1){
            let addedNode = mutation.addedNodes[0];
            if (addedNode.nodeName == "DIV"){
                console.log("Speaker Name: " + addedNode.innerText)
                speaker["name"] = addedNode.innerText.split("\n")[0];
                newMessage = "";
            }
            else if (addedNode.nodeName == "#text"){
                console.log("Added Sentence: "+ addedNode.data);
                if (newMessage == ""){
                    newMessage = addedNode.data;
                } 
                else{
                    let origIncomingText = addedNode.data.split(" ");
                    let origPrevText = newMessage.split(" ");
                    let incomingText = addedNode.data.toLowerCase();
                    incomingText = incomingText.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
                    let prevText = newMessage.toLowerCase();
                    prevText = prevText.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
                    incomingText = incomingText.split(" ");
                    prevText = prevText.split(" ");
                    prevText = prevText.filter((value)=>{
                        return value!="";
                    })
                    incomingText = incomingText.filter((value)=>{
                        return value!="";
                    })
                    origIncomingText = origIncomingText.filter((value)=>{
                        return value!="";
                    })
                    origPrevText = origPrevText.filter((value)=>{
                        return value!="";
                    })

                    let startIdx = -1;
                    let idxOffset = 0;
                    let loopLength = prevText.length;
                    if (prevText.length > incomingText.length){
                        idxOffset = prevText.length - incomingText.length;
                        loopLength = incomingText.length
                    }

                    for(let i=0; i<loopLength; i++){
                        if (incomingText[0] == prevText[idxOffset + i]){
                            startIdx = idxOffset + i
                        }
                    }

                    let incomingIdx = 0
                    if (startIdx != -1){
                        origPrevText.forEach((value, index) =>{
                            if(index >= startIdx){
                                origPrevText[index] = origIncomingText[incomingIdx]
                                incomingIdx = incomingIdx+1
                            }
                        })
                    }

                    for(let i=incomingIdx; i<incomingText.length;i++){
                        origPrevText.push(origIncomingText[i]);
                    }
                    newMessage = origPrevText.join(" ");
                }
            }
            else{
                // console.log("Node Name: " + addedNode.nodeName);
            } 
        }
    });
    speaker['message'] = newMessage;
    // console.log("Final message: ");
    console.log(allSpeakers);
});

let observerMain = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation){
        console.log("ohohoshd");
        if (mutation.target === document.querySelector("."+rootCaptionsClass)){
            observerCC.observe(document.querySelector("."+rootCaptionsClass), {attribute:false, subtree:true, attributeOldValue:false, characterDataOldValue:false, childList:true, characterData:false});
            observerMain.disconnect()    
        }
    });
});

observerMain.observe(document.documentElement, {attribute:true, subtree:true, attributeOldValue:true, characterDataOldValue:true, childList:true, characterData:true});
