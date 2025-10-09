# Reynard Extensions

My curated list of LibreWolf/Firefox extensions. Minimal, focused on privacy and usability.

## Extensions I Use

| Extension | Why I Use It | Link |
|-----------|--------------|------|
| **uBlock Origin** | The content blocker. Efficient, lightweight, highly configurable. See my [Hard Mode guide](../ublock/README.md) for setup. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) |
| **LocalCDN** | Blocks tracking through CDNs by redirecting to local resources. Complements uBlock Origin nicely. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes) |
| **Violentmonkey** | Userscript manager. Open source, supports tons of scripts for site customization and automation. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) |

**Note:** For uBlock Origin configuration, see my [Hard Mode guide](../ublock/README.md).

## Extensions I Keep Disabled (Not Mandatory for Reynard Setup - Only For Convenience)

| Extension | Why It's Disabled | Link |
|-----------|-------------------|------|
| **Bypass Paywalls Clean** | Useful for bypassing news paywalls, but I only enable it when needed. | [GitFlic.ru](https://gitflic.ru/project/magnolia1234/bypass-paywalls-firefox-clean/release/0facfab5-936b-43ab-8b88-be067ee6a81a)|
| **Dark Reader** | Forces dark mode on all sites. It is quite slow, so I only use sometimes, and only at night | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/darkreader/) |
| **Instapaper** | Saves articles to read on my Kobo e-reader. Enable to save pages, disable immediately after. | [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/instapaper/) |

## Philosophy

**Less is more.** Every extension is a potential attack surface and performance hit. I only run extensions that provide clear value and can't be replaced by native browser features or configs.

- **uBlock Origin** - Can't be replaced, essential
- **LocalCDN** - Small but effective privacy win, slightly speeds up loading times
-- **Violentmonkey** - Flexible tool when you need it, can replace most extensions

Everything else is disabled by default and enabled only when needed.

## See Also

- [Main Reynard README](../README.md)
- [uBlock Origin Hard Mode Guide](../ublock/README.md)
- [librewolf.overrides.cfg Guide](../librewolf-overrides/README.md)
