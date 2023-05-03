import { createSlice } from "@reduxjs/toolkit";

const inicialStateUsuario = {
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    nombreUsuario: "",
}

export const usuarioReducer = createSlice({
    name: "usuario",
    initialState: inicialStateUsuario,
    reducers: {
        setearDatos: (state, action) =>{
            const { nombre, primerApellido, segundoApellido, nombreUsuario } = action.payload;

            state.nombre = nombre;
            state.primerApellido = primerApellido;
            state.segundoApellido = segundoApellido;
        },
        limpiarDatos: (state) => {
            state.nombre = "";
            state.primerApellido = "";
            state.segundoApellido = "";
            state.nombreUsuario = "";

        },
        cambiarNombreUsuario: (state, action) => {
            state.nombreUsuario = action.payload
        }
    }
});

export const { setearDatos,  limpiarDatos, cambiarNombreUsuario} = usuarioReducer.actions;
export default usuarioReducer.reducer;