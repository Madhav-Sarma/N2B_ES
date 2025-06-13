dna = input()
n = len(dna)

# Method-1:
c = 1
ans = 1
for i in range(n-1):
    if dna[i] == dna[i+1]:
        c += 1
    else:
        c = 1
    ans = max(c,ans)
print(ans)