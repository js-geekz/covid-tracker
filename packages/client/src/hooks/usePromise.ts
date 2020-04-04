import { useState } from 'react'

interface props<T> {
  service: (params?: Record<string, any>) => Promise<T>
  payload?: Record<string, any>
}

interface PromiseState {
  fetching: boolean
  error?: string
  data: Record<string, any>
}

interface PromiseResponse extends PromiseState {
  fetchData: () => void
}

export default function usePromise<T>({ service, payload }: props<T>): PromiseResponse {
  const [state, setState] = useState<PromiseState>({
    fetching: false,
    data: null,
    error: undefined
  })

  async function fetchData(): Promise<void> {
    setState({
      data: null,
      error: null,
      fetching: true
    })

    const { data, error } = (await service(payload)) as Record<string, any>

    setState({
      data,
      error,
      fetching: false
    })
  }

  return { ...state, fetchData }
}
