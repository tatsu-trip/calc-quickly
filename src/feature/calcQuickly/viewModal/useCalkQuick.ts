import { useState } from 'react'
import { quickCalkUseCase } from '@root/feature/calcQuickly/libs/quickCalk'
import { quickReturnUnhashUseCase } from '@root/feature/calcQuickly/libs/quickReturnUnhash'

export function useCalkQuick() {
  const [amount, setAmount] = useState('')
  const [key, setKey] = useState('')
  const [hashedNumber, setHashedNumber] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [unhashResult, setUnhashResult] = useState<number | null>(null)
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

  const unhash = () => {
    try {
      const unhashed = quickReturnUnhashUseCase(
        Number(hashedNumber),
        Number(key).toString(),
      )
      setUnhashResult(unhashed)
      setError(null)
    } catch (e) {
      setError((e as Error).message)
      setUnhashResult(null)
    }
  }

  return {
    amount,
    key,
    result,
    unhashResult,
    hashedNumber,
    error,
    setAmount,
    setKey,
    setHashedNumber,
    calculate,
    unhash,
  }
}
