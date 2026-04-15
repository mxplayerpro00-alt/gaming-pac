function FindProxyForURL(url, host) {

    var directList = [
        "*.mlbb.com",
        "*.mobilelegends.com",
        "*.riotgames.com",
        "*.garena.com",
        "*.steamcontent.com",
        "*.epicgames.com"
    ];

    for (var i = 0; i < directList.length; i++) {
        if (shExpMatch(host, directList[i])) {
            return "DIRECT";
        }
    }

    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    return "DIRECT";
}
