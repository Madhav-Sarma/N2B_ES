n=int(input())

if n%2==0:
    for i in range(n//2+1):
        print(i,i+n//2,end=' ')
else:
    for i in range(n//2+2):
        print(i+n//2+1,i,end=' ')
    