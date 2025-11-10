# Reynard's librewolf.overrides.cfg file 
> **Note:** Changing *any* preference in the about:config of your browser can potentially make you stand out significantly to fingerprinters and trackers. For this reason, please don't use my config if privacy is your #1 concern; Use stock LibreWolf, Mullvad Browser, Tor Browser, or Tails OS if you need super high levels of mission critical privacy. This config just tries to make LibreWolf into a usable, daily-driver browser that is private enough (More private than (stock) Firefox, Chrome or Brave: that's for sure, at least).

## What is a librewolf.overrides.cfg?
The librewolf.overrides.cfg file is a simple JavaScript file that stores, sets, and overrides preferences. It's a more efficient way of mass-applying advanced preferences than using the about:config pane built into LibreWolf/Firefox. Due to LibreWolf's browser policies, some preferences aren't able to be modified using the GUI, so you must use the librewolf.overrides.cfg file to change them.

**Note on Firefox compatibility:**  
> With my `librewolf.overrides.cfg` file, there is very little reason to actually use Firefox.  
> - However, if you really need to use Firefox for some reason, the `librewolf.overrides.cfg` file could just be renamed to `user.js`, and then installed in the typical manner: placed in your Firefox user-profile.  
> - Whilst this is possible, it is not recommended, because Reynard's `librewolf.overrides.cfg` file assumes LibreWolf's hardening is applied by default. LibreWolf removes all the Firefox telemetry, analytics, and also significantly hardens Firefox in numerous other ways.
> - If you decide to adapt Reynard's `librewolf.overrides.cfg` file into a `user.js` file, I highly recommend you follow either BrainF+ck Sec's hardening guide, or the Arkenfox guide (Linked later in this guide, and in the main README).

## What's included in *this* librewolf.overrides.cfg file?
This librewolf.overrides.cfg file contains:
* Preferences to increase privacy & security
* Optimisations for Linux on Wayland (macOS stuff is a work in progress)
* Hardware-specific optimisations to increase speed
	* Specific device templates for my Framework 13, Steam Deck OLED, and 15" M3 MacBook Air
	* Generic templates for several 'tiers' of devices
* Personal preferences 
* Maximum usability
* Minimal, annoyance free everything
* Betterfox-based preferences
    * Smoothfox, Fastfox, Peskyfox, Securefox

## Regarding VPNs
> VPNs don't make you anonymous, they are just an extra layer of security/privacy. They are mainly useful for preventing your ISP from tracking you, circumventing location or network-based censorship, and for preventing IP-address based tracking.  

A VPN is not essential, but I recommend using a well-regarded VPN in addition to this setup. Mullvad VPN or Proton VPN are good options (no-logging, fast, good privacy policies, etc); I personally use Mullvad VPN (I set it up with multihop, entry is the closest node geographically to reduce latency, exit is your chosen destination. I also have Mullvad's DNS content blockers enabled: Ads, Trackers, Malware).  

## Credits/See Also 
### Credits:
- [Betterfox](https://github.com/yokoffing/Betterfox) - Smoothfox, Peskyfox, Fastfox, Securefox configs
- [BrainF+ck](https://brainfucksec.github.io/firefox-hardening-guide-2025) - Comprehensive hardening guide with good explanations
- [Arkenfox](https://github.com/arkenfox/user.js) - The reference hardening user.js for a reason
- [Firefox Source Docs](https://firefox-source-docs.mozilla.org/index.html) - Useful for understanding prefs
### See Also:
- [Main Reynard README](../README.md)
- [uBlock Origin Hard Mode Guide](../ublock/README.md)
