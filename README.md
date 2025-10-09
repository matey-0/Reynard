# Reynard 

> **Note:** Reynard is my personal LibreWolf configuration, shared publicly in case it's useful to others. Consider this a beta/work-in-progress, configurations, preference, settings are tested on my hardware & operating system, but may need adjustments for yours.

Reynard transforms LibreWolf into a faster, more comfortable browser without major sacrifices in privacy. Designed for advanced users who understand browser internals and are comfortable with occasional breakage.

## Philosophy
Reynard is built on several principles:
- **Privacy-first**: Respects LibreWolf's excellent defaults, enhances where sensible, reduces where practical
- **Performance-optimized**: Hardware-specific tuning for my Framework 13, Steam Deck, m3 MacBook Air, and includes generic profiles for other devices
- **Usable**: Minimalist UI, smooth scrolling, sensible trade-offs
- **Transparent**: Most preferences documented with inline comments
- **Reproducible**: Clear instructions, tested configurations
- **Sensible Defaults** - Most default prefs are designed to be sensible, you can use as-is or modify to your heart's content

## What's included
### librewolf.overrides.cfg file
- Contains sensible defaults
- Maintains privacy standards
- Comprehensive inline commenting
- Device specific profiles and optimizations
### UI Styling (userChrome.css & userContent.css files)
- Distraction free
- Minimalistic design
- Blank new tabs page
### Custom-ish Theme
- Minimalistic dark theme included
- Similar to 'Dark Space by Nicothin', with various improvements
### uBlock Origin Hard Mode Configs & Settings 
- Guide for using Hard Mode
- Curated filter lists
- Dynamic rules for starting base (selective noop)
- Default Deny policy
- Optional advanced optimisations and settings
- Personal filter lists
### AdGuard Home basic configurations 
- Curated Filter lists
- Upstream DNS providers (HTTPS, TLS, QUIC)
### Extension Setup and Recommendations 
- Optimised for privacy, functionality, complete coverage, speed
- Proper compatibility and collaborative functionality

## Quick Start 
### Requirements
- Librewolf 143+
- Linux-based operating system (preferable), macOS support work in progress
  - Windows support is not planned, I don't have access to a Windows machine
- Basic understanding of browser internals, troubleshooting skills, basic research
- Comfortable with mild site breakage


### Installation Steps:

#### 1.) Clone the repo:  
  ```git clone https://github.com/Mateo-Grgic/Reynard.git```  
  ```cd Reynard```  

#### 2.) Copy files to correct locations
  **For Native Linux install (pacman, dnf, apt, etc)**  
  - Copy browser performance config  
  ```cp librewolf.overrides/librewolf.overrides.cfg ~/.librewolf/```  
  - Find your profile name, look for a directory ending in .default or .default-release
  *Tip: Type `about:profiles` in LibreWolf's address bar to see your profile path*
  ```ls ~/.librewolf/```  
  - Copy UI styling (replace [PROFILE_NAME] with your actual profile)  
  ```mkdir -p ~/.librewolf/[PROFILE_NAME]/chrome```  
  ```cp css/userChrome.css ~/.librewolf/[PROFILE_NAME]/chrome/```  
  ```cp css/userContent.css ~/.librewolf/[PROFILE_NAME]/chrome/```  

**For Flatpak Linux Install**  
  - Copy browser performance config  
  ```cp librewolf.overrides/librewolf.overrides.cfg ~/.var/app/io.gitlab.librewolf-community/.librewolf/```  
  - Find your profile name, look for a directory ending in .default or .default-release  
  *Tip: Type `about:profiles` in LibreWolf's address bar to see your profile path*
  ```ls ~/.var/app/io.gitlab.librewolf-community/.librewolf/```  
  - Copy UI styling (replace [PROFILE_NAME] with your actual profile)  
  ```mkdir -p ~/.var/app/io.gitlab.librewolf-community/.librewolf/[PROFILE_NAME]/chrome```  
  ```cp css/userChrome.css ~/.var/app/io.gitlab.librewolf-community/.librewolf/[PROFILE_NAME]/chrome/```  
  ```cp css/userContent.css ~/.var/app/io.gitlab.librewolf-community/.librewolf/[PROFILE_NAME]/chrome/```  

