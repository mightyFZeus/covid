 export interface IState {
    casesOnAdmission: number;
    death: number;
    discharged: number;
    state: string;
    _id: string
}




export interface ICovid {
	death: number;
	discharged: number;
	states: IState[];
	totalActiveCases: number;
	totalConfirmedCases: number;
	totalSamplesTested: number;
}