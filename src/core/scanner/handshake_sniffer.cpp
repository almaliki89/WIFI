
#include "handshake_sniffer.h"
namespace wifihack3r {
HandshakeRecord HandshakeSniffer::makeDemoRecord(const std::string& networkId) const {
    return {"demo-handshake-001", networkId, "simulation", true,
            "Fictional classroom record; no radio packets were captured."};
}
}
