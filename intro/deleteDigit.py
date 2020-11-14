# https://app.codesignal.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX/solutions

def deleteDigit(n):
    n = str(n)
    return max(int(''.join(n[:i]+n[i+1:])) for i in range(len(n)))