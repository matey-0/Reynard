# Reynard's librewolf.overrides.cfg file 
> **Note:** Changing *any* preference in the about:config of your browser can potentially make you stand out significantly for fingerprinters and trackers. For this reason, please don't use my config if privacy is your #1 concern. Use stock LibreWolf, Mullvad Browser, Tor, or Tails if you need super high levels of privacy &/or security. This config just tries to make LibreWolf into a usable, daily-driver browser that is private enough (more private than Firefox or Chrome, that's for sure at least).

## What is a librewolf.overrides.cfg?
The librewolf.overrides.cfg file is a simple JavaScript file that stores, sets, and overrides preferences. It's a more efficient way of mass-applying advanced preferences than using the about:config pane built into LibreWolf/Firefox. Due to LibreWolf's browser policies, some preferences aren't able to be modified using the GUI, so you must use the librewolf.overrides.cfg file to change them.

## What's included in *this* librewolf.overrides.cfg file?
This librewolf.overrides.cfg file contains:
* Preferences to increase privacy & security
* Optimisations for Linux on Wayland (macOS is a work in progress)
* Hardware-specific optimisations to increase speed
	* Specific device templates for my Framework 13, Steam Deck OLED, and 15" MacBook Air M3
	* Generic templates for several 'tiers' of devices
* Personal preferences 
* Intelligent trade-offs in privacy for maximum usability
* Betterfox-based preferences
    * Smoothfox, Fastfox, Peskyfox, Securefox

## Installation & Setup

> **Note on Firefox compatibility:**  
> With my `librewolf.overrides.cfg` file, there is very little reason to actually use Firefox.  
> - However, if you really need to use Firefox for some reason, the `librewolf.overrides.cfg` file could just be renamed to `user.js`, and then installed in the typical manner: placed in your Firefox user-profile.  
> - Whilst this is possible, it is not recommended, because Reynard's `librewolf.overrides.cfg` file assumes LibreWolf's hardening is applied by default. LibreWolf removes all the Firefox telemetry, analytics, and also significantly hardens Firefox in numerous other ways.
> - If you decide to adapt Reynard's `librewolf.overrides.cfg` file into a `user.js` file, I highly recommend you follow either BrainF+ck Sec's hardening guide, or the Arkenfox guide (Linked later in this guide, and in the main README).
### Installation Steps:

#### 1.) Clone the repo:  
  ```git clone https://github.com/Mateo-Grgic/Reynard.git```  
  ```cd Reynard```  

#### 2.) Copy files to correct locations
  **For Native Linux install (pacman, dnf, apt, etc)**  
  - Copy the librewolf.overrides.cfg file to the proper path  
  ```cp librewolf.overrides/librewolf.overrides.cfg ~/.librewolf/```  

**For Flatpak Linux Install**  
   - Copy the librewolf.overrides.cfg file to the proper path  
  ```cp librewolf.overrides/librewolf.overrides.cfg ~/.var/app/io.gitlab.librewolf-community/.librewolf/```   

**For macOS Install (Manual or Homebrew)**  
  - Create hidden config directory and copy overrides  
  ```mkdir -p ~/.librewolf```  
  ```cp librewolf.overrides/librewolf.overrides.cfg ~/.librewolf/```

#### 3.) Configure for your hardware
- Comment out my active Framework 13 profile (around line 180) by adding /* before the section, and */ afterwards.  
- Scroll up and find the template that best matches the hardware specs you have. Modify preferences like `dom.ipc.processCount` & `layout.frame_rate` to match your physical hardware, and tune `mousewheel.default.delta_multiplier_x/y/z` to your preferred scrolling speed.  
- Glance over all preferences, change any you find personally problematic or worth changing.  

#### 4.) Restart LibreWolf 
  Quit and restart, changes should take effect.

#### 5.) Verify it loaded:
- Open LibreWolf
- Type `about:config` in the address bar
- Search for a unique preference like `browser.compactmode.show`
- If it's set to true, your config loaded successfully

## Understanding the Performance Templates

> **Note:** This is a browser. Browsers are relatively lightweight compared to compiling code or rendering video. These performance tweaks are probably overkill for most people, your browser will be fine with the defaults. However, that being said, I like having a faster browser.

### Quick Guide

The config file includes several hardware-specific performance templates (low-end, mid-range, high-end, plus my custom configs for my Framework 13, Steam Deck, and MacBook Air).

