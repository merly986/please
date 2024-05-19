import { Box, Grid, Typography, Chip, Stack, Button, ButtonGroup, Divider, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { dateToMUI } from '../../utils/utils';


export default function EntityField ({attribute}) {
    const rAttrLabel = attribute?.rattr_label;
    const rAttrType = attribute?.rattr_type;
    const entityAttrValue = attribute?.entity_attr_value;
    const rattrName = attribute?.rattr_name

    const readOnly = {
        readOnly: attribute?.read_only || false
    };

    switch(rAttrType) {
        case 'date':
            return (
                <TextField
                    size='small'
                    variant='standard'
                    type='date'
                    sx={{ display: 'block', my: 2 }}
                    InputProps={readOnly}
                    label={rAttrLabel}
                    defaultValue={dateToMUI(entityAttrValue)}
                    name={rattrName}
                />
            );
            break;
        case 'string':
            return (
                <TextField
                    size='small'
                    variant='standard'
                    sx={{display: 'block', my: 2 }}
                    label={rAttrLabel}
                    defaultValue={entityAttrValue}
                    InputProps={readOnly}
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
                    size='small'
                    variant='standard'
                    sx={{display: 'block', my: 2 }}
                    label={rAttrLabel}
                    defaultValue={entityAttrValue}
                    InputProps={readOnly}
                    name={rattrName}
                />
            );
            break;
        case 'bool':
            return <FormControlLabel control={<Checkbox defaultChecked={entityAttrValue} name={rattrName} />} label={rAttrLabel} />
            break;
    };
};
