import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from "../../types/LoginUser"


export const loginUserApi = createApi({
  reducerPath: 'userLogin',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getLoginUser: builder.query<User[], void>({
      query: () => {
        return {
            url: "/users",
            method: "GET",

        }
      },
    }),
  }),
})


export const { useGetLoginUserQuery } = loginUserApi