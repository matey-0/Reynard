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
> With my ```librewolf.overrides.cfg``` file, there is very little reason to actually use Firefox.  
> - However, if you really need to use Firefox for some reason, the ```librewolf.overrides.cfg``` file could just be renamed to ```user.js```, and then installed in the typical manner: placed in your Firefox user-profile.  
> - Whilst this is possible, it is not recommend, because Reynard's ```librewolf.overrides.cfg``` file assumes LibreWolf's hardening is applied by default. LibreWolf removes all the Firefox telemetry, analytics, and also significantly hardens Firefox in numerous other ways.
> - If you decide to adapt Reynard's ```librewolf.overrides.cfg``` file into a ```user.js``` file, I highly recommend you follow either BrainF+ck Sec's hardening guide, or the Arkenfox guide (Linked later in this guide, and in the main README).
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
  Edit the librewolf.overrides.cfg file, comment out the currently active Framework 13 profile.  
  Utilise inline comments to determine the correct preset for you, uncomment, and make any edits if required  
  Glance over other prefs, modify any that you think you should.  

#### 4.) Restart LibreWolf 
  Quit and restart, changes should take effect  

## Understanding the performance templates 

## Platform specific settings (Linux & macOS)

## Note on privacy & security

## Common Customisations

## Troubleshooting 

## Credits/See Also 
### Credits:
- [Betterfox](https://github.com/yokoffing/Betterfox) - Smoothfox, Peskyfox, Fastfox, Securefox configs
- [BrainF+ck](https://brainfucksec.github.io/firefox-hardening-guide-2025) - Comprehensive hardening guide with good explanations
- [Arkenfox](https://github.com/arkenfox/user.js) - The reference hardening user.js for a reason
- [Firefox Source Docs](https://firefox-source-docs.mozilla.org/index.html) - Useful for understanding prefs
### See Also:
- [Main Reynard README](../README.md)
- [uBlock Origin Hard Mode Guide](../ublock/README.md)
