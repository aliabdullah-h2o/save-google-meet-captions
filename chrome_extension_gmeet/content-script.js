var observerCC = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation){
        console.log(mutation.target.outerText);
    });
});

var observerMain = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation){
        console.log("ohohoshd");
        if (mutation.target === document.querySelector(".K6EKFb")){
            observerCC.observe(document.querySelector(".K6EKFb"), {attribute:false, subtree:true, attributeOldValue:false, characterDataOldValue:false, childList:false, characterData:false});
            observerMain.disconnect()    
        }
    });
});

observerMain.observe(document.documentElement, {attribute:true, subtree:true, attributeOldValue:true, characterDataOldValue:true, childList:true, characterData:true});
