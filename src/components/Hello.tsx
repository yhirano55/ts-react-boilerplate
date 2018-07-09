import * as React from "react"

export type HelloProps = {
  compiler: string
  framework: string
}

export const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
)
