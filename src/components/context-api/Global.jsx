import { createContext, useState } from "react"
import ComOne from "./ComOne"
import ComTwo from "./ComTwo"


export const changeColor = createContext()

const Global = () => {
    const [bgColor, setBgColor] = useState('red')
    
    return (
        < div style={{color : bgColor}} >
            <changeColor.Provider value={{bgColor,setBgColor}} >
                    <ComOne/>
                    <ComTwo/>
            </changeColor.Provider>
        </div>
    )
}

export default Global
