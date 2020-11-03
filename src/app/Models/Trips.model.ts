import{Services} from '../Models/Services.model';
export class Trips{
    constructor(
    public Id:number,
    public SurveyNo : string,
    public VacationsPerYear : string ,//= ['1-2','3-4','5+'];
    public VacationPerYearAnswer : string,
    public EnjoyableTrip: string,
    public ServicesUsed : string[],//Services[] = [{Id:'1',Title:'Car'},{Id:'2',Title:'Bus'},{Id:'3',Title:'Hotel'},{Id:'4',Title:'Plane'} ];
    public ServicesUsedAnswer : string,
    public index:string
            ) { }
   
}