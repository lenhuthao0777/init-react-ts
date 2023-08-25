import { useRef, useLayoutEffect, useState, FC, ReactNode } from 'react'

type TPropsType = {
  children?: ReactNode
  /**
   * Instantly expand and collapse children.
   */
  instant?: string
  /**
   * Determines if children should render `null` or not while closed.
   */
  lazy?: boolean
  onComplete?: (open: boolean) => void
  /**
   * Controls whether or not children are visible.
   */
  open: boolean
  transitionDuration?: string
  transitionTimingFunction?: string
}

const Collapse: FC<TPropsType> = ({
  children,
  instant,
  lazy,
  onComplete,
  open,
  transitionDuration = '200ms',
  transitionTimingFunction = 'ease-out',
  ...restProps
}) => {
  const transition = `height ${transitionDuration} ${transitionTimingFunction}`

  const [renderChildren, setRenderChildren] = useState<boolean>(lazy ? open : true)

  const containRef = useRef<any>(null)

  const firstRender = useRef(true)

  function openCollapse() {
    const node: any = containRef.current
    requestAnimationFrame(() => {
      node.style.height = node.scrollHeight + 'px'
    })
  }

  function closeCollapse() {
    const node: any = containRef.current
    requestAnimationFrame(() => {
      node.style.height = node.offsetHeight + 'px'
      node.style.overflow = 'hidden'
      requestAnimationFrame(() => {
        node.style.height = 0
      })
    })
  }

  useLayoutEffect(() => {
    if (lazy) {
      if (open) {
        if (renderChildren) {
          openCollapse()
        } else {
          setRenderChildren(true)
        }
      } else {
        closeCollapse()
      }
    } else {
      if (open) {
        openCollapse()
      } else {
        closeCollapse()
      }
    }
  }, [open, lazy, renderChildren])

  useLayoutEffect(() => {
    const node: any = containRef.current
    function handleComplete() {
      node.style.overflow = open ? 'initial' : 'hidden'
      if (open) {
        node.style.height = 'auto'
      }
      if (!open && lazy) {
        setRenderChildren(false)
      }
      if (onComplete) {
        onComplete(open)
      }
    }
    function handleTransitionEnd(event: any) {
      if (event.target === node && event.propertyName === 'height') {
        handleComplete()
      }
    }
    if (instant || firstRender.current) {
      handleComplete()
      firstRender.current = false
    }
    node.addEventListener('transitionend', handleTransitionEnd)
    return () => {
      node.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [open, instant, lazy, onComplete])

  useLayoutEffect(() => {
    if (open) {
      openCollapse()
    }
  }, [renderChildren, open])

  return (
    <div
      style={{
        transition: instant || firstRender.current ? undefined : transition
      }}
      ref={containRef}
      {...restProps}
    >
      {renderChildren ? children : null}
    </div>
  )
}

// Collapse.propTypes = {
//   open: PropTypes.bool,

//   lazy: PropTypes.bool,

//   instant: PropTypes.bool,

//   /**
//    * Called when opening or closing.
//    */
//   onComplete: PropTypes.func,
// }

export default Collapse
