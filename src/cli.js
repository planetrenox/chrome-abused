#!/usr/bin/env node
import { _ } from 'cute-con';

import { exec } from 'child_process';

function bringChromeToForeground()
{
    const {platform} = process;

    if (platform === 'win32') {
        // Windows
        exec('powershell -Command "Get-Process chrome | ForEach-Object { $_.MainWindowHandle | Set-ForegroundWindow }"', (error, stdout, stderr) =>
        {
            if (error) {
                console.error(`Error bringing Chrome to foreground: ${error.message}`);
            }
            else {

                _("𒀭 Chrome thinks it's in focus.");
            }
        });
    }
    else if (platform === 'darwin') {
        // macOS
        exec('osascript -e \'tell application "Google Chrome" to activate\'', (error, stdout, stderr) =>
        {
            if (error) {
                console.error(`Error bringing Chrome to foreground: ${error.message}`);
            }
            else {
                console.log('Chrome thinks it\'s in focus 𒀭');
            }
        });
    }
    else if (platform === 'linux') {
        // Linux
        exec('xdotool search --onlyvisible --class "Chrome" windowactivate', (error, stdout, stderr) =>
        {
            if (error) {
                console.error(`Error bringing Chrome to foreground: ${error.message}`);
            }
            else {
                console.log('Chrome thinks it\'s in focus 𒀭');
            }
        });
    }
}

function keepChromeInFocus()
{
    console.log('Starting to keep Chrome in focus...');

    setInterval(() =>
    {
        bringChromeToForeground();
    }, 1000); // Check and bring Chrome to foreground every 1 second (adjust as needed)
}

// Start keeping Chrome in focus
keepChromeInFocus();
