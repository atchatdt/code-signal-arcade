# https://app.codesignal.com/arcade/intro/level-8/rRGGbTtwZe2mA8Wov
def firstDigit(ipStr):
    for i in range(len(ipStr)):
        if ipStr[i].isdigit(): return ipStr[i]
    return -1

print(firstDigit('_Aas_23'))