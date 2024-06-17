// Validations for input fields
// Based on: https://github.com/Yazdun/react-fcc-forms

export const first_name_validation = {
    inputName: "firstName",
    label: "First name",
    placeholder: "First Name",
    type: "text",
    id: "first-name",
    validation: {
        required: { 
            value: true, 
            message: "required" 
        },
        maxLength: {
            value: 30,
            message: "max length is 30"
        },
    },
};

export const last_name_validation = {
    inputName: "lastName",
    label: "Last name",
    placeholder: "Last Name",
    type: "text",
    id: "last-name",
    validation: {
        required: { 
            value: true, 
            message: "required" 
        },
        maxLength: {
            value: 30,
            message: "max length is 30"
        },
    },
};

export const email_validation = {
    inputName: "email",
    label: "Email Address",
    placeholder: "Email Address",
    type: "email",
    id: "email",
    validation: {
        required: { 
            value: true, 
            message: "required" 
        },
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "invalid email address"
        },
    },
};

export const street_validation = {
    inputName: "street",
    label: "Street",
    placeholder: "Street",
    type: "text",
    id: "street",
    validation: {
        required: { 
            value: true, 
            message: "required" 
        },
        maxLength: {
            value: 60,
            message: "max length is 60"
        },
    },
};

export const city_validation = {
    inputName: "city",
    label: "City",
    placeholder: "City",
    type: "text",
    id: "city",
    validation: {
        required: { 
            value: true, 
            message: "required" 
        },
        maxLength: {
            value: 60,
            message: "max length is 60"
        },
    },
};

export const state_validation = {
    inputName: "state",
    label: "State",
    placeholder: "State",
    type: "text",
    id: "state",
    validation: {
        maxLength: {
            value: 30,
            message: "max length is 30"
        },
    },
};

export const zip_code_validation = {
    inputName: "zipCode",
    label: "Zip Code",
    placeholder: "Zip Code",
    type: "text",
    id: "zip-code",
    validation: {
        required: { 
            value: true, 
            message: "required" 
        },
        maxLength: {
            value: 12,
            message: "max length is 12"
        },
    },
};

export const country_validation = {
    inputName: "country",
    label: "Country",
    placeholder: "Country",
    type: "text",
    id: "country",
    validation: {
        required: { 
            value: true, 
            message: "required" 
        },
        maxLength: {
            value: 30,
            message: "max length is 30"
        },
    },
};

export const phone_validation = {
    inputName: "phone",
    label: "Phone",
    placeholder: "Phone",
    type: "text",
    id: "phone",
    validation: {
        required: { 
            value: true, 
            message: "required" 
        },
        maxLength: {
            value: 15,
            message: "max length is 15"
        },
    },
};