# 319.灯泡开关
> 难度: 中等
> 
> https://leetcode.cn/problems/partition-labels/

## 题目
给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。

返回一个表示每个字符串片段的长度的列表。

### 示例1
```
输入：s = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。
```

### 示例2
```
输入：s = "eccbbbbdec"
输出：[10]
```

### 提示
```
1 <= s.length <= 500
s 仅由小写英文字母组成
```

## 题解
```javascript
let partitionLabels = (s) => {
    // 记录不同字母最后一次出现的下标 {a: 8}
    const maxPos = {}
    for (let i = 0; i < s.length; i++) {
        maxPos[s[i]] = i
    }
    // 每个片段是一个区间，有开始和结束 [0, 9]
    const res = []
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        // 当前字母对应的最大下标
        const curCharMaxPos = maxPos[s[i]]
        end = Math.max(end, curCharMaxPos)
        if (end === i) {
            res.push(i - start + 1)
            start = i + 1
        }
    }
    return res
}
```
