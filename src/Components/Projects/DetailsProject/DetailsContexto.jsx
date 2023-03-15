import { useState, createContext } from "react";


export const DetailsContexto = createContext()

export function DetailsProvider(props) {
  const [projectIdentifier, setprojectIdentifier] = useState(null)

  return (
    <DetailsContexto.Provider value={[projectIdentifier, setprojectIdentifier]}>
      {props.children}
    </ DetailsContexto.Provider>
  )
}
