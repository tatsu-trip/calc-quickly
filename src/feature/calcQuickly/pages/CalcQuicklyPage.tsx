import { useEncrypt } from '@root/feature/calcQuickly/viewModal/useCalkQuick'

export function CalcQuicklyPage() {
  const { amount, key, result, error, setAmount, setKey, calculate } =
    useEncrypt()

  return (
    <div>
      <h2>金額暗号化</h2>

      <input
        type="number"
        placeholder="金額"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="number"
        placeholder="暗号化キー（6桁）"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />

      <button onClick={calculate}>計算</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <p>結果：{result}</p>}
    </div>
  )
}
