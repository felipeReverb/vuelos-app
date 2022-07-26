import { AppBar, Toolbar, Typography } from '@mui/material'

export const Header = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 10, bgcolor: "#202a43" }} >
      <Toolbar>
        <Typography variant="h6">
          Buscador de Vuelos
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
