export function timestampToDate(timestamp: number): string {
    const date = new Date(timestamp*1000)
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString().slice(0, 5)}`
}