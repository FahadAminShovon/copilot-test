import React, { useState } from 'react'
// import { useOutsideDetector } from './useOutSideDetector'

export const usePopover = () => {
  const [isPopupOpen, setisPopupOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClose = () => {
    setAnchorEl(null)
    setisPopupOpen(false)
  }
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget)
    setisPopupOpen(true)
  }

  return { anchorEl, isPopupOpen, handleClose, handleOpen }
}
