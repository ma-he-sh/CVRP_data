declare var results:any;

export class ResultManager {
	public data_results;
	constructor() {
		this.init();	
	}

	init = () => {
		if( results ) {
			this.results = results;
		}
	}

	get_all_datasets():Array<any> {
		var datasets:Array<any> = [];
		if( results ) {
			Object.keys( results ).forEach( ( dataset:any, index:number ) => {
				datasets.push( { name: dataset, data: results[dataset] });
			} );
		}
		return datasets;
	}

	get_data_by_dataset( dataset:string ) {
		if( dataset in data_results ) {
			return data_results[dataset];
		}
		return {}
	}

	get_data_by_algorithm( algorithm:string ) {
		var algorithmArr = []
		if( results ) {
			Object.keys(results).forEach((dataset:any, index:number) => {
				if( algorithm in results[dataset] ) {
					algorithmArr.push( results[dataset][algorithm] );
				}
			});
		}
		return algorithmArr;
	}
}