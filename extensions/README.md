# Reynard Extensions

My curated list of LibreWolf/Firefox extensions. Minimal, focused on privacy and usability.

## Philosophy

**Less is more.** Every extension is a potential attack surface and performance hit. I only run extensions that provide clear value and can't be replaced by native browser features or configs (or native operating system features, if applicable).  

## Extensions I Use

| Extension | Why I Use It | Note(s): | Link |
|-----------|--------------|--------------|------|
| **LocalCDN** | Slightly speeds up page load times, cleans up CDN calls. Largely useless when using dFPI, but still value add with my setup; decide for yourself if you need it or not. | Lorem ipsum | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes/) |
| **Mullvad Browser Extension** | Very useful when websites block you for using Mullvad VPN, you can choose per-site proxies. | This extension is effectively useless if you aren't using Mullvad VPN as well. |  [mullvad.net](https://mullvad.net/en/download/browser/extension) |
| **NoScript** | Extremely granular permissions control for JavaScript and other web technologies for tracking; very useful for preventing tracking & general utility. | Not recommended unless you are experienced with un-breaking things (In uBlock Origin Hard mode, for example). | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/noscript/) |
| **uBlock Origin** | The content blocker. Efficient, lightweight, highly configurable. | See [my Hard Mode guide](../ublock/README.md) for (my) setup. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) |
| **Violentmonkey** | Userscript manager; flexible tool when you need it, can replace most extensions. Open source (unlike Tampermonkey), supports tons of scripts for site customization and automation. | Userscripts are just as dangerous as installing more extensions; they have full access (dangerous), increase fingerprinting surface, and add more attack vectors. I typically use them sparingly, review the code properly, and most of the time modify/write scripts instead of using stock scripts. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) |

**Note:** For uBlock Origin configuration, see my [Hard Mode guide](../ublock/README.md).

## Extensions I Keep Disabled (Not Mandatory for Reynard Setup - Only For Convenience)

| Extension | Why It's Disabled | Link |
|-----------|-------------------|------|
| **Bypass Paywalls Clean** | Useful for bypassing news paywalls, but I only enable it when needed. | [GitFlic.ru](https://gitflic.ru/project/magnolia1234/bypass-paywalls-firefox-clean/release/0facfab5-936b-43ab-8b88-be067ee6a81a)|
| **Dark Reader** | Forces dark mode on all sites. It is quite slow, so I only use sometimes, and only at night. Also another fingerprinting and tracking vector. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/darkreader/) |

## See Also

- [Main Reynard README](../README.md)
- [uBlock Origin Hard Mode Guide](../ublock/README.md)
- [librewolf.overrides.cfg Guide](../librewolf-overrides/README.md)
