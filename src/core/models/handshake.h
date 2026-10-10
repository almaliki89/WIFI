
#pragma once
#include <string>

namespace wifihack3r {
struct HandshakeRecord {
    std::string id;
    std::string networkId;
    std::string createdAt;
    bool simulated{true};
    std::string note{"Educational placeholder; not a captured handshake."};
};
}
