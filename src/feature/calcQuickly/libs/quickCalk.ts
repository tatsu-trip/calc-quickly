export function quickCalkUseCase(amount: number, key: number): number {
  if (key < 100000 || key > 999999) {
    throw new Error('暗号化キーは6桁である必要があります')
  }
  const calcAmount = (amount: number, key: number): number => {
    return amount * key
  }
  return calcAmount(amount, key)
}
