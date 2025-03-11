import { http } from '@/utils/http'
export interface IFooItem {
  id: string
  name: string
}

/** GET 请求 */
export const loginRequest = (account: string, password: string) => {
  return http.get<IFooItem>(`/prod-api/plcuser/detail/api-login/${account}/${password}`)
}

/** POST 请求 */
export const postFooAPI = (name: string) => {
  return http.post<IFooItem>('/foo', { name }, { name })
}
