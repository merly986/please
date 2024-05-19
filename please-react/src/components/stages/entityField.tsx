import {
    TextField,
    FormControlLabel,
    Checkbox
} from '@mui/material';
import {dateToMUI} from '../../utils/utils.tsx';
import {EntityAttribute} from "../../types/entity.ts";

// Пропсы для компонента ActionButton
interface EntityFieldProps {
    attribute: EntityAttribute;
}

const EntityField: React.FC<EntityFieldProps> = ({attribute}) => {
    const rAttrLabel = attribute?.rattr_label;
    const rAttrType = attribute?.rattr_type;
    const entityAttrValue = attribute?.entity_attr_value;
    const rattrName = attribute?.rattr_name

    switch (rAttrType) {
        case 'date':
            return (
                <TextField
                    variant='outlined'
                    type={entityAttrValue !== '' ? 'date' : 'string'}
                    fullWidth
                    disabled={true}
                    label={rAttrLabel}
                    defaultValue={entityAttrValue !== '' ? dateToMUI(entityAttrValue) : 'Отсутствует'}
                    name={rattrName}
                />
            );
            break;
        case 'string':
            return (
                <TextField
                    variant='outlined'
                    fullWidth
                    label={rAttrLabel}
                    defaultValue={entityAttrValue}
                    disabled={true}
                    name={rattrName}
                />
            );
            break;
        case 'longstring':
            return (
                <TextField
                    multiline
                    fullWidth
                    maxRows={4}
                    variant='outlined'
                    label={rAttrLabel}
                    defaultValue={entityAttrValue}
                    disabled={true}
                    name={rattrName}
                />
            );
            break;
        case 'bool':
            return <FormControlLabel control={<Checkbox defaultChecked={entityAttrValue} name={rattrName}/>}
                                     label={rAttrLabel}/>
            break;
    }
};

export default EntityField;
