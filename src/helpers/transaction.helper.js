export const formatBalanceSheet = transactions => {
  let length = transactions.length - 1
  let total = 0

  for (let i = length; i >= 0; i--) {
    
    let current = transactions[i]
    total += current.type ? current.amount : -Math.abs(current.amount)

    transactions[i].balance = total
  }
  return transactions
}