declare var matrix:any;
declare var matrix_toronto:any;

export class MatrixLoader {
    private MATRIX:any;
    private datasetID:string;

    public constructor( dataset="ontario" ) {
        this.datasetID = dataset;
        this.init();
    }

    init = () => {
        if( "ontario" === this.datasetID ) {
            if ( matrix ) {
                this.MATRIX = matrix;
                if( '0' in this.MATRIX ) {
                    console.log( this.MATRIX[0] )
                }
            } else {
                throw new Error(`Dataset not found ${this.datasetID}`);
            }
        }
        if( "toronto" === this.datasetID ) {
            if( matrix_toronto ) {
                this.MATRIX = matrix_toronto;
                if( '0' in this.MATRIX ) {
                    console.log( this.MATRIX[0] )
                }
            } else {
                throw new Error(`Dataset not found ${this.datasetID}`);
            }
        }
    }

    get_location_by_index( locIndex:number ) {
        var location = '';
        if ( this.MATRIX && '0' in this.MATRIX ) {
            Object.keys(this.MATRIX[0]).forEach(( key:any, i:number ) => {
                if( locIndex === this.MATRIX[0][key] ) {
                    location = key;
                    return location;
                }
            });
        }
        return location;
    }

    get_distance( location1:string, location2:string ) {
        var distance = 0;

        console.log( this.MATRIX[`${location1}`] );

        if( this.MATRIX && location1 in this.MATRIX && location2 in this.MATRIX ) {
            Object.keys(this.MATRIX[location1]).forEach(( location:any ) => {
                console.log( location ); 
            });
        }
    }
}