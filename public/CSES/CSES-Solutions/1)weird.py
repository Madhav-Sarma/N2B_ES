n=int(input())
def is_weird(n):
    if n==1:
        print(1)
    else:
        while n!= 1:
            print(n,end=' ')
            if n%2==0:
                n//=2
            else:
                n=3*n+1
        print(1)
is_weird(n)