
// const validation = ( { username, password } ) => {
    
//     const errors = {};

//     if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)){
//         errors.username = "El email es inválido";
//     }
//     if(!username){
//         errors.username = "Este campo no puede estar vacío";
//     }
//     if(username.length > 35){
//         errors.username = "El email no puede superar los 35 caracteres";
//     }
//     if(!password.match(/\d/)){
//         errors.password = "La contraseña debe contener al menos un número";
//     }
//     if(password.length < 6 || password.length > 10){
//         errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
//     }
//     return errors;
// };

// export default validation;





const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassNum = /^[a-z0-9_-]{6,18}$/;

export function validation ({ username, password }) {
    const errors = {};        
    // !errors.username ? alert('Debes ingresar un username') : errors.username = errors.username;
    // errors.username.length > 35 ? alert('muy largo') : errors.username = errors.username;    
    if (username) {
        if (!regexEmail.test(username)) {
            errors.username = 'El username debe ser un email';      
        } else if (username.length > 30) errors.username = 'El username es demasiado largo';
    };

    if (password) {
        if (password.length > 6 && password.length < 10) {
            if (!regexPassNum.test(password)) {
                errors.password = 'Debe ingresar un password válido'; 
            };
        } else errors.password = 'El password debería tener entre 6 y 10 caracteres';
    };

    return errors;
};
