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
