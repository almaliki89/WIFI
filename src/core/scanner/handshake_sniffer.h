
#pragma once
#include "../models/handshake.h"

namespace wifihack3r {
class HandshakeSniffer {
public:
    HandshakeRecord makeDemoRecord(const std::string& networkId) const;
};
}
