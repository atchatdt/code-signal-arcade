
def phoneCall(min1, min2_10, min11, S):
    temp = 0
    if S>=min1:
        S -= min1
        temp += 1
    else:
        return temp
    
    for x in range(0,9):
        if S>=min2_10:
            S -= min2_10
            temp +=1
    if temp == 10: 
        while S>=min11:
            S -= min11
            temp += 1
        
    return temp

##########

def phoneCall(min1, min2_10, min11, s):

    if s < min1:
        return 0
    for i in range(2, 11):
        if s < min1 + min2_10 * (i - 1):
            return i - 1
    return (s - min1 - min2_10 * 9.0) //min11 + 10