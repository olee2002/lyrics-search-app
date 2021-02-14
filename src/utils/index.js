export const truncate = (text) => {
   return text.slice(0, 40) + (text.length > 40 ? '...' : '')
}
