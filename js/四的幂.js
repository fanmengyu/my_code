//2的幂有一个特点就是二进制只有一个1，
//判断是否是4的幂，在此条件的基础上还要保证1的位数一定在奇数位 (num&0x55555555)==num

function isPowerOfFour(num) {
    // 补充具体实现
    nun = parseInt(num)
    return num > 0 && (num & (num - 1)) == 0 && num % 3 == 1;
}