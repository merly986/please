import Button from "@mui/material/Button";
import {doActionOnStage} from "../../api/doActionOnStage.tsx";
import {AvailableAction} from "../../types/entityStage.ts";

// Пропсы для компонента ActionButton
interface ActionButtonProps {
    action: AvailableAction;
    stageID: number;
    getData: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({action, stageID, getData}) => {
    return(
        <Button
            variant={'contained'}
            fullWidth
            onClick={async () => {
               await doActionOnStage(stageID, action.raction_id);
               await getData();
            }}
        >
            {action.raction_label}
        </Button>
    );
}

export default ActionButton;