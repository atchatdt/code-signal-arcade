# https://app.codesignal.com/arcade/intro/level-10/HJ2thsvjL25iCvvdm

import re

def isMAC48Address(s):
    return bool(re.match(('^' + '[\dA-F]{2}-' * 6)[:-1] + '$', s))

print(isMAC48Address('00-1B-63-84-45-E6'))