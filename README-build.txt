Flappy Electron package
-----------------------

Files included:
- index.html       (your game HTML)
- main.js          (electron main process)
- preload.js       (optional bridge, minimal)
- package.json     (scripts + electron-builder config)

How to build a Windows .exe (step-by-step)

1) Install Node.js (LTS). Download from https://nodejs.org and install.
   Make sure 'node' and 'npm' are available in a terminal/PowerShell.

2) Open a terminal and navigate to this project folder:
   cd "/mnt/data/flappy-electron"

3) Install dependencies (this will download electron and electron-builder):
   npm install

4) Run the app (development):
   npm start

5) Build a Windows installer (EXE) using electron-builder:
   npm run dist

   - On Windows this will produce an installer and packaged app in the 'dist' folder.
   - If you run this on macOS/Linux and want to build a Windows EXE, you will need Wine (and possibly other build tools).
   - Building on Windows is the simplest option.

6) Locate output:
   After 'npm run dist' completes, check the 'dist' directory for an installer (NSIS) such as 'Flappy - Flayric Setup 1.0.0.exe'
   or a folder named something like 'win-unpacked' containing the .exe.

Notes:
- If you want a custom icon, add a 256x256 .ico at build/icons/win/icon.ico before building.
- Signing the installer is optional but recommended for distribution.
- If electron-builder fails due to permissions or native-toolchain on non-Windows OS, build on Windows or set up Wine/mono as documented on electron-builder site.

Troubleshooting:
- If 'npm run dist' fails with 'rcedit' errors on Linux/macOS, build on Windows or install wine/mono and binutils as per electron-builder docs.
- If you need help, copy the terminal output and paste here and I can help debug.

That's it — you can now run the packaged EXE on Windows. If you'd like, I can:
- Add an application icon (.ico) into 'build/icons/win/icon.ico' for you (you'll need to provide an image)
- Produce a ZIP of the project for you to download (already provided)
- Walk you through a live build step-by-step
