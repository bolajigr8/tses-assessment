'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

export function SafeImage({ onError, ...props }: ImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return null
  }

  return (
    <Image
      {...props}
      onError={(e) => {
        setHasError(true)
        onError?.(e)
      }}
    />
  )
}
