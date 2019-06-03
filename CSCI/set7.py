# A
def power(a,n):
    if n==0:
        return 1
    return power(a,n-1) * a

print(power(2,3))


# B
def series(n):
    if n<=1:
        return 1
    return power(n,n-1)/(n-1) + series(n-1)

print(series(2))


# C
def numDigits(n):
    if n == 0:
        return 0
    return 1 + numDigits(int(n/10))

print(numDigits(1234))


# D
def spaceit(istr):
    if len(istr)==1:
        return istr
    if istr[-1] == istr[:-1][-1]:
        return spaceit(istr[:-1]) + " " + istr[-1]
    return spaceit(istr[:-1]) + istr[-1]

print(spaceit('abcdeffghhh'))


# E
def int2str(n):
    s = "0123456789"
    if n == 0:
        return ""
    return int2str(int(n/10))+  s[n%10]

print(type(int2str(345)))
print(int2str(345))


# F
def concertBase(n,base):
    s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if n == 0:
        return ""
    return concertBase(n//base,base) + s[n%base]

print(concertBase(47,16))


