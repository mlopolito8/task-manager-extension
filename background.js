// Service worker — handles extension lifecycle events.

chrome.runtime.onInstalled.addListener(() => {
  console.log('Task Manager extension installed.');
});