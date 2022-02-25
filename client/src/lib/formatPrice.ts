export function parsePrice(cents: number) {
  const dollars = cents / 100
  return dollars.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  
}