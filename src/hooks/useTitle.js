import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - DEEP CODE`
    }, [title])
}

export default useTitle