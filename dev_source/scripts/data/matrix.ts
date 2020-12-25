declare var matrix:any;

export class MatrixLoader {
    private MATRIX:any;

    public constructor() {
        this.init();
    }

    init = () => {
        if ( matrix ) {
            this.MATRIX = matrix;
            if( '0' in this.MATRIX ) {
                console.log( this.MATRIX[0] )
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