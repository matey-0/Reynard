# Reynard AdGuard Home Configuration

My AdGuard Home setup for laptop DNS-level blocking. Complete coverage, minimal breakage.

## DNS Providers

Multiple upstream DNS providers for redundancy (Mullvad, LibreDNS, Quad9, dns0, ControlD, UncensoredDNS, Wikimedia, AdGuard, NextDNS). All support encrypted DNS (DoH/DoT/QUIC).

See `dns-providers.txt` for full list.

## Filter Lists

| List | What It Blocks |
|------|----------------|
| **OISD Big** | Ads, tracking, malware—comprehensive, low false positives |
| **HaGeZi Ultimate** | Aggressive blocking (ads, tracking, referral, malware) |
| **AdGuard DNS Filter** | Ads, tracking |
| **StevenBlack/Hosts** | Ads, malware |
| **Dandelion Sprout Anti-Malware** | Malware, phishing |
| **HaGeZi Threat Intelligence** | Active threats |
| **uBlock Badware Risks** | Risky software downloads |
| **1Hosts Lite** | Balanced blocking, UX-friendly |
| **HaGeZi Referral Allowlist** | Fixes false positives |
| **Mateo's Misc Tracker Block** | My custom additions |

**Note:** These lists are quite strict, be prepared to whitelist and troubleshoot if you use my lists.
**Layered defense:** Multiple lists with different sources catch more than any single list.

## Installation

1. Install [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome)
2. Add DNS providers from `dns-providers.txt` as upstreams (set DNS settings to parallel requests)
3. Add filter lists from `filterlists-used.txt`

**Note:** This is documentation of my personal laptop setup.

## See Also

- [Main Reynard README](../README.md)
- [uBlock Origin Hard Mode Guide](../ublock/README.md)

