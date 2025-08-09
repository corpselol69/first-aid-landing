import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Testimonial = {
  id: string | number;
  author: string;
  text: string;
  sourceUrl?: string;
  createdAt?: string;
};

export type Thanks = {
  id: string | number;
  name: string;
  link?: string;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    testimonials: builder.query<Testimonial[], void>({
      query: () => "api/testimonials.json",
    }),
    thanks: builder.query<Thanks[], void>({
      query: () => "api/thanks.json",
    }),
  }),
});

export const { useTestimonialsQuery, useThanksQuery } = api;
