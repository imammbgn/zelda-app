import { useEffect, useState } from "react"

export const useDebounce = (initValue, delay) => {
    const [value, setValue] = useState(initValue)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setValue(initValue)
        }, delay) 

        return () => {
            clearTimeout(timerId)
        }
    },[initValue, delay])

    return value
}