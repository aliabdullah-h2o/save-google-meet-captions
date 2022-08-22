const rootCaptionsClass = "K6EKFb"
const speakerClass = "TBMuR.bj4p3b"
const speakerImageClass = "KpxDtd.r6DyN"
const speakerNameClass = "zs7s8d.jxFHg"
const speakerCaptionsParentClass = "Mz6pEf.wY1pdd"
const speakerCaptionsClass = "iTTPOb.VbkSUe"



var observerCC = new MutationObserver(function (mutations) {
    let c = 0;
    mutations.forEach(function (mutation){
        console.log(c);
        c = c+1;

    });
});

var observerMain = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation){
        console.log("ohohoshd");
        if (mutation.target === document.querySelector("."+rootCaptionsClass)){
            observerCC.observe(document.querySelector("."+rootCaptionsClass), {attribute:false, subtree:true, attributeOldValue:false, characterDataOldValue:false, childList:true, characterData:false});
            observerMain.disconnect()    
        }
    });
});

observerMain.observe(document.documentElement, {attribute:true, subtree:true, attributeOldValue:true, characterDataOldValue:true, childList:true, characterData:true});
