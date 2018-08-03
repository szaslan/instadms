
function addDMIcon() {
    console.log('asd');
  const navElm = document.getElementById('react-root').querySelector('section > nav').lastChild.lastChild.lastChild
    .lastChild.lastChild;
  const dmElm = navElm.lastChild.cloneNode(true);
  navElm.appendChild(dmElm);
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.indexOf("instagram.com") != -1) {
      chrome.tabs.sendMessage(tabId, {text: 'report_back'});
      injectScripts();
    }

  }
});

const filesInDirectory = dir => new Promise (resolve =>

    dir.createReader ().readEntries (entries =>

        Promise.all (entries.filter (e => e.name[0] !== '.').map (e =>

            e.isDirectory
                ? filesInDirectory (e)
                : new Promise (resolve => e.file (resolve))
        ))
        .then (files => [].concat (...files))
        .then (resolve)
    )
)

const timestampForFilesInDirectory = dir =>
        filesInDirectory (dir).then (files =>
            files.map (f => f.name + f.lastModifiedDate).join ())

const reload = () => {

    chrome.tabs.query ({ active: true, currentWindow: false }, tabs => {

        if (tabs[0]) { chrome.tabs.reload (tabs[0].id) }

        chrome.runtime.reload ()
    })
}

const watchChanges = (dir, lastTimestamp) => {

    timestampForFilesInDirectory (dir).then (timestamp => {

        if (!lastTimestamp || (lastTimestamp === timestamp)) {

            setTimeout (() => watchChanges (dir, timestamp), 1000) // retry after 1s

        } else {

            reload ()
        }
    })

}

chrome.management.getSelf (self => {

    if (self.installType === 'development') {

        chrome.runtime.getPackageDirectoryEntry (dir => watchChanges (dir))
    }
})
