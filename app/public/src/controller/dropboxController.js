class DropBoxControler {

    constructor(){

        this.btnSendFIleEl = document.querySelector('#btn-send-file');
        this.inputFilesEl = document.querySelector('#files');
        this.snackModalEL = document.querySelector('#react-snackbar-root')
        
        this.initEvents();
    }

    initEvents(){
        this.btnSendFIleEl.addEventListener('click', event => {
            this.inputFilesEl.click();
        })
 
     this .inputFilesEl.addEventListener('change', event => {
        console.log(event.target.files,

            this.snackModalEL.style.display = 'block'
        )
     })
    }
}