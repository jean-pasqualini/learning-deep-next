import { ReactNode } from "react"

const NestedPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <style type="text/css">
        {`
            body { background: black; padding: 10px; }
        `}
      </style>
      {children}
    </>
  )
}

export { NestedPageLayout }