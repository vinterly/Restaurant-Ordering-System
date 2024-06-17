// Checks if form is invalid
// From: https://github.com/Yazdun/react-fcc-forms

export const isFormInvalid = errors => {
    if (Object.keys(errors).length > 0) return true;
    return false;
};