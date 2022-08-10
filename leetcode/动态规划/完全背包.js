function testMultiPack() {
    const bagSize = 10;
    const weightArr = [1, 3, 4],
      valueArr= [15, 20, 30],
      amountArr = [2, 3, 2];
    for (let i = 0, length = amountArr.length; i < length; i++) {
      while (amountArr[i] > 1) {
        weightArr.push(weightArr[i]);
        valueArr.push(valueArr[i]);
        amountArr[i]--;
      }
    }
    const goodsNum = weightArr.length;
    const dp = new Array(bagSize + 1).fill(0);
    // 遍历物品
    for (let i = 0; i < goodsNum; i++) {
      // 遍历背包容量
      for (let j = bagSize; j >= weightArr[i]; j--) {
        dp[j] = Math.max(dp[j], dp[j - weightArr[i]] + valueArr[i]);
      }
    }
    console.log(dp);
  }
  testMultiPack();