export const required = (value) => {
    return value ? null : 'Este campo é obrigatório';
};
  
  export const minLength = (length) => (value) => {
    return value && value.length >= length ? null : `Digite pelo menos ${length} caracteres`;
};
  
  export const uniqueName = (existingNames) => (value) => {
    return existingNames.includes(value) ? 'Este nome já está em uso' : null;
};
  