import { RulesComponent } from "src/app/rules/rules.component";
import { Article } from "../model/article";
import { MatchsPoule } from "../model/matchsPoule";
import { Player, RoleLogo } from "../model/player";
import { Poule } from "../model/poule";
import { School, Team } from "../model/team";
import { Rules } from "../model/rules";
import { DataBase } from "./database";
import { Match } from "../model/match";

export class MockDataBase extends DataBase {

    private TEAM_BY_POULE = 4;

    constructor(rules: string) {
        super(null);
        this.addBaseData();
        this.addTeamData();
        this.addRules(rules);
        this.addArticles();
    }

    private addBaseData(): void {
        this.setTournamentId('TLC');
        this.setTournamentName('Toulouse League Cup');
    }

    private addRules(rules: string): void {
        this.setRules(new Rules(rules).getContent());
    }

    private addTeamData(): void {

        const fakeTeam = new Team('??', '----',
            new Player(1, 'top', 'Je suis', 'a futur top laner', RoleLogo.topLanerLogo),
            new Player(2, 'jungle', 'Je suis', 'a futur jungle', RoleLogo.jungleLogo),
            new Player(3, 'mid', 'Je suis', 'a futur mid laner', RoleLogo.midLanerLogo),
            new Player(4, 'adc', 'Je suis', 'a futur bop laner', RoleLogo.botLogo),
            new Player(5, 'supp', 'Je suis', 'a futur support', RoleLogo.supportLogo)
        );
        const FIRST_DATE = "Lundi 8 novembre - 20h30";
        const SECOND_DATE = "Mercredi 10 novembre - 20h30";
        const THIRD_DATE = "Lundi 15 novembre - 20h30";
        const HUIT_DATE = "Lundi 22 novembre - 20h30";
        const QUART_DATE = "Mercredi 24 novembre - 20h30";
        const DEMI_DATE = "Lundi 29 novembre - 20h30";
        const FINAL_DATE = "Mercredi 1 décembre - 20h30";
        const TIE_BREAKER = "Tie-breaker";

        var allTeams: Team[] = [];
        // Poule 1
        allTeams.push(new Team('Petit 7', School.ENSEEIHT,
            new Player(1, 'Oscar', 'LE GRANCHÉ', 'OMG InvisiBalll', RoleLogo.topLanerLogo),
            new Player(2, 'Jules', 'ARRA', 'Jeune Roulio', RoleLogo.jungleLogo),
            new Player(3, 'Nathan', 'ROY', 'Hervé le Routier', RoleLogo.jungleLogo),
            new Player(4, 'Mathieu', 'SALAUZE', 'Fan 2 Shiva', RoleLogo.botLogo),
            new Player(5, 'Tom', 'Portafaix', 'Raquaza12345', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Digitalesses', School.EPITECH,
            new Player(1, 'Maxime', 'Cousinie', 'macgamer31', RoleLogo.topLanerLogo),
            new Player(2, 'TITOUAN', 'BEGUERE', 'RaimeiManta', RoleLogo.jungleLogo),
            new Player(3, 'Jugurta', 'Zaïdi', 'xyxuu', RoleLogo.midLanerLogo),
            new Player(4, 'Léo', 'Maliczak', 'Stuuck lron', RoleLogo.botLogo),
            new Player(5, 'Pierre', 'Ilari', 'Pierre0807', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Chomagerie ', School.UT1,
            new Player(1, 'Hamid', 'ATROUNE', 'DRAKEN', RoleLogo.topLanerLogo),
            new Player(2, 'Lakhdar', 'NOUAR', 'Abdu Roziq', RoleLogo.jungleLogo),
            new Player(3, 'Hakim', 'NOUAR', 'STYL3SPROD', RoleLogo.jungleLogo),
            new Player(4, 'Ilyes', 'HARZALI', 'MolotovKnüt', RoleLogo.botLogo),
            new Player(5, 'Zakaria', 'LOUDAGH', 'Zakichan31', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('KPR', School.IL,
            new Player(1, 'Gabriel', 'ROUET', 'Kobal', RoleLogo.topLanerLogo),
            new Player(2, 'Filip', 'STOGREN', 'Fish Lip', RoleLogo.jungleLogo),
            new Player(3, 'Lucas', 'SALINAS', 'Le Soldat Royal', RoleLogo.midLanerLogo),
            new Player(4, 'Dylan', 'NOVIER', 'StuckSilverr', RoleLogo.botLogo),
            new Player(5, 'Adrien', 'VALVERDE', 'Etareneva 1', RoleLogo.supportLogo)
        ));
        // Poule 2
        allTeams.push(new Team('Confrérie du Malaise', School.ENSEEIHT,
            new Player(1, 'Théo', 'KOTSONIS', 'δαrksαsυkε', RoleLogo.topLanerLogo),
            new Player(2, 'Grégoire', 'HONVAULT', 'ρrinceChαrming', RoleLogo.jungleLogo),
            new Player(3, 'Quentin', 'FRATY', 'OAB', RoleLogo.jungleLogo),
            new Player(4, 'Tom', 'MASSAI', 'DreadFog', RoleLogo.botLogo),
            new Player(5, 'Édouard', 'LEFIZELIER', 'Sel de guérende', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('C\'est une bonne situation scribe ?', School.UT2,
            new Player(2, 'Nicolas', 'DOUMENC', 'Ruzzan', RoleLogo.topLanerLogo),
            new Player(1, 'Rémy', 'MESTRE', 'Toastos', RoleLogo.jungleLogo),
            new Player(3, 'Lucas', 'ARNAL', 'Baby Craps', RoleLogo.midLanerLogo),
            new Player(5, 'Sylvain', 'MESTRE', 'Shult', RoleLogo.botLogo),
            new Player(4, 'Tom', 'FERRASSE', 'Thumflumch', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('E-Sport-Noobies', School.ESN,
            new Player(1, 'Guillaume', 'Dax', 'PaulRicard4ever', RoleLogo.topLanerLogo),
            new Player(2, 'Quentin', 'Costes', 'UnZiziFurtif', RoleLogo.jungleLogo),
            new Player(3, 'Pierre', 'Tubeuf', 'xad11', RoleLogo.midLanerLogo),
            new Player(4, 'Ousman ', 'Hassani', 'Hyuk Kang', RoleLogo.botLogo),
            new Player(5, 'Claudian', 'Camus', 'Clau81', RoleLogo.supportLogo),
            new Player(6, 'Mathieu', 'Almon', 'mathieu012', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('La meilleure table', School.EPITECH,
            new Player(1, 'Alexandre', 'CORNILLE', 'eldiabloss974', RoleLogo.topLanerLogo),
            new Player(2, 'Théo', 'BELY', 'superguppy31', RoleLogo.jungleLogo),
            new Player(3, 'Kéziah', 'IMER', 'Jubıko', RoleLogo.midLanerLogo),
            new Player(4, 'Thomas', 'PAPAIX', 'Deviltix66', RoleLogo.botLogo),
            new Player(5, 'Simon', 'VERMEULEN', 'Capichef Azerlus', RoleLogo.supportLogo),
            new Player(6, '', '', 'SaucegØd', RoleLogo.supportLogo),
            new Player(7, '', '', 'Masterfeedax', RoleLogo.supportLogo)
        ));
        // Poule 3
        allTeams.push(new Team('Riftricks7', School.ENSEEIHT,
            new Player(1, 'Romain', 'Barda-Chatain', 'WarGun31', RoleLogo.topLanerLogo),
            new Player(2, 'Julien', 'Guilhem', 'Invocasombre', RoleLogo.jungleLogo),
            new Player(3, 'Florian', 'Carpentier', 'EzX Oni', RoleLogo.midLanerLogo),
            new Player(4, 'Maxime', 'Barnabé', 'VrEkEI', RoleLogo.botLogo),
            new Player(5, 'Romain', 'Fournier', 'Papaya inter', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Petit ours brun aime la bagarre', School.EPITECH,
            new Player(1, 'Maxence', 'FOLIO', 'Ken Kànekì', RoleLogo.topLanerLogo),
            new Player(2, 'Sofian', 'CHEBBOUB', 'banlife for lag', RoleLogo.jungleLogo),
            new Player(3, 'Mathias', 'COMBALBERT', 'phalusdenoir', RoleLogo.midLanerLogo),
            new Player(4, 'Julien', 'ESPES', '1v9machLne', RoleLogo.botLogo),
            new Player(5, 'Ali', 'MHREZ', 'Aryath', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Les 0 de la faille', School.IPI,
            new Player(1, 'Baptiste', 'MARCHET', 'Desmop', RoleLogo.topLanerLogo),
            new Player(2, 'Christophe', 'MOREAU', 'Lorai', RoleLogo.jungleLogo),
            new Player(3, 'Gabriel', 'RINGUE', 'azertgab', RoleLogo.midLanerLogo),
            new Player(4, 'Maël', 'KERVICHE', 'ElysiOwO', RoleLogo.botLogo),
            new Player(5, 'Kévin', 'BOURSIER', 'EzKpy', RoleLogo.supportLogo)
        ));
        allTeams.push(fakeTeam);
        // Poule 4
        allTeams.push(new Team('UT1NB', School.UT1,
            new Player(1, '', '', 'wuhuAirflight', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'RNG Wei11', RoleLogo.jungleLogo),
            new Player(3, '', '', 'loveξcamille', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'DontGoBotPls', RoleLogo.botLogo),
            new Player(5, '', '', 'G IDLE HWAA', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('SegFaults', School.EPITECH,
            new Player(1, '', '', 'BlazerHead', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'Zainora', RoleLogo.jungleLogo),
            new Player(3, '', '', 'Au rayon solde', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'FoxtrotBP', RoleLogo.botLogo),
            new Player(5, '', '', 'WiseryTyki', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Algorithmed', School.ENSEEIHT,
            new Player(1, '', '', 'Kokimop', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'chocrare34', RoleLogo.jungleLogo),
            new Player(3, '', '', 'paulusLP44', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'tofuset', RoleLogo.botLogo),
            new Player(5, '', '', 'Valduche', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Road To No CashPrize', School.IL,
            new Player(1, '', '', 'Gayqo Decimus', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'Glivious', RoleLogo.jungleLogo),
            new Player(3, '', '', 'W4RiOrk', RoleLogo.jungleLogo),
            new Player(4, '', '', 'ÉtieneLeBolideur', RoleLogo.midLanerLogo),
            new Player(5, '', '', 'FUMIEEER', RoleLogo.botLogo),
            new Player(6, '', '', 'DodgeMyAxes', RoleLogo.botLogo),
            new Player(7, '', '', 'I AM GROOOOOT', RoleLogo.supportLogo)
        ));
        // Poule 5
        allTeams.push(new Team('RAMATEAM REBORN', School.UT1,
            new Player(1, '', '', 'jejer', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'Nerf Jayce Plz', RoleLogo.jungleLogo),
            new Player(3, '', '', 'u r on my mind', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'Jisoo bebou', RoleLogo.botLogo),
            new Player(5, '', '', 'VRAl RAJEL', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Electromenage7', School.ENSEEIHT,
            new Player(1, '', '', 'glloq8', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'flibuste97', RoleLogo.jungleLogo),
            new Player(3, '', '', 'Raygiik', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'Xe3N0X', RoleLogo.botLogo),
            new Player(5, '', '', 'Bradfooo', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Les Touristes', School.SOPRA,
            new Player(1, '', '', 'illidar', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'Le Café au Caca', RoleLogo.jungleLogo),
            new Player(3, '', '', 'kowski', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'Mymiel', RoleLogo.botLogo),
            new Player(5, '', '', 'NoWayyy', RoleLogo.supportLogo)
        ));
        allTeams.push(fakeTeam);
        // Poule 6
        allTeams.push(new Team('KassouletCorp', School.SOPRA,
            new Player(1, '', '', 'JeanMichel81', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'laszk', RoleLogo.jungleLogo),
            new Player(3, '', '', 'Luckymarmotte', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'Hyorëen', RoleLogo.botLogo),
            new Player(5, '', '', 'benjimick11', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('SuperHardCarryExtremePlayerPro', School.ENSEEIHT,
            new Player(1, '', '', 'damienfrN7', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'RoverCcc', RoleLogo.jungleLogo),
            new Player(3, '', '', 'TLMSMAL', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'FujimiSekaiKill', RoleLogo.botLogo),
            new Player(5, '', '', 'ÕnŌ', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('League du sel', School.ALBI,
            new Player(1, '', '', 'Drypsers', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'Arshemale', RoleLogo.jungleLogo),
            new Player(3, '', '', 'Hangar', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'Minato934', RoleLogo.botLogo),
            new Player(5, '', '', 'Elaiika', RoleLogo.supportLogo)
        ));
        allTeams.push(fakeTeam);
        // Poule 7
        allTeams.push(new Team('IPIFeed', School.SOPRA,
            new Player(1, '', '', 'Draksxx', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'Oragefeu', RoleLogo.jungleLogo),
            new Player(3, '', '', 'Kastelo', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'SWC Furenard', RoleLogo.botLogo),
            new Player(5, '', '', 'Forestyyy', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Albinteur', School.ALBI,
            new Player(1, '', '', '2ndPoteauPavaard', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'LETS GO DJULO', RoleLogo.jungleLogo),
            new Player(3, '', '', 'Imtoxicdontrepme', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'Keep it Michel', RoleLogo.botLogo),
            new Player(5, '', '', 'Adewande ', RoleLogo.supportLogo),
            new Player(6, '', '', 'Rickorck ', RoleLogo.supportLogo),
            new Player(7, '', '', 'RagnarokOfFlames ', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('SKT T7', School.ENSEEIHT,
            new Player(1, 'Mehdi', 'BACCOUR', 'Bac31aquarium', RoleLogo.topLanerLogo),
            new Player(2, 'Maxence', 'BEUSELINCK', 'Enexam', RoleLogo.jungleLogo),
            new Player(3, 'Mederick', 'POUDRET', 'medo38', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'WinterWood', RoleLogo.midLanerLogo),
            new Player(5, 'Fabien', 'BORYS', 'RitoMistake', RoleLogo.botLogo),
            new Player(6, 'Mathieu', 'CHESNEAU', 'Gildal3502', RoleLogo.supportLogo)
        ));
        allTeams.push(fakeTeam);
        // Poule 7
        allTeams.push(new Team('N7 Esport', School.ENSEEIHT,
            new Player(1, '', '', 'RedPhoenixx', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'N7 Happy', RoleLogo.jungleLogo),
            new Player(3, '', '', 'Darkwo', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'Stridecore', RoleLogo.botLogo),
            new Player(5, '', '', 'Wadget', RoleLogo.supportLogo),
            new Player(5, '', '', 'Just Macfarges', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Peine Capitole', School.UT2,
            new Player(1, '', '', 'BeIle Bite', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'LFT Satsu', RoleLogo.jungleLogo),
            new Player(3, '', '', 'Bono le Bigorné', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'Theoto Rikka', RoleLogo.botLogo),
            new Player(5, '', '', 'Happyf1rst', RoleLogo.supportLogo),
            new Player(6, '', '', 'Doumfa ', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Les giga bro', School.INSA,
            new Player(1, '', '', 'Rabapt', RoleLogo.topLanerLogo),
            new Player(2, '', '', 'Hi main baguette', RoleLogo.jungleLogo),
            new Player(3, '', '', ' PkE Shaynos', RoleLogo.midLanerLogo),
            new Player(4, '', '', 'Viiiiitel', RoleLogo.botLogo),
            new Player(5, '', '', 'Bloodlab', RoleLogo.supportLogo),
            new Player(6, '', '', 'PkE Yuko', RoleLogo.supportLogo),
        ));
        allTeams.push(fakeTeam);

        this.setTeams(allTeams);
        var allPoules: Poule[] = [];
        for (let index = 0; index < allTeams.length/4; index++) {
            allPoules.push(new Poule('Poule ' + (index + 1),
                allTeams[this.TEAM_BY_POULE*index],
                allTeams[this.TEAM_BY_POULE*index + 1],
                allTeams[this.TEAM_BY_POULE*index + 2],
                allTeams[this.TEAM_BY_POULE*index + 3]
            ));
        }
        this.setPoules(allPoules);

        // ALL MATCHS
        var matchsPoule: MatchsPoule[] = [];
        // Poule 1
        var matchsPoule1: Match[] = [];
        matchsPoule1.push(new Match(allPoules[0].team1, allPoules[0].team2, FIRST_DATE, 2, 0));
        matchsPoule1.push(new Match(allPoules[0].team3, allPoules[0].team4, FIRST_DATE, 0, 3));

        matchsPoule1.push(new Match(allPoules[0].team1, allPoules[0].team3, SECOND_DATE, 3, 0));
        matchsPoule1.push(new Match(allPoules[0].team2, allPoules[0].team4, SECOND_DATE, 0, 2));

        matchsPoule1.push(new Match(allPoules[0].team1, allPoules[0].team4, THIRD_DATE, 2, 0));
        matchsPoule1.push(new Match(allPoules[0].team2, allPoules[0].team3, THIRD_DATE, 3, 0));
        matchsPoule.push(new MatchsPoule(allPoules[0], matchsPoule1));
        // Poule 2
        var matchsPoule2: Match[] = [];
        matchsPoule2.push(new Match(allPoules[1].team1, allPoules[1].team2, FIRST_DATE, 0, 2));
        matchsPoule2.push(new Match(allPoules[1].team3, allPoules[1].team4, FIRST_DATE, 0, 2));

        matchsPoule2.push(new Match(allPoules[1].team1, allPoules[1].team3, "Mardi 09 novembre - 20h30", 2, 0));
        matchsPoule2.push(new Match(allPoules[1].team2, allPoules[1].team4, SECOND_DATE, 2, 0));

        matchsPoule2.push(new Match(allPoules[1].team1, allPoules[1].team4, THIRD_DATE, 2, 0));
        matchsPoule2.push(new Match(allPoules[1].team2, allPoules[1].team3, THIRD_DATE, 2, 0));
        matchsPoule.push(new MatchsPoule(allPoules[1], matchsPoule2));
        // Poule 3
        var matchsPoule3: Match[] = [];
        matchsPoule3.push(new Match(allPoules[2].team1, allPoules[2].team2, FIRST_DATE, 0, 3));
        matchsPoule3.push(new Match(allPoules[2].team3, allPoules[2].team4, FIRST_DATE, 3, 0));

        matchsPoule3.push(new Match(allPoules[2].team1, allPoules[2].team3, SECOND_DATE, 0, 3));
        matchsPoule3.push(new Match(allPoules[2].team2, allPoules[2].team4, SECOND_DATE, 3, 0));

        matchsPoule3.push(new Match(allPoules[2].team1, allPoules[2].team4, THIRD_DATE, 3, 0));
        matchsPoule3.push(new Match(allPoules[2].team2, allPoules[2].team3, THIRD_DATE, 2, 0));
        matchsPoule.push(new MatchsPoule(allPoules[2], matchsPoule3));
        // Poule 4
        var matchsPoule4: Match[] = [];
        matchsPoule4.push(new Match(allPoules[3].team1, allPoules[3].team2, FIRST_DATE, 2, 0));
        matchsPoule4.push(new Match(allPoules[3].team3, allPoules[3].team4, FIRST_DATE, 0, 2));

        matchsPoule4.push(new Match(allPoules[3].team1, allPoules[3].team3, SECOND_DATE, 1, 1));
        matchsPoule4.push(new Match(allPoules[3].team2, allPoules[3].team4, SECOND_DATE, 0, 3));

        matchsPoule4.push(new Match(allPoules[3].team1, allPoules[3].team4, THIRD_DATE, 0, 2));
        matchsPoule4.push(new Match(allPoules[3].team2, allPoules[3].team3, THIRD_DATE, 0, 3));

        matchsPoule4.push(new Match(allPoules[3].team1, allPoules[3].team3, TIE_BREAKER, 2, 1));

        matchsPoule.push(new MatchsPoule(allPoules[3], matchsPoule4));
        // Poule 5
        var matchsPoule6: Match[] = [];
        matchsPoule6.push(new Match(allPoules[4].team1, allPoules[4].team2, FIRST_DATE, 2, 0));
        matchsPoule6.push(new Match(allPoules[4].team3, allPoules[4].team4, FIRST_DATE, 3, 0));

        matchsPoule6.push(new Match(allPoules[4].team1, allPoules[4].team3, SECOND_DATE, 1, 1));
        matchsPoule6.push(new Match(allPoules[4].team2, allPoules[4].team4, SECOND_DATE, 3, 0));

        matchsPoule6.push(new Match(allPoules[4].team1, allPoules[4].team4, THIRD_DATE, 3, 0));
        matchsPoule6.push(new Match(allPoules[4].team2, allPoules[4].team3, THIRD_DATE ,0, 2));
        matchsPoule6.push(new Match(allPoules[4].team1, allPoules[4].team3, TIE_BREAKER, 2, 1));

        matchsPoule.push(new MatchsPoule(allPoules[4], matchsPoule6));
        // Poule 6
        var matchsPoule6: Match[] = [];
        matchsPoule6.push(new Match(allPoules[5].team1, allPoules[5].team2, FIRST_DATE, 3, 0));
        matchsPoule6.push(new Match(allPoules[5].team3, allPoules[5].team4, FIRST_DATE, 3, 0));

        matchsPoule6.push(new Match(allPoules[5].team1, allPoules[5].team3, SECOND_DATE, 3, 0));
        matchsPoule6.push(new Match(allPoules[5].team2, allPoules[5].team4, SECOND_DATE, 3, 0));

        matchsPoule6.push(new Match(allPoules[5].team1, allPoules[5].team4, THIRD_DATE, 3, 0));
        matchsPoule6.push(new Match(allPoules[5].team2, allPoules[5].team3, THIRD_DATE, 3, 0));
        matchsPoule.push(new MatchsPoule(allPoules[5], matchsPoule6));
        // Poule 7
        var matchsPoule7: Match[] = [];
        matchsPoule7.push(new Match(allPoules[6].team1, allPoules[6].team2, FIRST_DATE, 0, 2));
        matchsPoule7.push(new Match(allPoules[6].team3, allPoules[6].team4, FIRST_DATE, 3 ,0));

        matchsPoule7.push(new Match(allPoules[6].team1, allPoules[6].team3, SECOND_DATE, 1, 1));
        matchsPoule7.push(new Match(allPoules[6].team2, allPoules[6].team4, SECOND_DATE, 3, 0));

        matchsPoule7.push(new Match(allPoules[6].team1, allPoules[6].team4, THIRD_DATE, 3, 0));
        matchsPoule7.push(new Match(allPoules[6].team2, allPoules[6].team3, THIRD_DATE, 2, 0));

        matchsPoule7.push(new Match(allPoules[6].team1, allPoules[6].team3, TIE_BREAKER, 0, 2));
        matchsPoule.push(new MatchsPoule(allPoules[6], matchsPoule7));
        // Poule 8
        var matchsPoule8: Match[] = [];
        matchsPoule8.push(new Match(allPoules[7].team1, allPoules[7].team3, FIRST_DATE, 1, 1));
        matchsPoule8.push(new Match(allPoules[7].team2, allPoules[7].team4, FIRST_DATE, 3, 0));

        matchsPoule8.push(new Match(allPoules[7].team1, allPoules[7].team2, SECOND_DATE, 0, 2));
        matchsPoule8.push(new Match(allPoules[7].team3, allPoules[7].team4, SECOND_DATE, 3 , 0));

        matchsPoule8.push(new Match(allPoules[7].team1, allPoules[7].team4, THIRD_DATE, 3, 0));
        matchsPoule8.push(new Match(allPoules[7].team2, allPoules[7].team3, THIRD_DATE, 2, 0));

        matchsPoule8.push(new Match(allPoules[7].team1, allPoules[7].team3, TIE_BREAKER, 0, 2));

        matchsPoule.push(new MatchsPoule(allPoules[7], matchsPoule8));

        this.setMatchs(matchsPoule);

        // MATCH FINALE
        var matchsFinale: MatchsPoule[] = [];
        // Huitème de finale
        var matchsHuit: Match[] = [];
        matchsHuit.push(new Match(allTeams[0], allTeams[10], HUIT_DATE, 2, 0));
        matchsHuit.push(new Match(allTeams[9], allTeams[3], HUIT_DATE, 2, 0));
        matchsHuit.push(new Match(allTeams[5], allTeams[12], HUIT_DATE, 2, 0));
        matchsHuit.push(new Match(allTeams[15], allTeams[4], HUIT_DATE, 2, 0));
        matchsHuit.push(new Match(allTeams[16], allTeams[26], HUIT_DATE, 2, 0));
        matchsHuit.push(new Match(allTeams[18], allTeams[25], HUIT_DATE, 1, 2));
        matchsHuit.push(new Match(allTeams[20], allTeams[30], HUIT_DATE, 0, 2));
        matchsHuit.push(new Match(allTeams[29], allTeams[21], HUIT_DATE, 2, 0));
        matchsFinale.push(new MatchsPoule(new Poule("Huitième de finale", null, null, null, null), matchsHuit));
        // Quart de finale
        var matchsQuart: Match[] = [];
        matchsQuart.push(new Match(allTeams[0], allTeams[30], QUART_DATE, 2, 0));
        matchsQuart.push(new Match(allTeams[5], allTeams[16], QUART_DATE, 2, 1));
        matchsQuart.push(new Match(allTeams[9], allTeams[29], QUART_DATE, 1, 2));
        matchsQuart.push(new Match(allTeams[15], allTeams[25], QUART_DATE, 1, 2));
        matchsFinale.push(new MatchsPoule(new Poule("Quart de finale", null, null, null, null), matchsQuart));
        // Demi finale
        var matchsDemi: Match[] = [];
        matchsDemi.push(new Match(allTeams[0], allTeams[5], DEMI_DATE, 2, 3));
        matchsDemi.push(new Match(allTeams[29], allTeams[25], DEMI_DATE, 3, 0));
        matchsFinale.push(new MatchsPoule(new Poule("Demi finale", null, null, null, null), matchsDemi));
        // Finale
        var matchsFinal: Match[] = [];
        matchsFinal.push(new Match(allTeams[5], allTeams[29], FINAL_DATE, 2, 3));
        matchsFinale.push(new MatchsPoule(new Poule("Finale", null, null, null, null), matchsFinal));

        this.setMatchsFinale(matchsFinale);

    }

    private addArticles(): void {
        this.setArticles([
            new Article(1, 'Récapitulatif avant le jour 3', "<p>De nombreux combats se sont déroulés sur la faille durant les deux premiers jours de poule, et bientôt le troisième jours décidera du classement final et décidera des qualifiés pour la phase finale !!<br>Voici un récapitulatif de chacune des poules :</p><p><b><u>Poule 1 : </u></b><br>Malheureusement <b>Chomagerie</b> a déclaré forfait pour le tournoi donc <b>Digitaless</b> remporte son seul match par forfait :( Mais à coté les deux titans de la poule 1 <b>Petit 7</b> et <b>KPR</b> vont se battre pour la première place !</p><p><b><u>Poule 2</u></b><br>L'équipe <b>c'est une bonne situation ca scribe ?</b> régne sur la poule 2 et leur dernier match contre les <b>E-sport-Noobies</b> leur est favorable. Mais derrière c'est la <b>Confrérie du Malaise</b> et <b>La meileur table</b> qui vont devoir s'arracher la deuxième place qualificative de leur poule !</p><p><b><u>Poule 3</u></b><br>Même configuration que pour la poule 1 : les <b>Riftricks7</b> finnissent troisième de leur poule et <b>Petit ours brun aime la bagarre</b> et <b>Les 0 de la faille</b> se lanceront dans une lutte acharnée pour la première place !</p><p><b><u>Poule 4</u></b><br>Un poule où tout peut encore se jouer ! <b>Road To No CashPrize</b> est en tête et affrontera <b>UT1NB</b> qui compte bien prendre la première place ! <b>SegFaults</b> et <b>Algorithmed</b> se battent pour remonter dans le classement. Mais si <b>Algorithmed</b> gagne et que <b>UT1NB</b> perd alors ces deux équipes devront s'affonter dans un tie-breaker pour la seconde place !</p><p><b><u>Poule 5</u></b><br><b>RAMATEAM REBORN</b> est seul en première position mais <b>Les Touristes</b> on encore une chance de finir premier s'il gagne leur match contre <b>Electromenage7</b> ce qui les aménera à un tie-breaker contre les <b>RAMATEAM REBRORN</b>. De leur coté si les <b>Electromenage7</b> remporte leur match ils sont qualifié pour la phase finale !</p><p><b><u>Poule 6</u></b><br>Parfois les aléa de l'organisation et des inscriptions amènent à des situations étonnantes ! Dans cette poule de trois équipes, la <b>League du sel</b> a déclaré forfait ainsi les deux seuls équipes restantes <b>KassouletCorp</b> et <b>SuperHardCarryExtremePlayerPro</b> sont qualifiées ! Mais <b>SuperHardCarryExtremePlayerPro</b> n'as pas pus être présente à son premier match contre <b>KassouletCorp</b> donc <b>KassouletCorp</b> est premier de sa poule sans avoir joué un seul match de competition oO</p><p><b><u>Poule 7</u></b><br>Tout peux encore se passer dans cete poule de 3, <b>IPIFeed</b> attend le résultat du dernier match pour connaître sa position dans la poule. Si <b>SKT T7</b> gagne la rencontre contre <b>Albinteur</b> ces deux équipes seront qualifiés et <b>IPIFeed</b> ne sortira pas de poule mais si <b>Albinteur</b> gagne il y aura un tie-breaker !</p><p><b><u>Poule 8</u></b><br>Comme la poule précédente avec une équipe <b>N7 Esport</b> qui est dans l'attente ! Si <b>Peine Capitole</b> gagne, elle est première de sa poule et il y aura un tie-braker pour le deuxième. Si elle perd, <b>Les gigas bro</b> passent premier et <b>Peine Capitole</b> sera deuxième.<p><b>Bon courage à tous pour la dernière journée des phase de poule !</b>"),
            new Article(2, 'Welcome to Toulouse League Cup', "C'est l'ouverture du tournoi inter-école organisé par SOPRA STERIA pour les étudiants de la région toulousaine ! Les inscriptions sont ouvertes et les entrainements commencent !"),
        ]);
    }
}