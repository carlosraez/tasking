import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { ChangeEvent, useContext, useState } from "react";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const getCancel = () => {
    return (
      <Button variant="text" onClick={() => setIsAddingEntry(false)}>
        Cancelar
      </Button>
    );
  };

  const onSave = () => {
    if (inputValue.length > 1) {
      addNewEntry(inputValue);
      setIsAddingEntry(false);
      setTouched(false);
      setInputValue("");
    }
  };

  const getSave = () => {
    return (
      <>
        <TextField
          fullWidth
          sx={{
            marginTop: 2,
            marginBottom: 1,
            placeHolder: "Nueva entrada",
          }}
          autoFocus
          multiline
          error={inputValue.length <= 0 && touched}
          value={inputValue}
          onChange={onTextChange}
          label="Nueva Entrada"
          helperText={inputValue.length <= 0 && touched && "Ingrse un valor"}
          onBlur={() => setTouched(true)}
        ></TextField>
        <Box display="flex" justifyContent="space-between">
          {getCancel()}
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<SaveOutlinedIcon />}
            onClick={onSave}
          >
            Guardar
          </Button>
        </Box>
      </>
    );
  };

  const getAdd = () => {
    return (
      <>
        <Button
          startIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar Tarea
        </Button>
      </>
    );
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? getSave() : getAdd()}
    </Box>
  );
};

export default NewEntry;
