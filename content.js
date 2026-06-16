// Content script — loaded on Gmail and Outlook pages.
// The popup uses chrome.scripting.executeScript to inject
// the scrapeEmails function directly, so this file can remain
// empty or be used for future enhancements.

// Optionally: listen for messages from the background worker.
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === 'PING') sendResponse({ status: 'ok' });
});