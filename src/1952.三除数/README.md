# 1952.三除数
> 难度: 简单
> 
> https://leetcode.cn/problems/three-divisors/description/

## 题目
给你一个整数 n 。如果 n 恰好有三个正除数 ，返回 true ；否则，返回 false 。

如果存在整数 k ，满足 n = k * m ，那么整数 m 就是 n 的一个 除数 。

### 示例1
```
输入：n = 2
输出：false
解释：2 只有两个除数：1 和 2 。
```

### 示例2
```
输入：n = 4
输出：true
解释：4 有三个除数：1、2 和 4 。
```

### 提示
```
1 <= n <= 10^4
```

## 题解
```javascript
function isThree(n: number): boolean {  
    let dividerArr: number[] = [];  
  
    for (let i = 1; i <= n; i++) {  
        if (dividerArr.includes(i)) {  
            continue  
        }  
        if (n % i === 0) {  
            dividerArr.push(i)  
            if (n / Math.floor(i) !== i) {
                dividerArr.push(n / Math.floor(i))
            }
        }  
    }  
    return dividerArr.length === 3 ? true : false  
}
```
