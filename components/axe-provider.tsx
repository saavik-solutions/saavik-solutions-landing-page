"use client"

import { useEffect } from "react"
import React from "react"
import ReactDOM from "react-dom"

export const AxeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@axe-core/react")
        .then(axe => {
          axe.default(React, ReactDOM, 1000)
        })
        .catch(() => {
          // @axe-core/react is optional, silently ignore if not installed
        })
    }
  }, [])

  return <>{children}</>
}

