import React from 'react'

export type CustomQRCodeProps = {
  value?: string
  image?: string
  imageBackground?: string
  imagePosition?: 'center' | 'bottom right'
  tooltipMessage?: React.ReactNode | string
}
