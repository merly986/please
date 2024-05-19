import SidebarStore from "./sidebar-strore";
import FilterStore from "./filter-store";
import StageAction from "./stage-actions.tsx"

class RootStoreGeneral{
     SideBar = SidebarStore;
     Filter = FilterStore;
     StageActions = StageAction;
}

export default RootStoreGeneral;