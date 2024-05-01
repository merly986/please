import Filter from "../components/Filter"
import { Box, Typography } from "@mui/material"






type props = {
    rentity_type_name : string
}

const Entitys:React.FC<props> = (props) => {


    return(
        <Box display={"flex"} flexDirection={"column"} flexGrow={1}>
            <Typography textAlign={"center"} variant="h4">Кандидаты</Typography>
            <Filter rentity_filtr_name="candidate_list"></Filter>


        </Box>
    )
}

export default Entitys;