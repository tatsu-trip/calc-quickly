// 復元処理関数
export const calcUnHash = (hashedNumber: number, key: number): number => {
  let x = hashedNumber | 0
  let k = key | 0

  // encrypt と同じ key 撹拌
  k = Math.imul(k ^ 0x9e3779b9, 31)

  // 4. 乗算を戻す（k|1 は必ず奇数）
  x = Math.trunc(x / (k | 1))

  // 3. ビット回転を戻す
  x = (x >>> 7) | (x << 25) | 0

  // 2. XOR を戻す
  x = x ^ (k >>> 3)

  // 1. 加算を戻す
  x = (x - k) | 0

  return x
}

export const convertHexToDecimal = (hex: string): number => {
  return parseInt(hex, 16)
}

// エラーハンドリング＆復元した金額を返却
export function quickReturnUnhashUseCase(
  hashedNumber: number,
  key: string,
): number {
  // 16進数で受け取ったkeyを10進数のkeyNumberに変換
  const keyNumber = convertHexToDecimal(key)

  if (keyNumber < 1 || keyNumber > 16777215) {
    throw new Error('暗号化キーが適切な形式でないため、計算に失敗しました。')
  }
  return calcUnHash(hashedNumber, keyNumber)
}
