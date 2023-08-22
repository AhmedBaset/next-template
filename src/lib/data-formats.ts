export function formatDate(date: Date): string {
  return date.toLocaleDateString(undefined, {
    dateStyle: "medium",
  });
}

export function formatCurrency(amount: number): string {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
}
