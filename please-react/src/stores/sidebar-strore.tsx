import { action, makeAutoObservable, observable, makeObservable } from 'mobx';

class SidebarStore{
    collapsed:boolean = false;
    selectedIndex:number = 1;
    currentWidth:number = 250;

    constructor() {
		makeObservable(this,{
            collapsed : observable,
            selectedIndex: observable,
            currentWidth : observable,
            rollAction : action,
            setSelectedIndexAction : action,
            setCurrentWidthMenu : action,
        })
	}
    
    rollAction(){
        this.collapsed = !this.collapsed
    }

    setSelectedIndexAction(id:number){
        this.selectedIndex = id;
    }

    setCurrentWidthMenu(width:number){
        this.currentWidth = width
    }

}

export default new SidebarStore();