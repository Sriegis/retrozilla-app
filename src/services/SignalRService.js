import { HubConnectionBuilder } from "@aspnet/signalr";

export class SignalRService {
    constructor(onReceiveComment) {
        this.onReceiveComment = onReceiveComment;
    }

    connect = () => {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl("https://retrozilla-api.azurewebsites.net:5001/RetroZillaHub")
            .build();

        this.hubConnection
            .start({ withCredentials: true })
            .then(() => console.log("Connection started!"))
            .catch(err => console.log(`Connection failed to be established, ${err}`));
            
        this.hubConnection.on("PublishComment", (author, text) => {
            this.onReceiveComment({ author, text });
        });
    }

    publishComment = (author, text) => {
        this.hubConnection
            .invoke("PublishComment", author, text)
            .catch(err => console.log(`failed to publish the comment, ${err}`));
    }
}