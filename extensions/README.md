# Reynard Extensions

My curated list of LibreWolf/Firefox extensions. Minimal, focused on privacy and usability.

## Philosophy

**Less is more.** Every extension is a potential attack surface and performance hit. I only run extensions that provide clear value and can't be replaced by native browser features or configs (or native operating system features, if applicable).  

## Extensions I Use

| Extension | Why I Use It | Note(s): | Link |
|-----------|--------------|--------|------|
| **Mullvad Browser Extension** | Very useful when websites block you for using Mullvad VPN, you can choose per-site proxies. | This extension is effectively useless if you aren't using Mullvad VPN as well. The extension is also technically in beta; hence no official addons.mozilla.org page. |  [mullvad.net](https://mullvad.net/en/download/browser/extension) |
| **uBlock Origin** | The content blocker. Efficient, lightweight, highly configurable. | See [the Reynard Hard Mode guide](../ublock/README.md) for (my) setup. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) |
| **Violentmonkey** | Userscript manager; flexible tool when you need it, can replace most extensions. Open source (unlike Tampermonkey), supports tonnes of scripts for site customization and automation. | Userscripts are just as dangerous as installing more extensions; they have full access (dangerous), increase fingerprinting surface, and add more attack vectors. I typically use them sparingly, review the code properly, and most of the time modify/write scripts instead of using stock scripts. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) |

* **Note:** For uBlock Origin configuration, see my [Hard Mode guide](../ublock/README.md).  
* **Note2:** I feel that this extension list is already super bloated (but trimming back makes me lose *so* many useful features!). If you can, try to just use uBlock Origin alone, anything more sets yourself up for fingerprinting if you're not careful. I'm almost certainly unique just because of these extensions (I know of a few sites that are able to fingerprint me reliably just because of my Violentmonkey scripts, so it's a real threat that's being used!).

## Extensions I use only sometimes

| Extension | Why It's Disabled | Link |
|-----------|-------------------|------|
| **Dark Reader** | Forces dark mode on all sites. It is quite slow, so I only use sometimes, and only at night. Also another fingerprinting and tracking vector. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/darkreader/) |

## See Also

- [Main Reynard README](../README.md)
- [uBlock Origin Hard Mode Guide](../ublock/README.md)
- [librewolf.overrides.cfg Guide](../librewolf.overrides/README.md)
