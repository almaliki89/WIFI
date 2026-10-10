
cmake_minimum_required(VERSION 3.20)
project(wifi_hack3r_native LANGUAGES CXX)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
add_library(wifi_hack3r_native STATIC
  wifi_hack3r.cpp
  ../core/models/access_point.cpp
  ../core/models/handshake.cpp
  ../core/scanner/wifi_scanner.cpp
  ../core/scanner/interface_manager.cpp
  ../core/scanner/handshake_sniffer.cpp
  ../core/attacks/deauth_attack.cpp
  ../core/attacks/evil_twin.cpp
  ../core/attacks/dns_spoofer.cpp
  ../core/attacks/krack_attack.cpp
  ../core/crackers/wpa_cracker.cpp
  ../core/crackers/wps_attack.cpp
)
target_include_directories(wifi_hack3r_native PUBLIC ../core)
target_compile_definitions(wifi_hack3r_native PRIVATE WIFIHACK3R_SIMULATION_ONLY=1)