**For macOS Install (Manual or Homebrew)**  
  - Create hidden config directory and copy overrides  
  ```mkdir -p ~/.librewolf```  
  ```cp librewolf.overrides/librewolf.overrides.cfg ~/.librewolf/```  
  - Find your profile name, look for a directory ending in .default or .default-release  
  *Tip: Type `about:profiles` in LibreWolf's address bar to see your profile path*
  ```ls ~/Library/Application\ Support/LibreWolf/```  
  - Copy UI styling (replace [PROFILE_NAME] with your actual profile)  
  ```mkdir -p ~/Library/Application\ Support/LibreWolf/[PROFILE_NAME]/chrome```  
  ```cp css/userChrome.css ~/Library/Application\ Support/LibreWolf/[PROFILE_NAME]/chrome/```  
  ```cp css/userContent.css ~/Library/Application\ Support/LibreWolf/[PROFILE_NAME]/chrome/```  

#### 3.) Configure for your hardware
  Edit the librewolf.overrides.cfg file, comment out the currently active Framework 13 profile  
  Utilise inline comments to determine the correct preset for you, uncomment, and make any edits if required  
  Glance over other prefs, modify any that you think you should  

#### 4.) Restart LibreWolf 
  Quit and restart, changes should take effect  

**Note:** The preference structure is the same between librewolf.overrides.cfg & standard Firefox user.js files. You can copy the contents of my librewolf.overrides.cfg into a user.js file and use it with stock Firefox, but other hardening steps will need to be applied afterwards, as many hardening prefs are left out of Reynard's librewolf.overrides.cfg file just because LibreWolf has them built-in already.

## Tested On:
- Framework 13 (Ryzen AI 9) - [Fedora Linux 42]
- 15" M3 MacBook Air - [MacOS 26 Tahoe]
- Steam Deck OLED - [SteamOS Stable Latest]  
All devices using latest LibreWolf, currently Librewolf 143.0.4-1
### Untested Templates
- Low-end, weaker, mid-range, and high-end device templates require third-party testing. Contributions welcome.

## Disclaimer
**This configuration suite is for advanced users.** Expect:
- Occasional site breakage (especially with uBlock Origin Hard Mode)
- Need to manually adjust performance settings for your hardware
- Some privacy/security prefs disabled for compatibility (documented inline)
- Some privacy/security prefs enabled for my use-cases (document inline)
**Not recommended if:**
- You want a "set it and forget it" experience, without the manual work
- You're uncomfortable troubleshooting browser issues
- You need maximum compatibility with all websites
- You need maximum privacy in all situations

**LibreWolf already has excellent privacy defaults.** Reynard enhances performance and usability, but isn't necessary for privacy beyond a handful of prefs.

## About Reynard
I've been hardening my browser for the past two years, starting with Firefox when I was ~14. In April of this year, after the Firefox drama around advertising and data collection, I switched to LibreWolf and rebuilt my entire configuration from the ground up. I'm 16 now, and Reynard is the result: lots of work built on lots of learning about browser internals, privacy trade-offs, and performance optimisations.  

Everything I know about browsers came from reading Firefox source documentation, testing configurations, breaking things, Wikipedia, projects like Arkenfox and Betterfox, and being part of the privacy community. I'm no privacy expert or browser engineer, just interested in & aware of what's out there.  

Reynard has been tested on the three hardware platforms I own (Framework 13, MacBook Air M3, Steam Deck OLED) and refined through daily use. The configurations are very opinionated and reflect my specific priorities, but they're decently documented so you can understand the trade-offs and adapt them to your needs.  

