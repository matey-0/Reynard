# Reynard CSS

Custom CSS to make LibreWolf *very* minimalist. Many UI elements are removed, and some things might break.

## Installation
make sure the pref `toolkit.legacyUserProfileCustomizations.stylesheets` is set to `true` in the `about:config` of LibreWolf or Firefox.  
ideally, make sure `browser.uidensity` is set to `1`, this enables & sets compact mode, which is the only mode I've personally tested CSS with.  

Copy `userChrome.css` and `userContent.css` to your LibreWolf profile's `chrome` directory:
- Linux: `~/.librewolf/[profile]/chrome/`
- Flatpak: `~/.var/app/io.gitlab.librewolf-community/.librewolf/[profile]/chrome/`
- macOS: `~/Library/Application Support/LibreWolf/Profiles/[profile]/chrome/`
> Make sure that the titles of each file is perfect; the files and folders are case sensitive as well. 

Restart LibreWolf.

See the CSS files for details.

