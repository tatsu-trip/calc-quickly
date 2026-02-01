// 暗号化処理関数
// export const calcAmount = (amount: number, key: number): number => {
//   const result = amount * key
//   return result
// }

export const calcAmount = (amount: number, key: number): number => {
  if (!Number.isInteger(amount) || !Number.isInteger(key)) {
    throw new Error('金額と暗号化キーは整数でなければなりません。')
  }

  let x = amount | 0
  let k = key | 0

  // key を直接使わず撹拌
  k = Math.imul(k ^ 0x9e3779b9, 31)

  // 1. 加算
  x = (x + k) | 0

  // 2. XOR
  x = x ^ (k >>> 3)

  // 3. ビット回転
  x = (x << 7) | (x >>> 25) | 0

  // 4. key 依存の乗算
  x = Math.imul(x, k | 1)

  return x >>> 0
}

export const convertHexToDecimal = (hex: string): number => {
  return parseInt(hex, 16)
}

// エラーハンドリング＆暗号返却
export function quickCalkUseCase(amount: number, key: string): number {
  // 16進数で受け取ったkeyを10進数のkeyNumberに変換
  const keyNumber = convertHexToDecimal(key)

  if (keyNumber < 1 || keyNumber > 16777215) {
    throw new Error('暗号化キーが適切な形式でないため、計算に失敗しました。')
  }
  return calcAmount(amount, keyNumber)
}
