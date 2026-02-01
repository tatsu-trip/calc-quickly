import { useCalkQuick } from '@root/feature/calcQuickly/viewModal/useCalkQuick'

export function CalcQuicklyPage() {
  const {
    amount,
    key,
    result,
    hashedNumber,
    error,
    setAmount,
    setKey,
    setHashedNumber,
    calculate,
    unhash,
  } = useCalkQuick()

  return (
    <>
      <div>
        <h2>・金額暗号化</h2>

        <input
          type="number"
          placeholder="金額"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="string"
          placeholder="暗号化キー（6桁）"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />

        <button onClick={calculate}>暗号化</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result !== null && <p>暗号化結果：{result}</p>}
      </div>

      <div>
        <h2>・暗号復元</h2>

        <input
          type="number"
          placeholder="暗号化された金額"
          value={hashedNumber}
          onChange={(e) => setHashedNumber(e.target.value)}
        />

        <input
          type="string"
          placeholder="暗号化キー（6桁）"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />

        <button onClick={unhash}>復元</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result !== null && <p>復元結果：{result}</p>}
      </div>
    </>
  )
}
