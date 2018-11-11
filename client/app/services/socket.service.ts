import * as socketIo from 'socket.io-client';
export class SocketService {
    static $inject = [];
    private socket;
    static NAME: string = 'socketService';
    constructor(protected socketFactory: any) {
        this.socket = socketIo('http://localhost:5000');
    }

    public send(message: string): void {
        this.socket.emit('toBackEnd', message);
    }

    // public onMessage(cb: any): void {
    //     this.socket.on('message', cb);
    // }

    public onEvent(event: Event):void{
            this.socket.on(event, () =>{
                console.log(event);
            });
    }
    public get(): any {
        return this.socket;
    }
}