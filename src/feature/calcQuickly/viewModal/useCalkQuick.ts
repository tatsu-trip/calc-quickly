import { useState } from 'react'
import { quickCalkUseCase } from '@root/feature/calcQuickly/libs/quickCalk'

export function useEncrypt() {
  const [amount, setAmount] = useState('')
  const [key, setKey] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const calculate = () => {
    try {
      const encrypted = quickCalkUseCase(Number(amount), Number(key).toString())
      setResult(encrypted)
      setError(null)
    } catch (e) {
      setError((e as Error).message)
      setResult(null)
    }
  }

  return {
    amount,
    key,
    result,
    error,
    setAmount,
    setKey,
    calculate,
  }
}