**How to use them:**
1. Open `librewolf.overrides.cfg` in a text editor
2. Find the performance template section (around line 90)
3. Read the inline comments—they explain what each preference does
4. Uncomment the template closest to your hardware (remove `/*` and `*/`)
5. Adjust specific values like `dom.ipc.processCount` (set to your CPU core count ± 2) and `layout.frame_rate` (set to your display refresh rate)
6. Make sure you've commented my default (active) Framework 13 profile, it's at the end and will take precedence if you don't comment it out. 
7. Save, restart LibreWolf

**Only one template should be active at a time.** Make sure all others stay commented out.

**Key things to tune:**
- `dom.ipc.processCount` → Your physical CPU core count ± 2
- `layout.frame_rate` → Your display refresh rate (60, 90, 120, 144, etc.)
- `mousewheel.default.delta_multiplier_y` → Scroll speed is platform dependant and up to personal preference

Everything should be documented in the config file itself (if it's not, I'm currently working on adding documentation inline). If you want to understand what a specific preference does, the inline comments explain it.

## Platform-Specific Settings (Linux & macOS)

> **Platform support:** This config is optimised for Linux (Wayland + GTK specifically, Qt should work natively as well, but is less tested). I've tested it on Fedora and SteamOS. macOS works but isn't specifically optimised. Windows isn't considered at all, I don't use or have access to a Windows device.

### What's Included

Reynard's librewolf.overrides.cfg file includes Linux-specific optimizations for:
- WebRender GPU acceleration (Wayland compositing)
- GTK integration (native file pickers, portal support, gestures)
- Hardware video acceleration (VA-API)
- Touchpad gestures and swipes
- Proper ffmpeg usage

**On macOS:** Most of these prefs either apply, do nothing, or are harmless. However, I've had issues with webrender on macOS in the past using different preferences. If your Mac is using CPU rendering instead of GPU, try disabling `gfx.webrender.all` in the config.

**On Windows:** Not tested, not supported: Might be completely broken.

The platform-specific preferences are documented in the config file. Read the inline comments for details on what each one does.

## Note on privacy & security

> **My approach:** This config prioritizes usability over maximum hardening. I don't use `privacy.resistFingerprinting`. Your browser can be fingerprinted reliably and consistently in seconds regardless (unless you're using Tor Browser with no JavaScript or something, which isn't usable). I used resistFingerprinting for a couple years and know the trade-offs. It breaks 95% of sites in minor ways and 20% of sites in major ways. Not worth it *for me*. 

### Philosophy

This setup is already better than 99% of browser configurations. LibreWolf's baseline hardening (no telemetry, no Mozilla bloat, strict defaults) does the heavy lifting. I make trade-offs where they matter:

**Where I reduce privacy:**
* Referer policy relaxed (breaks payment processors, banking sites)
- WebGL enabled (breaks interactive maps, some games)
- ResistFingerprinting disabled 
- etc (see the file itself for a complete list)

These break too many things. The alternative is constantly troubleshooting or maintaining site-specific exceptions.  


**Where I increase privacy:**
- Disk caching disabled (writes browsing data to disk—hard no)
- Geolocation disabled
- Push notifications disabled
- etc (see the file itself for a complete list)

These break almost nothing and have decent payoffs.

### The Trade-off Principle

**I reduce privacy only when breakage is high. I increase privacy when breakage is low.**

If you want maximum hardening at all costs, just use stock LibreWolf: they follow Arkenfox fairly closely. Reynard is for people who want a hardened browser that actually works well for daily driving.

All specific privacy/security preferences are documented in the config file with inline comments.


## Common Customisations

**You'll probably want to change:**
- **Scroll speed:** `mousewheel.default.delta_multiplier_y`
- **Display refresh rate:** `layout.frame_rate` (match your display)
- **Tab width:** `browser.tabs.tabMinWidth` (default: 75px, I use 110px)
- **Process count:** `dom.ipc.processCount` (set to your CPU core count ± 2)

Most/all preferences are documented in the config file. Search for the preference name, adjust the value, save, restart.


## Credits/See Also 
### Credits:
- [Betterfox](https://github.com/yokoffing/Betterfox) - Smoothfox, Peskyfox, Fastfox, Securefox configs
- [BrainF+ck](https://brainfucksec.github.io/firefox-hardening-guide-2025) - Comprehensive hardening guide with good explanations
- [Arkenfox](https://github.com/arkenfox/user.js) - The reference hardening user.js for a reason
- [Firefox Source Docs](https://firefox-source-docs.mozilla.org/index.html) - Useful for understanding prefs
### See Also:
- [Main Reynard README](../README.md)
- [uBlock Origin Hard Mode Guide](../ublock/README.md)
