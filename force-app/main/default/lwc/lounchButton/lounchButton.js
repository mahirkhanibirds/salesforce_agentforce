import { LightningElement } from 'lwc';
export default class LounchButton extends LightningElement {
    
    connectedCallback(){
        setTimeout(() => {
            document.dispatchEvent(
                new CustomEvent(
                "hideChatMessageNewIcon"
                )
            );
        }, 3000);
    }
    
    handleClick() {
        
        console.log(
            'Inside the handleClick()'
        );
        document.dispatchEvent(
            new CustomEvent(
                "launchMIAWChatEvent"
            )
        );

    }
}