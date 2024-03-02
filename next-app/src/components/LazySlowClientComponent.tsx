'use client'

import { slowResponse } from "@/lib/slowResponse";

const LazySlowClientComponent = ({ description }: { description: string }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(<p>slow {description}: john</p>)
    }, 0)
  })
};

export default LazySlowClientComponent
