import React from 'react'

// This component has been taken from React table docs
// Therefore we dont know much about its implementation

export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
        <>
            <input type='checkbox' ref={resolvedRef} {...rest} />
        </>
    )
})

