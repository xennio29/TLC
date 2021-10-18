import { Player } from "./player";

export class Team {
    public name: string;
    public school: string;
    public topLaner: Player;
    public jungle: Player;
    public midLaner: Player;
    public botLaner: Player;
    public support: Player;

    constructor(
        name: string,
        school: string,
        topLaner: Player,
        jungle: Player,
        midLaner: Player,
        botLaner: Player,
        support: Player,
    ) {
        this.name = name;
        this.school = school;
        this.topLaner = topLaner;
        this.jungle = jungle;
        this.midLaner = midLaner;
        this.botLaner = botLaner;
        this.support = support;
        this.validateTeam();
    }

    validateTeam() {
        this.topLaner.validatePlayer();
        this.jungle.validatePlayer();
        this.midLaner.validatePlayer();
        this.botLaner.validatePlayer();
        this.support.validatePlayer();
    }

    getScore() {
        // TODO return the score of this team
        // Get all score
        // Filter match wheer this team play
        // for each match score 3 1 or 0 points
    }
}