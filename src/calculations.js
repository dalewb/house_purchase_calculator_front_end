
export const fixedMonthlyPayment = (loanAmt, interestRate, loanTerm) => {
  const loanTermInMonths = loanTerm * 12
  const monthlyInterestRate = interestRate / 12
  const monthlyPayment = loanAmt * ((monthlyInterestRate * Math.pow((1 + monthlyInterestRate), loanTermInMonths)) / ((Math.pow((1 + monthlyInterestRate), loanTermInMonths)) - 1))
  return monthlyPayment.toFixed(2)
}
