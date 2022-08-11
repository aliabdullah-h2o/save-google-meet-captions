var tab_title = '';
function display_h1(results) {
    document.querySelector("#id1").innerHTML = "<p>tab title: " + tab_title + "</p><p>Captions: " + results + "</p>";
}

chrome.tabs.query({ url: "https://meet.google.com/*" }, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
        code: 'document.getElementsByClassName("TBMuR bj4p3b")[0].innerText'
    }, display_h1);
});