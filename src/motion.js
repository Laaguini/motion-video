import {useState, useEffect} from "react"
import "./motion.css"

const Motion = ({children}) => {
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        let slideShowInterval = setInterval(() => {
            setCurrent((current + children.length + 1) % children.length)
        }, 5000)

        return () => {
            clearInterval(slideShowInterval)
        }
    })
    return (
        <div className="motion-video">
            {children.length > 1 &&
            children.map((Child, i) =>  (i === current) && <div key={i} className={`motion-wrapper`}>{Child}</div>)
            || <div className={`motion-wrapper`}>{children}</div>
        }
        </div>
    )
}


export default Motion