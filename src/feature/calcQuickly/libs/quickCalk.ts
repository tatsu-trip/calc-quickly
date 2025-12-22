// 暗号化処理関数
export const calcAmount = (amount: number, key: number): number => {
  const result = amount * key
  return result
}

export const convertHexToDecimal = (hex: string): number => {
  return parseInt(hex, 16)
}

// エラーハンドリング＆暗号返却
export function quickCalkUseCase(amount: number, key: string): number {
  const keyNumber = convertHexToDecimal(key)

  if (keyNumber < 100000 || keyNumber > 999999) {
    throw new Error('暗号化キーは6桁である必要があります')
  }
  return calcAmount(amount, keyNumber)
}
