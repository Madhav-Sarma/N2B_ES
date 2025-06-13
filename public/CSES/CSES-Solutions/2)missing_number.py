n=int(input())
a=list(map(int,input().split()))
# O(n * log(n)) + O(n-1) solution
'''
a.sort() # O(n * log(n))
f=0
for i in range(n-1):
    if (i+1)!=a[i]:
        f=1
        print(i+1)
        break
if f==0:
    print(n)
'''

# O(1) + O(n) solution

sum_n=n*(n+1)//2
curr_sum=sum(a)
#sum(a) is same as the following
'''
curr_sum=0
for i in a:
    curr_sum+=i
'''
print(sum_n-curr_sum)