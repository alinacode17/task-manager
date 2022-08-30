import { useState } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import { createYupSchema } from "./yupSchemaCreator";
import axios from 'axios';
import { useContext } from 'react';
import { TaskViewerContext } from '../contexts/tasksContext';
import Element from './Element';
import Button from './Button';

const Form = ({ formData }) => {
    const { setTaskStatus } = useContext(TaskViewerContext);
    const [submitting, setSubmitting] = useState(false);

    console.log(formData.fields);

    // getting intial values from json fields
    const initialValues = {};
    formData.fields.forEach(item => {
        initialValues[item.id] = item.value || "";
    });

    console.log(initialValues);

    // generating yup validation schema
    const yupSchema = formData.fields.reduce(createYupSchema, {});
    console.log(yupSchema);
    const validateSchema = yup.object().shape(yupSchema);

    return (
        <div className="form">
            {
                !submitting && formData.status !== "completed" &&
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={(values) => {
                        console.log("values", values);
                        setSubmitting(true);
                        // updating taks status on the list
                        axios.patch(`http://localhost:5000/tasksCollection/${formData.id}`,
                            { "status": "completed" }
                        )
                            .then((response) => {
                                //update task status
                                axios.patch(`http://localhost:5000/taskItems/${formData.id}`,
                                    { "status": "completed" }
                                )
                                    .then((response) => {
                                        alert('form has been subitted');
                                        setTaskStatus('completed');
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                                alert('form has been subitted');
                                setTaskStatus('completed');
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                        // sending the data 
                        axios.post('http://localhost:5000/submittedFormData', {
                            id: formData.id,
                            fields: [
                                values
                            ]
                        })
                            .then(function (response) {
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }}
                >
                    {(props) => (
                        <form onSubmit={props.handleSubmit}>
                            {
                                formData.fields.map((item) => (
                                    <Element
                                        key={item.id}
                                        fieldtype={item.type}
                                        options={item.options ?? undefined}
                                        content={item.content ?? undefined}
                                        id={item.id}
                                        label={item.label}
                                        value={props.values[item.id]}
                                        errors={props.errors}
                                        onChange={props.handleChange}
                                    />
                                ))
                            }
                            <Button
                                submitting={submitting}
                                label={"Submit"}
                            />
                        </form>
                    )}
                </Formik>
            }
            {
                submitting &&
                <div>
                    Your form has been submitted!
                </div>
            }

            {
                formData.status === "completed" &&
                <div>
                    Task has been completed
                </div>
            }
        </div>
    )
}

export default Form;