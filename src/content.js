chrome.runtime.onConnect.addListener((port) => {
  if (port.name == "leetfill") {
    port.onMessage.addListener(async (msg) => {
      if (!window.location.href.includes("leetcode.com/problems/")) {
        port.postMessage({ ...msg, error: "page is not a leetcode problem" });
      }
      let lines = [];
      if (msg.op == "leetfill") {
        try {
          let consoleBtn = findConsoleBtn();

          if (consoleBtn) {
            if (!isTestcaseBtn(consoleBtn)) {
              consoleBtn.click();
              await waitAsync(100);
            }

            consoleBtn.nextElementSibling.click();

            await waitAsync(100);
            lines = getLines();

            port.postMessage({ ...msg, data: lines });
          }
        } catch (error) {
          port.postMessage({ ...msg, error: error.toString() });
        }
      }
    });
  }
});

async function waitAsync(ms) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(
      (resv) => {
        resv(true);
      },
      ms,
      resolve
    );
  });
  return promise;
}

function getLines() {
  return [...document.querySelectorAll(".ace_line")].map((el) => el.innerHTML);
}

function findConsoleBtn() {
  return [...document.getElementsByTagName("BUTTON")].find((btn) => {
    return (
      btn.innerText.trim() && btn.innerText.trim().toLowerCase() == "console"
    );
  });
}

function isTestcaseBtn(consoleBtn) {
  return (
    consoleBtn.nextElementSibling.innerText.trim().toLowerCase() ==
    "use example testcases"
  );
}
