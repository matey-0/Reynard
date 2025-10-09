
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

### Note on Firefox compatibility

## Understanding the performance templates 

## Platform specific settings (Linux & macOS)

## Note on privacy & security

## Common Customisations

## Troubleshooting 

## Credits/See Also 
### Credits
- [Betterfox](https://github.com/yokoffing/Betterfox) - Smoothfox, Peskyfox, Fastfox, Securefox configs
- [BrainF+ck](https://brainfucksec.github.io/firefox-hardening-guide-2025) - Comprehensive hardening guide with good explanations
- [Arkenfox](https://github.com/arkenfox/user.js) - The reference hardening user.js for a reason
- [Firefox Source Docs](https://firefox-source-docs.mozilla.org/index.html) - Useful for understanding prefs
### See Also
- [Main Reynard README](../README.md)
- [uBlock Origin Hard Mode Guide](../ublock/README.md)
