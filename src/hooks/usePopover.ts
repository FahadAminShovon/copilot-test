import React, { useState } from 'react'
import { useOutsideDetector } from './useOutSideDetector'
// import { useOutsideDetector } from './useOutSideDetector'

export const usePopover = (prop?: { autoClose?: boolean }) => {
  const [isPopupOpen, setisPopupOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClose = () => {
    setAnchorEl(null)
    setisPopupOpen(false)
  }
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget.parentElement)
    setisPopupOpen(true)
  }

  useOutsideDetector({
    anchorEl: prop?.autoClose ? anchorEl : null,
    callback: handleClose,
  })

  return { anchorEl, isPopupOpen, handleClose, handleOpen }
}
