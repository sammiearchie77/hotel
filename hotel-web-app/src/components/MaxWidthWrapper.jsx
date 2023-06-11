export default function MaxWidthWrapper ({ children, val, backgroundColor, styles }) {

    return (
        <div 
            style={{
                backgroundColor,
                ...styles
            }}>
                <div 
                    style={{
                        maxWidth: val,
                        margin: "auto:"
                    }}>
                    { children }
                </div>
        </div>
    )
}