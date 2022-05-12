chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "Read Text",
        id: "contextMenu1",
        contexts: ["page", "selection"]
    });

    chrome.contextMenus.onClicked.addListener((event) => {
        chrome.storage.local.get(["langauge"], (res) => {
            const language = res.language || "en-US";
            chrome.tts.speak(event.selectionText, {
                lang: language,
                rate: 1,
            });
        });
    });
});