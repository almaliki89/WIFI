
#pragma once
#include "../models/access_point.h"
#include <vector>

namespace wifihack3r {
class WifiScanner {
public:
    std::vector<AccessPoint> demoNetworks() const;
};
}
