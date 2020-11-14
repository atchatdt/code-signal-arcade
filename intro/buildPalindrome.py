# https://app.codesignal.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx

# tìm được đoạn đẹp nhất => lấy phần này ra
# lấy cuỗi phía trước đoạn đó => đảo ngược lại 
# => cộng chúng lại với nhau: đoạn trước + đoạn đẹp + đoạn đảo ngược

def buildPalindrome(st):
    length = len(st)
    for i in range(length):
        subString = st[i:length]
        if isPalindrome(subString):
            print(subString,i)
            nonPalindrome = st[0:i]
            print(nonPalindrome)
            return st + nonPalindrome[::-1]
    return 'None'
def isPalindrome(string):
    return string == string[::-1]

print(buildPalindrome('abcdc'))