//加的数据
export function increment(num) {
    return {
        type: 'INCREMENT',
        num
    }
}
//减的数据
export function decrement(num) {
    return {
        type: 'DECREMENT',
        num
    }
}