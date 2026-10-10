
#pragma once
#include <string>
#include <vector>

namespace wifihack3r {
struct AccessPoint {
    std::string id;
    std::string ssid;
    std::string bssid;
    int channel{1};
    int signalDbm{-55};
    std::string security{"WPA2-AES"};
    bool fictional{true};
};
}
