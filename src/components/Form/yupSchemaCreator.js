import * as yup from "yup";

// credits to https://github.com/ridoansaleh/dynamic-form-json/blob/master/src/utils/yupSchemaCreator.js
export function createYupSchema(schema, config) {
    const { id, validationType, validations = [] } = config;
    if (!yup[validationType]) {
        return schema;
    }
    let validator = yup[validationType]();
    validations.forEach(validation => {
        const { params, type } = validation;
        if (!validator[type]) {
            return;
        }
        // console.log(type, params);
        validator = validator[type](...params);
    });
    schema[id] = validator;
    return schema;
}