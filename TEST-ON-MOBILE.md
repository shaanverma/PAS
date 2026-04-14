# Test on Your Mobile Device

## Option 1: Same Wi‑Fi (easiest)

1. **Start a local server** on your computer in this folder.

   **Using Python** (if installed):
   ```bash
   python -m http.server 8080
   ```
   Or Python 3:
   ```bash
   py -m http.server 8080
   ```

   **Using Node/npx** (if Node is installed):
   ```bash
   npx -y serve -p 8080
   ```

2. **Find your computer’s IP** (Windows):
   - Open PowerShell or Command Prompt and run: `ipconfig`
   - Look for **IPv4 Address** under your Wi‑Fi adapter (e.g. `192.168.1.105`).

3. **On your phone** (connected to the **same Wi‑Fi**):
   - Open the browser and go to: `http://YOUR_IP:8080`  
     Example: `http://192.168.1.105:8080`
   - Tap **Add to Contacts**, then open the downloaded `.vcf` file to add the contact.

---

## Option 2: Public URL (no same Wi‑Fi needed)

Use a tunnel so your phone can reach your PC from anywhere:

1. **Install and run ngrok** (free at https://ngrok.com):
   ```bash
   ngrok http 8080
   ```
   (Start the local server on 8080 first, as in Option 1.)

2. ngrok will show a URL like `https://abc123.ngrok.io`. Open that URL on your phone’s browser.

---

## Option 3: Deploy online

Upload this folder to **GitHub Pages**, **Netlify**, or **Vercel** to get a permanent URL, then open it on your phone.

---

**Tip:** On iPhone, after the `.vcf` downloads, open **Files → Downloads** (or the download list in Safari) and tap the file to add the contact. On Android, open the downloaded file from the notification or Downloads folder.
