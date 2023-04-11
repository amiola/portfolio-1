import React, { useState } from 'react'
import Context from './Context'

const Provider = ({children}) => {
    const [language, setLanguage] = useState(0);
  return (
    <>
    <Context.Provider value={{language, setLanguage}}>
        {children}
    </Context.Provider>
    </>
  )
}

export default Provider