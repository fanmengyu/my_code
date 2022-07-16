function isPowerOfFour(num) {
    // 补充具体实现
    nun = parseInt(num)
    return num > 0 && (num & (num - 1)) == 0 && num % 3 == 1;
}