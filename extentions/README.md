# Reynard Extensions

My curated list of LibreWolf/Firefox extensions. Minimal, focused on privacy and usability.

## Extensions I Use

| Extension | Why I Use It | Link |
|-----------|--------------|------|
| **uBlock Origin** | The content blocker. Efficient, lightweight, highly configurable. See my [Hard Mode guide](../ublock/README.md) for setup. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) |
| **LocalCDN** | Blocks tracking through CDNs by redirecting to local resources. Complements uBlock Origin nicely. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/localcdn) |
| **Violentmonkey** | Userscript manager. Open source, supports tons of scripts for site customization and automation. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) |

## Extensions I Keep Disabled

| Extension | Why It's Disabled | Link |
|-----------|-------------------|------|
| **Bypass Paywalls Clean** | Useful for bypassing news paywalls, but I only enable it when needed. Not daily-driver material. | [GitHub](https://github.com/bpc-clone/bpc_updates) (not on AMO) |
| **Dark Reader** | Forces dark mode on all sites. Looks good but breaks some layouts, and many sites have native dark modes now. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/darkreader/) |

## Installation

Install extensions directly from [addons.mozilla.org](https://addons.mozilla.org) (Firefox Add-ons). LibreWolf supports all Firefox extensions.

**Note:** For uBlock Origin configuration, see my [Hard Mode guide](../ublock/README.md).

## Philosophy

**Less is more.** Every extension is a potential attack surface and performance hit. I only run extensions that provide clear value and can't be replaced by native browser features or configs.

- **uBlock Origin** - Can't be replaced, essential
- **LocalCDN** - Small but effective privacy win
- **Violentmonkey** - Flexible tool when you need it

Everything else is disabled by default and enabled only when needed.

## See Also

- [Main Reynard README](../README.md)
- [uBlock Origin Hard Mode Guide](../ublock/README.md)
- [librewolf.overrides.cfg Guide](../librewolf-overrides/README.md)
