function FindProxyForURL(url, host) {

    // ===== LOCAL / LAN =====
    // Para hindi maapektuhan ang local network at WiFi devices
    if (isPlainHostName(host) ||
        dnsDomainIs(host, ".local") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0")) {
        return "DIRECT";
    }

    // ===== MOBILE LEGENDS / MOONTON =====
    if (dnsDomainIs(host, "mobilelegends.com") ||
        dnsDomainIs(host, "mlbb.com") ||
        dnsDomainIs(host, "moonton.com")) {
        return "DIRECT";
    }

    // ===== RIOT GAMES =====
    if (dnsDomainIs(host, "riotgames.com") ||
        dnsDomainIs(host, "leagueoflegends.com") ||
        dnsDomainIs(host, "valorant.com")) {
        return "DIRECT";
    }

    // ===== GARENA =====
    if (dnsDomainIs(host, "garena.com") ||
        dnsDomainIs(host, "freefiremobile.com")) {
        return "DIRECT";
    }

    // ===== STEAM / EPIC =====
    if (dnsDomainIs(host, "steamcontent.com") ||
        dnsDomainIs(host, "steampowered.com") ||
        dnsDomainIs(host, "epicgames.com")) {
        return "DIRECT";
    }

    // ===== GAME SERVER PATTERNS =====
    if (shExpMatch(host, "*.game.*") ||
        shExpMatch(host, "*.play.*") ||
        shExpMatch(host, "*.match.*") ||
        shExpMatch(host, "*.server.*")) {
        return "DIRECT";
    }

    // ===== DEFAULT =====
    // Pinaka best for gaming:
    // DIRECT = lowest latency + lowest ping + stable connection
    return "DIRECT";
}
