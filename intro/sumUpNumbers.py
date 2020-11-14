# https://app.codesignal.com/arcade/intro/level-12/YqZwMJguZBY7Hz84T

import re

def sumUpNumbers(inputString):
    l = re.findall(r"\d+",inputString)
    return sum([int(i) for i in l])