
#include "wifi_scanner.h"

namespace wifihack3r {
std::vector<AccessPoint> WifiScanner::demoNetworks() const {
    return {
        {"lab-001", "Classroom-Lab", "02:00:00:00:00:01", 1, -42, "WPA3-SAE", true},
        {"lab-002", "Legacy-Router-Demo", "02:00:00:00:00:02", 6, -67, "WPA2-AES", true},
        {"lab-003", "Guest-Network-Demo", "02:00:00:00:00:03", 11, -74, "Open (demo)", true}
    };
}
}
