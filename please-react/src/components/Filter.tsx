import { observer } from "mobx-react-lite";
import { useStores } from '../context/root-store-general-context';
import { Box, Typography, TextField} from "@mui/material";
import {FilterRattrItem } from '../api/getFilters';
import { useEffect } from "react";

type props = {
    rentity_filtr_name : string
}

const Filter:React.FC<props> = observer((props) =>{
    const {Filter} = useStores()
    
    useEffect(()=>{
        Filter.getFilterAction(props.rentity_filtr_name)
    },[]);
    


    return(
    <Box display={"flex"} flexDirection={"column"}>
        <Box display={"flex"}>
            {Filter.filter ? (<>
                {Filter.filter.state === 'pending' && (<Box>Я еще гружу</Box>)}
                {Filter.filter.state === "fulfilled" && (
                <Box sx={{display:"flex", flexWrap:"wrap"}}>
                    {Filter.filter.value[0]['rentity_filter_attr'].map((attr_item:FilterRattrItem)=>(
                        <TextField sx={{flex: "0 0 calc(20% - 10px)", margin:"5px", boxSizing:"border-box"}} key={attr_item.rattr_id} size="small" name={attr_item.rattr_name} label={attr_item.rattr_label}></TextField>
                        
                    ))}
                </Box>)}
                {Filter.filter.state === "rejected" && (<Box>Ошибка загруки</Box>)}
                </>
            ):
            (
            <Box>
                <Typography>Данных нет</Typography>
            </Box>
            )}
            
        </Box>
    </Box>
    )
});
export default Filter;