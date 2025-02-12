"use client"
import React from 'react'

import { MantineProvider } from '@mantine/core';

const MyMantineProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <MantineProvider>
        {children}
    </MantineProvider>
  )
}

export default MyMantineProvider