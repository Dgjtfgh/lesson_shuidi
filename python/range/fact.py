def fact(n):
    jc = 1
    if n == 0:
        return 1
    if n < 0:
        return 0
    # for i in range(1,n):
    #     jc = jc * i
    return n * fact(n-1)
print(fact(8))
print(fact(0))

