/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {number}
 * @param {number} n
 */
function bulbSwitch(n: number): number {
    return Math.floor(Math.sqrt(n + 0.5))
};