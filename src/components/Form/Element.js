import InputText from './InputText';
import Select from './Select';
import Uploader from './Uploader';
import Paragraph from './Paragraph';

const Element = ({ fieldtype, id, label, errors, value, onChange, options, content }) => {
    switch (fieldtype) {
        case 'text':
            return (<InputText
                id={id}
                type={fieldtype}
                label={label}
                errors={errors}
                onChange={onChange}
            />)
        case 'select':
            return (<Select
                id={id}
                label={label}
                options={options}
                value={value}
                errors={errors}
                onChange={onChange}
            />)
        case 'file':
            return (<Uploader
                id={id}
                label={label}
                value={value}
                errors={errors}
                onChange={onChange}
            />)
        case 'paragraph':
            return (<Paragraph
                content={content}
            />)
        default:
            return null;
    }
}

export default Element;
