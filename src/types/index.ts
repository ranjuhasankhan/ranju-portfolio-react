import React from 'react'

declare module 'react-intersection-observer' {
  export function useInView(options?: any): {
    ref: React.RefObject<any>
    inView: boolean
  }
}
