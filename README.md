# WiFiHack3r 🚨
**The Ultimate Windows WiFi Penetration Testing Suite**
*Built for Windows 10/11 + VSCode + Mistral 8B*

---

## **⚠️ WARNING**
This tool is for **EDUCATIONAL & LEGAL SECURITY TESTING ONLY**.
Unauthorized use is **ILLEGAL** and will get your ass **ARRESTED**.
**WE ARE NOT RESPONSIBLE** for your stupidity.

---

## **🔥 FEATURES**
✅ **WiFi Scanning** – Detect all nearby networks (BSSID, ESSID, Channel, Signal, Encryption)
✅ **Deauthentication Attack** – Force devices to reconnect & capture handshakes
✅ **Evil Twin Attack** – Create a rogue AP to phish credentials
✅ **DNS Spoofing** – Redirect traffic to malicious servers
✅ **KRACK Attack** – Exploit WPA2 key reinstallation vulnerabilities
✅ **WPA/WPA2 Cracking** – Brute-force with aircrack-ng & hashcat
✅ **WPS Attacks** – Pixie Dust & brute-force Reaver/Bully
✅ **Router Exploits** – 25+ CVEs for Huawei, TP-Link, D-Link, etc.
✅ **Backdoor Persistence** – Reverse shells, SSH, web shells, and more
✅ **Handshake Capture** – Save `.cap` files for offline cracking
✅ **Wordlist Management** – Organize & optimize password lists

---

## **🛠️ REQUIREMENTS (WINDOWS ONLY)**
- **Windows 10/11 (64-bit)**
- **Visual Studio 2022** (C++17, MSVC)
- **Node.js 18+**
- **Python 3.10+**
- **Npcap** (Packet capture library)
- **WinPcap** (Legacy support)
- **Alfa AWUS036ACH** (Monitor mode compatible adapter)
- **External Tools** (Place in `C:\WiFiHack3r\tools\`):
  - [aircrack-ng.exe](https://www.aircrack-ng.org/)
  - [hashcat.exe](https://hashcat.net/hashcat/)
  - [mdk4.exe](https://github.com/aircrack-ng/mdk4)
  - [reaver.exe](https://github.com/t6x/reaver-wps-fork-t6x)
  - [bully.exe](https://github.com/aanarchyy/bully)
  - [hostapd.exe](https://w1.fi/hostapd/) (Windows port)
  - [dnsmasq.exe](https://thekelleys.org.uk/dnsmasq/doc.html) (Windows port)

---

## **📦 INSTALLATION**
### **1. Clone & Setup**
```powershell
git clone https://github.com/YOUR_USERNAME/WiFiHack3r.git
cd WiFiHack3r
npm install