import { agent } from '../utils/agent'

export async function getCountryWiseList(params: Record<string, string>) {
  return new Promise((resolve, reject) => {
    const url = new URLSearchParams('')

    if (params?.limit) {
      url.append('limit', params?.limit)
    }

    agent.get(`/get-all?${url.toString()}`, (error, data) => {
      resolve({
        error: error?.response?.text,
        data: error ? null : JSON.parse(data.text)
      })
    })
  })
}