This is a personal project shared just in case anyone finds it useful. Thank you for checking out my little project. 

## Credits
### Core Technologies
- [LibreWolf](https://librewolf.net/) - Privacy-focused Firefox fork
- [uBlock Origin](https://github.com/gorhill/uBlock) - Efficient content blocker
- [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) - Network-wide ad blocking
- [Firefox/Mozilla](https://www.firefox.com/en-CA/) - Firefox is the whole reason we're here, despite all the shortcomings, they still make the browser base.
### Configuration Inspiration & Reference
- [Betterfox](https://github.com/yokoffing/Betterfox) - Smoothfox, Peskyfox, Fastfox, Securefox configs
- [BrainF+ck](https://brainfucksec.github.io/firefox-hardening-guide-2025) - Comprehensive hardening guide with good explanations
- [Arkenfox](https://github.com/arkenfox/user.js) - The reference hardening user.js for a reason
- [Firefox Source Docs](https://firefox-source-docs.mozilla.org/index.html) - Useful for understanding prefs
- [Ranum](https://www.ranum.com/security/computer_security/editorials/dumb/) - General security blog
- [RFPTargets](https://searchfox.org/firefox-main/source/toolkit/components/resistfingerprinting/RFPTargets.inc) - For resist fingerprinting targets reference
- [uBlock Wiki](https://github.com/gorhill/uBlock/wiki/) - Very useful toolkit for learning about uBlock Origin features

**Thanks to everyone who works on these valuable projects, and thank you to anyone who might use Reynard**

### Useful Test Pages
- [Baldur's Gate 3 - Patch 7 Release Notes](https://baldursgate3.game/news/patch-7-now-live_121) - for testing scrolling performance     
- [MSCHF's Lick The Rock Release Page](https://licktherock.com/) - for testing rendering performance
- [Lenovo Thinkpad Home Page](https://www.lenovo.com/ca/en/c/laptops/thinkpad/) - for testing loading performance & detecting normally hidden breakage  
### Fingerprinting Test Pages
> **Note:** Reynard makes privacy/usability trade-offs documented inline in `librewolf.overrides.cfg`. These may increase fingerprinting surface compared to maximum-hardened LibreWolf. However, even vanilla LibreWolf is fingerprintable due to its unique characteristics and the many surfaces browsers & JavaScript expose. Test your configuration and decide if the trade-offs are acceptable for your threat model—but know that no browser is truly private. Even Tor requires caution.

https://amiunique.org/  
https://browserleaks.com/  
https://coveryourtracks.eff.org/  
https://abrahamjuliot.github.io/creepjs/  
https://fingerprint.com/  

## Related Projects:
- [personal-filter-lists](https://github.com/Mateo-Grgic/personal-filter-lists) - My custom uBlock Origin filter lists

## Preview Images
**New Tab Page**  
<img width="2880" height="1856" alt="New Tab" src="https://github.com/user-attachments/assets/a7f47540-ba6b-4c33-a075-beebed6a0143" />  

**On a webpage (Kagi Search)**  
<img width="2880" height="1856" alt="Kagi Search (On a page)" src="https://github.com/user-attachments/assets/091b20be-e798-484e-b122-e6e18daf8edd" />  

**Searching styles**  
<img width="2880" height="1856" alt="Searching Example" src="https://github.com/user-attachments/assets/d48381db-002e-48ae-87dd-040f4615ca57" />  

**Closing a tab style**  
<img width="2880" height="1856" alt="Tab  X  Fade" src="https://github.com/user-attachments/assets/3d50e5c2-34a6-4bc3-a151-33ed5c2e01a1" />  

**Simple Browsing Example**
![preview](https://github.com/user-attachments/assets/d85223ad-bf91-41c3-8ef6-b789687706a4)


## License
- Uses MIT license for maximum sharability

Feel free to use, modify, and distribute. Attribution not required for personal projects. For public projects, attribution appreciated greatly, but not required.

