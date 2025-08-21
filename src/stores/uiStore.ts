import { makeAutoObservable } from 'mobx';

class UIStore {
    viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

    constructor() {
        makeAutoObservable(this);
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.handleResize);
        }
    }

    handleResize = () => {
        this.viewportWidth = window.innerWidth;
    };

    get isNarrow() {
        return this.viewportWidth < 440;
    }
}

export const uiStore = new UIStore();


