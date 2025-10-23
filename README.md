# Reynard 

> **Note:** Reynard is my personal LibreWolf configuration, shared publicly in case it's useful to others. Consider this a beta/work-in-progress, configurations, preference, settings are tested on my hardware & operating system, but may need adjustments for yours.

Reynard transforms LibreWolf into a faster, more comfortable browser without major sacrifices in privacy. Designed for advanced users who understand browser internals and are comfortable with occasional breakage.

## Philosophy
Reynard is built on several principles:
- **Privacy-first**: Respects LibreWolf's excellent defaults, enhances where sensible, reduces where practical
- **Performance-optimized**: Hardware-specific tuning for my Framework 13, Steam Deck, M3 MacBook Air, and includes generic profiles for other devices
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
### Extension Setup and Recommendations 
- Optimised for privacy, functionality, complete coverage, speed
- Proper compatibility and collaborative functionality   

## Quick Start 
> TL;DR: Clone repo → Copy config → Edit for your hardware → Restart LibreWolf
### Requirements
- Librewolf 144+
- Linux-based operating system (preferable), macOS support work in progress
  - Windows support is not planned, I don't have access to a Windows machine
- Basic understanding of browser internals, troubleshooting skills, basic research
- Comfortable with mild site breakage  

## Installation & Setup

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
  Edit the librewolf.overrides.cfg file, comment out the currently active Framework 13 profile.  
  Utilise inline comments to determine the correct preset for you, uncomment, and make any edits if required  
  Glance over other prefs, modify any that you think you should.  

#### 4.) Restart LibreWolf 
  Quit and restart, changes should take effect   

#### 5.) For other components or detailed guides, follow individual READMEs  
  For the librewolf.overrides.cfg file, [librewolf.overrides.cfg setup](../main/librewolf.overrides/README.md)  
  For the CSS setup, [userChrome.css & userContent.css setup](../main/css/README.md)  
  For uBlock, [uBlock Origin Hard Mode Guide](../main/ublock/README.md)  
  For a guide to general Extensions, [Extensions Guide](../main/extensions/README.md)  
  For the theme, [Theme install](../main/theme/README.md)  
  
**Note:** The preference structure is the same between librewolf.overrides.cfg & standard Firefox user.js files. You can copy the contents of my librewolf.overrides.cfg into a user.js file and use it with stock Firefox, but other hardening steps will need to be applied afterwards, as many hardening prefs are left out of Reynard's librewolf.overrides.cfg file just because LibreWolf has them built-in already.

## Regarding VPNs
> **Note:** VPNs don't make you anonymous, they are just an extra layer of security/privacy. They are mainly useful for preventing your ISP from tracking you, circumventing location or network-based censorship, and for preventing IP-address based tracking.   

A VPN is not essential, but I recommend using a well-regarded VPN in addition to this setup. Mullvad VPN or Proton VPN are good options (no-logging, fast, good privacy policies, etc); I personally use Mullvad VPN (I set it up with multihop, entry is the closest node geographically to reduce latency, exit is your chosen destination. I also have Mullvad's DNS content blockers enabled: Ads, Trackers, Malware).  

## Tested On:
- Framework 13 (Ryzen AI 9) - [Fedora Linux 42]
- 15" M3 MacBook Air - [MacOS 26 Tahoe]
- Steam Deck OLED - [SteamOS Stable Latest]

All devices using latest LibreWolf version currently available.  

### Untested Templates
- Low-end, weaker, mid-range, and high-end device templates require third-party testing. Contributions welcome.

## Disclaimer
**This configuration suite is for advanced users.**   
Expect:  
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
I've been hardening my browser for the past two years, starting with Firefox when I was ~14. In Febuary of this 2025, after the Firefox drama around advertising and data collection (amongst other things, I was looking to switch before that anyways), I switched to LibreWolf and rebuilt my entire configuration from the ground up. I created this repo in October of 2025 (When I was 16), and I've been updating it since.

Everything I know about browsers came from reading Firefox source documentation, testing configurations, breaking things, Wikipedia, projects like Arkenfox and Betterfox, and being part of the privacy community. I'm no privacy expert or browser engineer, just interested in & aware of what's out there.  

Reynard has been tested on the three hardware platforms I own (Framework 13, MacBook Air M3, Steam Deck OLED) and refined through daily use. The configurations are very opinionated and reflect my specific priorities, but they're decently documented so you can understand the trade-offs and adapt them to your needs.  

This is a personal project shared just in case anyone finds it useful. Thank you for checking out my little project. 

## Credits
### Core Technologies
- [LibreWolf](https://librewolf.net/) - Privacy-focused Firefox fork
- [uBlock Origin](https://github.com/gorhill/uBlock) - Efficient content blocker
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
- [Personal-Filterlists](https://github.com/Mateo-Grgic/Personal-Filterlists) - My custom uBlock Origin filter lists

## Preview Images
**New Tab Page**  
<img width="2880" height="1856" alt="blank tab" src="https://github.com/user-attachments/assets/6935e53e-e43d-40f4-aee8-051202653d36" />

**On a webpage (Kagi Search)**  
<img width="2880" height="1856" alt="kagi search" src="https://github.com/user-attachments/assets/ed6c62a4-3ad2-4c77-8efc-776d91209981" />

**Searching styles**  
<img width="2880" height="1856" alt="searching" src="https://github.com/user-attachments/assets/6c044b13-b1cb-4295-9246-3d0ad0bdfbc4" />

**Closing a tab style**  
<img width="2880" height="1856" alt="closing tab" src="https://github.com/user-attachments/assets/5ce1fc47-6455-4a1c-b41d-65dbd17e78f7" />

**Simple Browsing Example**
![searching](https://github.com/user-attachments/assets/2b5f0f31-ae83-42de-8295-7dda3784c6a0)

## License
Feel free to use, modify, and distribute. Attribution not required for personal projects. For public projects, attribution appreciated greatly, but not required.

