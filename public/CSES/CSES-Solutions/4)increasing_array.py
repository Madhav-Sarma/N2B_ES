n=int(input())
x=list(map(int,input().split()))
result=0
for i in range(n-1):
    if x[i+1]<x[i]:
        result+=(x[i]-x[i+1])
        x[i+1]=x[i]
print(result)