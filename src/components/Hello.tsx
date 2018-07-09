import * as React from "react"
import * as style from "./Hello.scss"

export type HelloProps = {
  compiler: string
  framework: string
}

export const Hello = (props: HelloProps) => (
  <h1 className={style.title}>
    Hello from {props.compiler} and {props.framework}!
  </h1>
)
