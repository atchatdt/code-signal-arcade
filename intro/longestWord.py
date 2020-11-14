# https://app.codesignal.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma

import re
def longestWord(text):
    return max(re.split('[^a-zA-Z]', text), key=len)

print(longestWord("You are the best!!!!!!!!!!!! CodeFighter ever!"))