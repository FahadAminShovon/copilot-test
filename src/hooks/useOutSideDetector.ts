import { useEffect } from 'react'

export function useOutsideDetector<Targs = any, TReturn = void>({
  anchorEl,
  callback,
}: {
  anchorEl: HTMLElement | null
  callback: (...args: Targs[]) => TReturn
}) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (anchorEl === null) return
      if (anchorEl && !anchorEl.contains(event.target)) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [anchorEl])
}
