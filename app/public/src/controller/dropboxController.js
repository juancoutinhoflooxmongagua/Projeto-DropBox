class DropBoxControler {

    constructor(){

        this.btnSendFIleEl = document.querySelector('#btn-send-file');
        this.inputFilesEl = document.querySelector('#files');
        this.initEvents();
    }

    initEvents(){
        this.btnSendFIleEl.addEventListener('click', event => {
            this.inputFilesEl.click();
        })
    }
}