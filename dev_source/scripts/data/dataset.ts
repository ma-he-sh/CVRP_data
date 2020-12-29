declare var data_1_23:any;
declare var data_2_23:any;
declare var data_3_50:any;
declare var data_3_96:any;
declare var data_3_240:any;

export interface LocData {
    x:number,
    y:number,
}

export interface PayloadData {
    label:Array<string>,
    data:Array<LocData>,
    demands:Array<number>
}

export class DatasetLoader {
    public data_1_23:any;
    public data_2_23:any;
    public data_3_50:any;
    public data_3_96:any;
    public data_3_240:any;

    private static instance:DatasetLoader;

    private constructor() {
        if( data_1_23 ) {
            this.data_1_23 = data_1_23;
        }
        if( data_2_23 ) {
            this.data_2_23 = data_2_23;
        }
        if( data_3_50 ) {
            this.data_3_50 = data_3_50;
        }
        if( data_3_96 ) {
            this.data_3_96 = data_3_96;
        }
        if( data_3_240 ) {
            this.data_3_240 = data_3_240;
        }
    }

    public get_dataset( dataset:string ) {
        switch ( dataset ) {
            case "data_1_23":
                return this.data_1_23;
            case "data_2_23":
                return this.data_2_23;
            case "data_3_50":
                return this.data_3_50;
            case "data_3_96":
                return this.data_3_96;
            case "data_3_240":
                return this.data_3_240;
        }
    }

    public get_depot_point( dataset:string, depot_id:number ) {
        var payload:any = this.get_dataset( dataset );

        var retData:PayloadData = {
            label : [],
            data: [],
            demands: [],
        }

        if( dataset ) {
            var depot = payload[depot_id];
            retData.label.push(depot.location);
            retData.data.push({
                x: depot.lat,
                y: depot.lng,
            });
            retData.demands.push( depot.demand );
        }

        return retData;
    }

    public get_data_and_labels( dataset:string, points:Array<number>, addDepot:boolean=true ) {
        var payload:any = this.get_dataset( dataset );

        var retData:PayloadData = {
            label: [],
            data:  [],
            demands: [],
        }
        if( dataset ) {
            if( addDepot ) {
                points.unshift(1); // add depot
                points.push(1);    // add depot
            }

            if( points.length > 0 ) {
                points.forEach( (point:number, index:number) => {
                    //console.log( payload[point] );
                    var refPoint = payload[point];
                    if( refPoint ) {
                        retData.label.push( refPoint.location );
                        retData.data.push( {
                            x: refPoint.lat,
                            y: refPoint.lng
                        } )
                        retData.demands.push(refPoint.demand);
                    }
                } )
            }
        }

        return retData;
    }

    public static getInstance():DatasetLoader {
        if( !DatasetLoader.instance ) {
            DatasetLoader.instance = new DatasetLoader();
        }
        return DatasetLoader.instance;
    }
}