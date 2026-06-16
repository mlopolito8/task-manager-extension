# Task Manager Chrome Extension

A Chrome extension that helps you manage to-dos with priorities and deadlines and uses AI to suggest new tasks by scanning your Gmail or Outlook inbox.

Built with vanilla JavaScript + the Anthropic Claude API.

---

## Features

- Add tasks with a title, priority level (High / Medium / Low), and optional due date
- Tasks sorted by priority with color-coded badges and overdue warnings
- Mark tasks complete or delete them
- **AI-powered inbox scan** — clicks through your top 5 Gmail or Outlook emails, reads subject + body, and suggests actionable to-dos via Claude
- Accept or dismiss each suggestion individually
- All data persists locally via `chrome.storage.local`

---

## Getting Started

### Prerequisites
- Google Chrome
- A free [Anthropic API key](https://console.anthropic.com) (for the inbox scan feature)

### Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/mlopolito8/task-manager-extension.git
   ```

2. Open Chrome and go to `chrome://extensions`

3. Enable **Developer mode** (toggle in the top-right corner)

4. Click **Load unpacked** and select the `task-manager-extension/` folder

5. The extension icon will appear in your Chrome toolbar — pin it for easy access!

### Setting Up Your API Key

On first launch, the extension will prompt you to enter your Anthropic API key. This is stored locally in `chrome.storage.local` and never leaves your browser.

Get a free key at [console.anthropic.com](https://console.anthropic.com) → API Keys.

---

## Using the Inbox Scan

1. Open the extension popup
2. Select **Gmail** or **Outlook** from the dropdown
3. Click ** Scan Inbox**
4. The extension will open your inbox, click through the top 5 emails, and read each subject + body
5. Claude will return up to 5 suggested to-dos — accept or dismiss each one

> **Note:** The scraper navigates your live inbox automatically. Make sure your inbox tab is logged in before scanning.

---

## Tech Stack

- Vanilla JavaScript (no frameworks)
- Chrome Extensions Manifest V3
- Anthropic Claude API (`claude-sonnet-4-6`)
- `chrome.storage.local` for persistence

---

## File Structure

```
task-manager-extension/
├── manifest.json       # Extension config & permissions
├── popup.html          # Main UI
├── popup.js            # Task logic, scan flow, Claude API calls
├── styles.css          # Styling
├── content.js          # Content script (runs on inbox pages)
├── background.js       # Service worker
└── icon.png            # Extension icon (128×128)
```

---

## Limitations

- Gmail and Outlook DOM selectors may break if those apps update their UI — the `scrapeEmails()` function in `popup.js` may need occasional selector tweaks
- The inbox scraper waits ~1.8s per email for content to load; on slow connections, bumping this to `2500ms` in `popup.js` can help
- Not published to the Chrome Web Store — must be loaded in Developer mode

---

## Contributing

This is a personal portfolio project, but PRs and issues are welcome! Feel free to fork and build on it.

---

## License

MIT — free to use, modify, and share.