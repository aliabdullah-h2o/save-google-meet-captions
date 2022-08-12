var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation){
    console.log(document.getElementsByClassName("K6EKFb")[0].innerText);
    });
});

observer.observe(document.documentElement,{attribute:true, subtree:true, attributeOldValue:true, characterDataOldValue:true, childList:true, characterData:true});