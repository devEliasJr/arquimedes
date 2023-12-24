import { Box } from '@mui/material'

export default function DefaultPageStructure({children}: any) {
  return (
    <Box maxWidth={"1500px"} m={"0 auto"} p={8}>
      {children}
    </Box>
  )
}
