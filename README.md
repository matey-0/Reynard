# Reynard 
<img width="2880" height="1856" alt="image" src="https://github.com/user-attachments/assets/1349d0e1-66f0-4933-aed2-1d31f2039cb9" />  

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
- Linux system (preferable), or macOS (support work in progress)
  - Windows support is not planned as I don't have access to a Windows machine.
- Being comfortable with mild site breakage  

## Reference
### Resources
- [Betterfox](https://github.com/yokoffing/Betterfox) - Smoothfox, Peskyfox, Fastfox, Securefox configs which this project relies heavily upon
- [BrainF+ck](https://brainfucksec.github.io/firefox-hardening-guide-2025) - Comprehensive hardening guide with really good explanations for prefs
- [Arkenfox](https://github.com/arkenfox/user.js) - The reference hardening user.js for a reason
- [RFPTargets](https://searchfox.org/firefox-main/source/toolkit/components/resistfingerprinting/RFPTargets.inc) - For resist fingerprinting targets reference
- [uBlock Wiki](https://github.com/gorhill/uBlock/wiki/) - Very useful toolkit for learning about uBlock Origin features
- [Pythom2's LibreWolf Hardening Guide](https://github.com/phytom2/Librefox-Hardening-Guide) - Interesting 'missed' prefs in LibreWolf

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

## **Simple Browsing Example**
![browsing](https://github.com/user-attachments/assets/c12c96c3-2ea5-4dd1-b8ba-5ed44870a95c)  

## Related Projects:
- [Personal-Filterlists](https://github.com/Mateo-Grgic/Personal-Filterlists) - My custom uBlock Origin filter lists  

## License (MIT)
Feel free to use, modify, and distribute. Attribution not required for personal projects. For public projects, attribution appreciated greatly, but not required.

