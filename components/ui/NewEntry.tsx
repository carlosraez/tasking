import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      <Button
        startIcon={<AddCircleOutlineOutlinedIcon />}
        fullWidth
        variant="outlined"
      >
        Agregar Tarea
      </Button>
      <TextField
        fullWidth
        sx={{
          marginTop: 2,
          marginBottom: 1,
          placeHolder: "Nueva entrada",
        }}
        autoFocus
        multiline
        label="Nueva Entrada"
        helperText="Ingrese un valor"
      ></TextField>
      <Box display="flex" justifyContent="space-between">
        <Button variant="text">Cancelar</Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default NewEntry;
