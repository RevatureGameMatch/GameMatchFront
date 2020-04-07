export class Room {
    roomId: number;
    discordTextChannelId: number;
    discordVoiceChannelId: number;
    discordRoleId: number;
    created: Date;
    closed: Date;
    description: string;
    status: string;
    style: string;


    constructor(description: string, status: string, style: string) {
            this.roomId = 0;
            this.discordTextChannelId = 0;
            this.discordVoiceChannelId = 0;
            this.discordRoleId = 0;
            this.created =  new Date(Date.now());
            this.description = description;
            this.status = status;
            this.style = style;
    }
}