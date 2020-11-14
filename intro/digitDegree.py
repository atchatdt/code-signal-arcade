# https://app.codesignal.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo

def digitDegree(n):
    if n < 10:
        return 0

    sumOfDigits = sum([int(i) for i in str(n)])
    return digitDegree(sumOfDigits) + 1


def digitDegree(n):
    d = 0
    while n >= 10:
        n = sum([int(i) for i in str(n)])
        d += 1
    return d

print(digitDegree(10))