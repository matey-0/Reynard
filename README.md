# Reynard 

<img width="2880" height="1856" alt="image" src="https://github.com/user-attachments/assets/91d47e17-d7e6-4ba8-bba6-7a419f410309" />  

> **Note:** Reynard is my personal LibreWolf configuration, shared publicly in case it's useful to others. Consider this a beta/work-in-progress, configurations, preference, settings are tested on my hardware & operating system, but may need adjustments for yours.

Reynard transforms LibreWolf into a faster, more comfortable browser without major sacrifices in privacy. Designed for advanced users who understand browser internals and are comfortable with occasional breakage.

## What's included
* librewolf.overrides.cfg file
* UI Styling (userChrome.css & userContent.css files)
* Custom-ish Theme
* uBlock Origin Hard Mode Configs & Settings 
* Extension Setup and Recommendations 

## Requirements
- Latest LibreWolf version
- Linux-based operating system (preferable), macOS support work in progress
  - Windows support is not planned, I don't have access to a Windows machine, and I refuse to support Windows
- Troubleshooting skills, basic ability to research
- Being comfortable with mild site breakage

## Installation
Figure it out yourself. If you can't do that, you probably shouldn't be using anything here.

## About Reynard
I've been hardening my browser for the past two years, starting with Firefox when I was ~14. In Febuary of this 2025, after the Firefox drama around advertising and data collection (amongst other things, I was looking to switch before that anyways), I switched to LibreWolf and rebuilt my entire configuration from the ground up. I created this repo in October of 2025 (When I was 16), and I've been updating it since. I'm no privacy expert or browser engineer, just interested in & aware of what's out there. Reynard has been tested on the three hardware platforms I own (Framework 13, MacBook Air M3, Steam Deck OLED) and refined through daily use. The configurations are very opinionated and reflect my specific priorities, but they're decently documented so you can understand the trade-offs and adapt them to your needs.  

## Reference
- [Betterfox](https://github.com/yokoffing/Betterfox) - Smoothfox, Peskyfox, Fastfox, Securefox configs
- [BrainF+ck](https://brainfucksec.github.io/firefox-hardening-guide-2025) - Comprehensive hardening guide with good explanations
- [Arkenfox](https://github.com/arkenfox/user.js) - The reference hardening user.js for a reason
- [RFPTargets](https://searchfox.org/firefox-main/source/toolkit/components/resistfingerprinting/RFPTargets.inc) - For resist fingerprinting targets reference
- [uBlock Wiki](https://github.com/gorhill/uBlock/wiki/) - Very useful toolkit for learning about uBlock Origin features

### Useful Test Pages
- [Baldur's Gate 3 - Patch 7 Release Notes](https://baldursgate3.game/news/patch-7-now-live_121) - for testing scrolling performance     
- [MSCHF's Lick The Rock Release Page](https://licktherock.com/) - for testing rendering performance
- [Lenovo Thinkpad Home Page](https://www.lenovo.com/ca/en/c/laptops/thinkpad/) - for testing loading performance & detecting normally hidden breakage  

### Fingerprinting test pages
- https://amiunique.org/  
- https://browserleaks.com/  
- https://coveryourtracks.eff.org/  
- https://abrahamjuliot.github.io/creepjs/  
- https://fingerprint.com/  
- https://arkenfox.github.io/TZP/tzp.html  

## Related Projects:
- [Personal-Filterlists](https://github.com/Mateo-Grgic/Personal-Filterlists) - My custom uBlock Origin filter lists

## Preview Images
**New Tab Page**  
<img width="2880" height="1856" alt="blank tab" src="https://github.com/user-attachments/assets/6935e53e-e43d-40f4-aee8-051202653d36" />

**On a webpage (Kagi Search)**  
<img width="2880" height="1856" alt="kagi search" src="https://github.com/user-attachments/assets/ed6c62a4-3ad2-4c77-8efc-776d91209981" />

**Searching styles**  
<img width="2880" height="1856" alt="image" src="https://github.com/user-attachments/assets/c14dc715-3029-44a0-937d-09cdbfbe97cd" />  

**Closing a tab style**  
<img width="2880" height="1856" alt="closing tab" src="https://github.com/user-attachments/assets/5ce1fc47-6455-4a1c-b41d-65dbd17e78f7" />

**Simple Browsing Example**
![browsing](https://github.com/user-attachments/assets/28516635-83f9-4d55-8d9f-9a0d315f0623)  

## License (MIT)
Feel free to use, modify, and distribute. Attribution not required for personal projects. For public projects, attribution appreciated greatly, but not required.

