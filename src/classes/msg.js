export class Msg{
    visibleFor = [];
    constructor(sender, content, visibleForAll=true){
        this.sender = sender;
        this.content = content;
        this.visibleForAll = visibleForAll;
    }
}