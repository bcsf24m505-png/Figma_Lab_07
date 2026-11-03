# Pulse — PUCIT HCI Lab 07

Responsive landing page based on the Pulse Figma design.

## Run locally
Open `index.html` in a browser, or run a local server:
```bash
python -m http.server 8000
```
Then visit http://localhost:8000.

## Deploy with GitHub Pages
1. Create a **public** GitHub repository (e.g. `pulse-hci-lab07`).
2. Upload/push these files to the repository root.
3. In repository **Settings → Pages**, select **Deploy from a branch**.
4. Select branch `main`, folder `/ (root)`, and Save.
5. Wait for GitHub Pages to publish; the URL appears in Settings → Pages.

## Figma MCP config (VS Code)
See `.vscode/mcp.json`. Sign in to Figma in your MCP client if prompted.
Use the Figma file: https://www.figma.com/design/5RHXAZdW4dSm7lDqxLcCI0

## Responsive checks
Test widths 1440px, 768px, and 375px in browser DevTools. Confirm no horizontal scrolling, mobile menu works, and form fields are keyboard accessible.
