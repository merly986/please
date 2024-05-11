import Filter from "../components/Filter"
import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"



type props = {
    rentity_type_name : string
}

const Entitys:React.FC<props> = (props) => {

    const navigate = useNavigate();

    function openEntity() {
        return navigate("/entity", {state: {type: "candidate", id: 83}});
    };

    return(
        <Box display={"flex"} flexDirection={"column"} flexGrow={1}>
            <Typography textAlign={"center"} variant="h4">Кандидаты</Typography>
            <Filter rentity_filtr_name="candidate_list"></Filter>
            <Button onClick={openEntity}>Open entity</Button>

        </Box>
    )
}

export default Entitys;