# https://app.codesignal.com/arcade/intro/level-12/sqZ9qDTFHXBNrQeLC/

def fileNaming(names):
    for i in range(len(names)):
        if names[i] in names[:i]:
            j = 1
            while names[i]+"("+str(j)+")" in names[:i]:
                j += 1
            names[i] += "("+str(j)+")"
    return names

print(fileNaming( ["a(1)", 
 "a(6)", 
 "a(1)", 
 "a(1)", 
 "a(1)", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a"]))