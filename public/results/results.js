var results = {
    data_1_23 : {
        aco: {
            title: 'Ant Colony Algorithm',
            description: 'Some description',
            dataset: 'data_1_23',
            id: 'ACO',
            runs: [
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[11, 12, 16, 21, 2, 17, 18, 9, 4, 14, 22, 10, 15, 23], [20, 8, 13, 5, 7, 3, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 60,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[11, 12, 16, 21, 2, 17, 18, 9, 4, 14, 22, 10, 15, 23], [7, 5, 13, 8, 20, 3, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 100,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[15, 10, 22, 14, 4, 9, 18, 17, 2, 7, 5, 13, 8, 20, 3], [19, 6, 11, 12, 16, 21, 23]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 200,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[23, 15, 10, 22, 14, 4, 9, 18, 17, 2, 7, 5, 13, 8, 20], [12, 16, 21, 3, 11, 6, 19]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 200,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[3, 20, 8, 13, 5, 7, 2, 17, 18, 9, 4, 14, 10, 22, 15], [21, 23, 16, 12, 11, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 400,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[15, 10, 22, 14, 4, 9, 18, 2, 17, 7, 5, 13, 8, 20, 3], [21, 23, 16, 12, 11, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 1000,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[11, 12, 16, 23, 15, 10, 22, 14, 4, 9, 18, 17, 2, 21], [3, 5, 7, 13, 8, 20, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[15, 10, 22, 14, 4, 9, 18, 17, 2, 7, 5, 13, 8, 20, 3], [19, 6, 11, 12, 16, 23, 21]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.02,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[11, 12, 16, 23, 15, 10, 22, 14, 4, 9, 18, 17, 2, 21], [7, 5, 13, 20, 8, 3, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[15, 10, 22, 14, 4, 9, 18, 17, 2, 7, 5, 13, 8, 20, 3], [12, 16, 21, 23, 11, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.5,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[15, 22, 10, 14, 4, 9, 18, 17, 2, 7, 5, 13, 8, 20, 3], [11, 12, 16, 23, 21, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.8,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[23, 15, 10, 22, 14, 4, 9, 18, 17, 2, 7, 5, 13, 3], [20, 8, 21, 16, 12, 11, 6, 19]],
                },
                //--##############
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 1,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[21, 2, 17, 7, 5, 13, 4, 14, 10, 22, 9, 18, 15, 3, 16], [19, 6, 11, 23, 8, 20, 12]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 3,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[7, 5, 13, 21, 2, 17, 18, 9, 4, 14, 22, 10, 15, 23, 16], [3, 20, 8, 12, 11, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[12, 16, 18, 9, 4, 14, 10, 22, 15, 23, 21, 2, 17, 7, 5], [3, 13, 8, 20, 11, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 10,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[19, 6, 11, 12, 16, 23, 15, 10, 22, 14, 4, 9, 18, 17, 2], [3, 20, 8, 13, 5, 7, 21]],
                },
                //--
                {
                    fields: {
                        alpha: 0.5,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[15, 10, 22, 14, 4, 9, 18, 2, 17, 7, 5, 13, 8, 20, 3], [23, 21, 16, 12, 11, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[10, 22, 14, 4, 9, 18, 15, 17, 2, 7, 5, 13, 8, 20, 3], [23, 21, 16, 12, 11, 6, 19]],
                },
                {
                    fields: {
                        alpha: 2,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[11, 12, 16, 21, 23, 15, 10, 22, 14, 4, 9, 18, 17, 2, 7], [3, 13, 5, 8, 20, 6, 19]],
                },
                {
                    fields: {
                        alpha: 3,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[15, 10, 22, 14, 4, 9, 18, 17, 2, 7, 5, 13, 8, 20, 3], [21, 23, 12, 16, 11, 6, 19]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 1000,
                    },
                    field: "capacity",
                    data: [[18, 9, 4, 14, 22, 10, 15], [7, 5, 13, 8, 20, 3, 16, 12], [19, 6, 11, 21, 2, 17, 23]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 1500,
                    },
                    field: "capacity",
                    data: [[11, 12, 16, 21, 2, 17, 7, 5, 13, 8, 20, 3], [15, 18, 9, 4, 14, 22, 10, 23, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2500,
                    },
                    field: "capacity",
                    data: [[23, 15, 10, 22, 14, 4, 9, 18, 17, 2, 21, 7, 5, 13, 8, 20, 3, 16], [12, 11, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2745,
                    },
                    field: "capacity",
                    data: [[3, 20, 8, 13, 5, 7, 21, 2, 17, 15, 10, 22, 14, 4, 9, 18, 23, 16, 12, 11, 6], [19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 4000,
                    },
                    field: "capacity",
                    data: [[3, 20, 8, 13, 5, 7, 2, 17, 18, 9, 4, 14, 22, 10, 15, 23, 21, 12, 16, 11, 6, 19]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 11000,
                    },
                    field: "capacity",
                    data: [[19, 6, 11, 12, 16, 23, 15, 18, 9, 4, 14, 22, 10, 17, 2, 21, 7, 5, 13, 8, 20, 3]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 15000,
                    },
                    field: "capacity",
                    data: [[19, 6, 11, 12, 16, 23, 15, 10, 22, 14, 4, 9, 18, 17, 2, 21, 7, 5, 13, 8, 20, 3]],
                },
            ]
        },
        sweep: {
            title: 'Sweep Algorithm',
            description: 'Some description',
            dataset: 'data_1_23',
            id: 'SWEEP',
            runs: [
                {
                    fields: {
                        capacity: 1000,
                    },
                    field: "capacity",
                    data: [[6, 3, 8, 5, 7, 2, 9, 4], [11, 12, 16, 15, 14, 13], [19, 20, 21, 18, 22]],
                },
                {
                    fields: {
                        capacity: 1500,
                    },
                    field: "capacity",
                    data: [[11, 6, 12, 3, 8, 13, 5, 7, 2, 9, 4, 10], [20, 19, 16, 21, 17, 18, 15, 22]],
                },
                {
                    fields: {
                        capacity: 2000,
                    },
                    field: "capacity",
                    data: [[11, 6, 12, 16, 3, 8, 13, 5, 7, 2, 17, 15, 10, 14, 4, 9], [19, 20, 21, 22]],
                },
                {
                    fields: {
                        capacity: 2500,
                    },
                    field: "capacity",
                    data: [[11, 6, 19, 12, 16, 15, 10, 14, 4, 9, 18, 17, 2, 7, 5, 13, 8, 3], [21, 22]],
                },
                {
                    fields: {
                        capacity: 2745,
                    },
                    field: "capacity",
                    data: [[11, 6, 19, 12, 16, 3, 20, 8, 13, 5, 7, 21, 2, 17, 15, 18, 9, 4, 14, 10], []],
                },
                {
                    fields: {
                        capacity: 4000,
                    },
                    field: "capacity",
                    data: [[11, 6, 19, 12, 16, 3, 20, 8, 13, 5, 7, 21, 2, 17, 18, 9, 4, 14, 22, 10, 15]],
                },
                {
                    fields: {
                        capacity: 11000,
                    },
                    field: "capacity",
                    data: [[11, 6, 19, 12, 16, 3, 20, 8, 13, 5, 7, 21, 2, 17, 18, 9, 4, 14, 22, 10, 15]],
                },
                {
                    fields: {
                        capacity: 15000,
                    },
                    field: "capacity",
                    data: [[11, 6, 19, 12, 16, 3, 20, 8, 13, 5, 7, 21, 2, 17, 18, 9, 4, 14, 22, 10, 15]],
                },
            ]
        },
        ga: {
            title: 'Genetic Algorithm',
            description: 'Some description',
            dataset: 'data_1_23',
            id: 'GA',
            runs: []
        }
    },
    data_2_23: {
        aco: {
            title: 'Ant Colony Algorithm',
            description: 'Some description',
            dataset: 'data_2_23',
            id: 'ACO',
            runs: [
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[22, 11, 21, 18, 17, 16, 19, 23, 9, 7, 2, 15, 20, 5], [6, 14, 13, 10, 8, 4, 3, 12]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 60,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[15, 20, 2, 7, 9, 11, 22, 21, 18, 17, 16, 19, 23], [8, 5, 13, 10, 6, 14, 4, 3, 12]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 100,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[23, 19, 16, 17, 18, 21, 11, 22, 9, 7, 2, 20, 15, 4, 3], [5, 8, 12, 13, 10, 6, 14]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 200,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[23, 19, 16, 17, 18, 21, 11, 22, 9, 7, 2, 20, 15], [13, 14, 6, 10, 5, 8, 4, 3, 12]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 200,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[23, 19, 16, 17, 18, 21, 22, 11, 9, 7, 2, 20, 15], [6, 14, 13, 10, 5, 8, 3, 4, 12]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 400,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[9, 20, 15, 2, 7, 11, 22, 21, 18, 17, 16, 19, 23], [13, 10, 6, 14, 12, 4, 3, 8, 5]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 1000,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[15, 20, 7, 2, 9, 11, 22, 21, 18, 17, 16, 19, 23], [12, 4, 3, 8, 5, 10, 13, 6, 14]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[23, 19, 16, 17, 18, 21, 11, 22, 9, 7, 2, 20, 15], [14, 6, 13, 10, 5, 8, 3, 4, 12]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.02,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[23, 19, 16, 17, 18, 22, 21, 11, 9, 7, 2, 20, 15], [3, 4, 12, 13, 10, 14, 6, 5, 8]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[15, 20, 7, 2, 9, 11, 22, 21, 18, 17, 16, 19, 23], [8, 5, 10, 13, 12, 3, 4, 14, 6]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.5,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[15, 20, 7, 2, 9, 11, 22, 21, 18, 16, 17, 19, 23], [8, 5, 10, 13, 6, 14, 12, 3, 4]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.8,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[23, 19, 17, 16, 18, 21, 22, 11, 9, 7, 2, 20, 15], [12, 13, 10, 6, 14, 5, 8, 3, 4]],
                },
                //--##############
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 1,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[23, 3, 4, 12, 10, 5, 11, 22, 20, 15, 2, 7, 9, 8], [13, 19, 21, 18, 16, 17, 6, 14]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 3,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[7, 9, 2, 15, 20, 11, 22, 21, 18, 17, 16, 19, 23, 3, 4], [13, 12, 6, 14, 10, 5, 8]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[23, 19, 16, 17, 18, 21, 22, 11, 9, 7, 2, 20, 15, 3, 4], [12, 6, 14, 13, 10, 5, 8]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 10,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[15, 20, 2, 7, 9, 11, 22, 21, 18, 17, 16, 19, 23], [13, 10, 5, 8, 4, 3, 12, 14, 6]],
                },
                //--
                {
                    fields: {
                        alpha: 0.5,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[15, 20, 7, 2, 9, 21, 22, 11, 18, 17, 16, 19, 23], [4, 3, 12, 13, 10, 8, 5, 14, 6]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[16, 17, 18, 11, 21, 22, 19, 23, 9, 7, 2, 15, 20], [4, 3, 12, 14, 6, 10, 13, 5, 8]],
                },
                {
                    fields: {
                        alpha: 2,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[9, 7, 2, 20, 15, 11, 22, 21, 16, 17, 18, 19, 23], [3, 4, 12, 13, 10, 6, 14, 5, 8]],
                },
                {
                    fields: {
                        alpha: 3,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[23, 19, 16, 17, 18, 21, 22, 11, 9, 7, 2, 20, 15, 4, 3], [13, 12, 14, 6, 10, 5, 8]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 1000,
                    },
                    field: "capacity",
                    data: [[16, 17, 18, 21, 22, 11, 19, 23], [12, 6, 14, 13, 10, 5, 8], [9, 7, 2, 20, 15, 4], [3]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 1500,
                    },
                    field: "capacity",
                    data: [[14, 6, 12, 4, 3, 21, 22, 11, 18, 17, 16, 19, 23], [13, 10, 5, 8, 9, 7, 2, 20, 15]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2500,
                    },
                    field: "capacity",
                    data: [[13, 10, 5, 8, 23, 19, 16, 17, 18, 21, 11, 22, 9, 2, 7, 20, 15], [14, 6, 12, 4, 3]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2745,
                    },
                    field: "capacity",
                    data: [[6, 14, 13, 10, 5, 8, 23, 19, 16, 17, 18, 21, 11, 22, 9, 7, 2, 20, 15, 4, 3], [12]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 4000,
                    },
                    field: "capacity",
                    data: [[12, 4, 3, 8, 23, 19, 17, 16, 18, 21, 22, 11, 9, 7, 2, 15, 20, 5, 10, 13, 6, 14]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 11000,
                    },
                    field: "capacity",
                    data: [[12, 4, 3, 8, 23, 19, 16, 17, 18, 21, 11, 22, 9, 7, 2, 20, 15, 5, 13, 10, 6, 14]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 15000,
                    },
                    field: "capacity",
                    data: [[14, 6, 13, 10, 5, 8, 23, 19, 16, 17, 18, 21, 22, 11, 9, 7, 2, 20, 15, 12, 4, 3]],
                },
            ]
        },
        sweep: {
            title: 'Sweep Algorithm',
            description: 'Some description',
            dataset: 'data_2_23',
            id: 'SWEEP',
            runs: [
                {
                    fields: {
                        capacity: 1000,
                    },
                    field: "capacity",
                    data: [[3, 4, 6, 5, 7, 2], [12, 11, 9, 10, 13], [15, 20, 19, 16, 17, 18], [22]],
                },
                {
                    fields: {
                        capacity: 1500,
                    },
                    field: "capacity",
                    data: [[6, 10, 5, 7, 2, 11, 9, 8, 3, 4], [14, 13, 20, 15, 19, 16, 17, 18, 21], []],
                },
                {
                    fields: {
                        capacity: 2000,
                    },
                    field: "capacity",
                    data: [[3, 4, 12, 14, 6, 13, 10, 5, 8, 15, 2, 7, 9, 11], [20, 22, 21, 18, 17, 19]],
                },
                {
                    fields: {
                        capacity: 2500,
                    },
                    field: "capacity",
                    data: [[3, 4, 12, 14, 6, 13, 10, 5, 8, 19, 16, 17, 18, 11, 9, 7, 2, 15], [22, 21]],
                },
                {
                    fields: {
                        capacity: 2745,
                    },
                    field: "capacity",
                    data: [[3, 4, 12, 14, 6, 13, 10, 5, 8, 19, 16, 17, 18, 7, 2, 15, 20, 9, 11], [22]],
                },
                {
                    fields: {
                        capacity: 4000,
                    },
                    field: "capacity",
                    data: [[3, 4, 12, 14, 6, 13, 10, 5, 8, 20, 15, 2, 7, 9, 11, 22, 21, 18, 17, 16, 19]],
                },
                {
                    fields: {
                        capacity: 11000,
                    },
                    field: "capacity",
                    data: [[3, 4, 12, 14, 6, 13, 10, 5, 8, 20, 15, 2, 7, 9, 11, 22, 21, 18, 17, 16, 19]],
                },
                {
                    fields: {
                        capacity: 15000,
                    },
                    field: "capacity",
                    data: [[3, 4, 12, 14, 6, 13, 10, 5, 8, 20, 15, 2, 7, 9, 11, 22, 21, 18, 17, 16, 19]],
                },
            ]
        },
        ga: {
            title: 'Genetic Algorithm',
            description: 'Some description',
            dataset: 'data_2_23',
            id: 'GA',
            runs: []
        }
    },
    data_3_50: {
        aco: {
            title: 'Ant Colony Algorithm',
            description: 'Some description',
            dataset: 'data_3_50',
            id: 'ACO',
            runs: [
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[12, 32, 37, 7, 34, 40, 19, 50, 39, 28, 31, 13, 38, 35], [45, 24, 30, 42, 25, 49, 44, 14, 41, 26, 21, 10, 47, 18, 16], [43, 2, 5, 27, 15, 17, 11, 3, 23, 36, 33], [8, 6, 22, 20, 9, 46, 29, 4, 48]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 60,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[35, 38, 13, 31, 50, 19, 39, 28, 45, 24, 40, 34, 7, 37], [22, 16, 18, 20, 9, 29, 48, 4, 32, 12, 6], [23, 43, 2, 5, 27, 15, 17, 11, 3, 41, 26, 14, 44], [8, 46, 47, 10, 33, 21, 36, 30, 42, 25, 49]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 100,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[14, 44, 26, 41, 36, 21, 30, 42, 25, 49, 45, 24, 38, 35, 13, 31, 50], [16, 22, 18, 46, 20, 9, 29, 48, 4, 8, 6, 32], [3, 11, 17, 15, 43, 2, 5, 27, 23, 7, 34, 40, 37], [10, 47, 33, 19, 39, 28, 12]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 200,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[30, 42, 25, 49, 45, 24, 35, 38, 13, 31, 50, 19, 7, 34, 40, 37], [43, 2, 5, 27, 15, 17, 11, 23, 3, 41, 26, 44, 14], [10, 47, 33, 39, 28, 21, 36, 16, 18, 22, 8], [4, 48, 29, 9, 20, 46, 6, 32, 12]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 200,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[19, 50, 31, 13, 38, 35, 24, 45, 49, 25, 42, 30, 28, 39], [3, 23, 36, 26, 41, 44, 14, 21, 10, 47, 33, 40, 34, 7, 37], [11, 17, 15, 27, 5, 2, 43, 9, 20, 46, 18, 16], [4, 48, 29, 8, 6, 22, 12, 32]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 400,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[32, 12, 37, 7, 34, 40, 19, 50, 39, 28, 31, 13, 38, 35], [36, 26, 41, 44, 14, 21, 30, 42, 25, 49, 45, 24, 20, 9, 8, 6], [17, 15, 27, 5, 2, 43, 23, 11, 3, 33, 10, 47], [29, 48, 4, 16, 22, 18, 46]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 1000,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[37, 7, 34, 40, 19, 50, 31, 13, 35, 38, 24, 45, 49, 25, 42, 30], [8, 6, 22, 16, 18, 46, 20, 9, 29, 4, 48, 32], [41, 26, 36, 3, 11, 17, 15, 27, 5, 2, 43, 23], [10, 47, 33, 28, 39, 21, 44, 14, 12]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[22, 16, 18, 46, 6, 8, 9, 20, 4, 48, 29, 37, 34], [50, 19, 31, 13, 38, 35, 24, 45, 49, 25, 42, 30, 28, 39], [3, 11, 17, 15, 43, 2, 5, 27, 23, 36, 41, 26], [14, 44, 21, 33, 47, 10, 7, 40, 12, 32]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.02,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[13, 35, 38, 24, 45, 49, 25, 42, 30, 39, 28, 31, 50, 19], [34, 7, 40, 37, 47, 10, 33, 21, 44, 14, 26, 41, 36, 23, 11], [3, 17, 15, 43, 2, 5, 27, 4, 48, 29, 9, 20, 46], [18, 16, 22, 6, 8, 32, 12]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[43, 2, 5, 27, 15, 17, 11, 23, 3, 21, 33, 37], [36, 41, 26, 44, 14, 30, 42, 25, 49, 45, 24, 38, 35, 13, 31], [34, 40, 7, 19, 50, 39, 28, 16, 22, 18, 46], [48, 4, 29, 20, 9, 8, 6, 32, 12, 10, 47]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.5,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[29, 4, 48, 20, 9, 46, 16, 22, 18, 8, 6, 32], [43, 2, 5, 27, 15, 17, 11, 3, 23, 36, 41, 26, 44], [33, 19, 50, 31, 13, 38, 35, 24, 45, 7, 34, 40, 37, 47, 10], [49, 25, 42, 30, 28, 39, 21, 14, 12]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.8,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[4, 48, 29, 9, 20, 46, 22, 16, 18, 8, 6, 32], [3, 11, 17, 15, 43, 2, 5, 27, 23, 36, 41, 26, 44], [37, 34, 40, 7, 31, 13, 35, 38, 24, 45, 42, 25, 49, 30, 28], [33, 10, 47, 19, 50, 39, 14, 21, 12]],
                },
                //--##############
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 1,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[22, 16, 8, 20, 9, 7, 40, 32, 12, 10, 46, 33, 21], [3, 35, 18, 34, 49, 48, 4, 29, 45, 24, 13, 30, 38], [14, 17, 15, 43, 2, 27, 5, 11, 23, 41, 26, 44, 47], [50, 31, 25, 42, 28, 39, 19, 6, 37, 36]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 3,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[14, 44, 21, 19, 31, 28, 39, 13, 38, 35, 24, 45, 40], [42, 49, 25, 30, 50, 10, 47, 7, 34, 37, 16, 22, 18, 8], [43, 2, 5, 27, 15, 17, 3, 11, 23, 36, 41, 26], [33, 46, 20, 9, 48, 4, 29, 6, 12, 32]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[19, 50, 31, 13, 38, 35, 24, 45, 49, 25, 42, 30, 21, 44, 14, 26], [12, 32, 37, 7, 34, 40, 28, 39, 33, 47, 10, 18], [3, 41, 36, 23, 11, 17, 15, 2, 5, 27, 43], [16, 22, 6, 8, 9, 20, 46, 29, 48, 4]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 10,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[6, 22, 16, 18, 46, 20, 9, 29, 4, 48, 8, 12], [45, 24, 35, 38, 13, 31, 28, 39, 50, 19, 34, 7, 37, 40], [3, 11, 17, 15, 43, 2, 5, 27, 23, 36, 41, 26, 44], [49, 25, 42, 30, 21, 14, 33, 47, 10, 32]],
                },
                //--
                {
                    fields: {
                        alpha: 0.5,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[40, 34, 7, 37, 10, 47, 18, 16, 22, 6, 8, 9, 20, 46], [14, 44, 26, 41, 36, 21, 33, 39, 28, 31, 13, 38, 35], [17, 11, 3, 23, 15, 27, 5, 2, 43, 4, 48, 29], [24, 45, 25, 49, 42, 30, 50, 19, 12, 32]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[18, 22, 16, 46, 8, 20, 9, 4, 48, 29, 6, 32], [13, 35, 38, 24, 45, 49, 25, 42, 30, 28, 19, 50, 31, 34], [43, 2, 5, 27, 15, 17, 11, 23, 3, 41, 26, 14, 44], [37, 7, 40, 10, 47, 33, 39, 21, 36, 12]],
                },
                {
                    fields: {
                        alpha: 2,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[19, 50, 28, 31, 13, 38, 35, 24, 45, 49, 25, 42, 30, 39], [16, 22, 18, 7, 34, 40, 37, 10, 47, 33, 41, 26, 44], [21, 14, 36, 3, 11, 17, 15, 2, 5, 27, 43, 23], [12, 32, 6, 46, 8, 20, 9, 29, 4, 48]],
                },
                {
                    fields: {
                        alpha: 3,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[41, 26, 14, 44, 19, 50, 31, 13, 38, 35, 24, 45, 30, 42, 25, 49, 40], [3, 11, 17, 15, 43, 2, 5, 27, 23, 36, 21], [9, 20, 46, 18, 16, 22, 6, 8, 29, 48, 4, 47, 10], [37, 34, 7, 33, 39, 28, 12, 32]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 1000,
                    },
                    field: "capacity",
                    data: [[13, 38, 35, 31, 28, 39], [30, 42, 25, 49, 45, 24, 19, 50], [22, 16, 18, 46, 20], [29, 4, 48, 9, 8, 6], [43, 2, 5, 27, 15, 17], [32, 12, 10, 47, 37, 40, 34, 7], [21, 44, 14, 26, 41, 36, 33], [3, 11, 23]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 1500,
                    },
                    field: "capacity",
                    data: [[38, 35, 13, 31, 28, 39, 50, 19, 7], [32, 12, 37, 34, 40, 24, 45, 49, 25, 42, 30, 44, 14], [16, 22, 18, 20, 9, 29, 48, 4, 8], [6, 46, 47, 10, 33, 26, 41, 36, 3, 23], [43, 2, 5, 27, 15, 17, 11, 21]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2500,
                    },
                    field: "capacity",
                    data: [[7, 34, 40, 37, 38, 35, 13, 31, 50, 19, 39, 28, 30, 42, 25, 49, 45, 24], [33, 10, 47, 9, 20, 46, 16, 22, 18, 12, 32, 6, 8, 29, 4, 48], [44, 14, 26, 41, 3, 11, 17, 15, 27, 5, 2, 43, 23, 36, 21]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2745,
                    },
                    field: "capacity",
                    data: [[47, 10, 7, 34, 37, 40, 19, 50, 31, 13, 38, 35, 24, 45, 49, 25, 42, 30, 28, 39], [33, 21, 14, 44, 26, 41, 36, 23, 3, 11, 17, 15, 27, 5, 2, 43, 18], [32, 12, 22, 16, 46, 9, 20, 8, 6, 29, 48, 4]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 4000,
                    },
                    field: "capacity",
                    data: [[37, 7, 34, 40, 19, 50, 39, 28, 31, 13, 38, 35, 24, 45, 49, 25, 42, 30, 41, 26, 44, 14, 21, 18, 16, 22, 6, 8], [3, 11, 17, 15, 43, 2, 5, 27, 23, 36, 33, 10, 47, 46, 20, 9, 48, 4, 29, 32, 12]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 11000,
                    },
                    field: "capacity",
                    data: [[47, 10, 34, 7, 37, 40, 19, 50, 39, 28, 31, 13, 38, 35, 24, 45, 49, 25, 42, 30, 21, 44, 14, 41, 26, 36, 3, 11, 17, 15, 43, 2, 5, 27, 23, 33, 12, 32, 22, 16, 18, 46, 20, 9, 8, 6, 29, 4, 48]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 15000,
                    },
                    field: "capacity",
                    data: [[29, 48, 4, 20, 9, 8, 6, 22, 16, 18, 37, 7, 34, 40, 38, 35, 13, 31, 50, 19, 10, 47, 33, 39, 28, 42, 25, 49, 45, 24, 30, 21, 44, 14, 41, 26, 3, 11, 17, 15, 27, 5, 2, 43, 23, 36, 46, 12, 32]],
                },
            ]
        },
        sweep: {
            title: 'Sweep Algorithm',
            description: 'Some description',
            dataset: 'data_3_50',
            id: 'SWEEP',
            runs: [
                {
                    fields: {
                        capacity: 1000,
                    },
                    field: "capacity",
                    data: [[7, 4, 8, 2, 3, 5, 6], [11, 12, 13, 10], [18, 15, 17, 19, 16], [21, 23, 22, 24], [28, 27, 26], [31, 32, 30], [36, 34, 37, 35], [42, 41, 39, 40], [45, 44, 46], [48, 49]],
                },
                {
                    fields: {
                        capacity: 1500,
                    },
                    field: "capacity",
                    data: [[9, 6, 11, 5, 12, 3, 7, 4, 10, 8, 2], [19, 20, 16, 18, 17, 15, 14], [26, 22, 27, 24, 25, 23], [31, 34, 32, 30, 29, 33], [41, 39, 40, 38, 36, 37], [44, 47, 46, 45, 43], [49]],
                },
                {
                    fields: {
                        capacity: 2000,
                    },
                    field: "capacity",
                    data: [[12, 6, 8, 4, 9, 13, 7, 10, 14, 3, 11, 2, 5], [22, 16, 20, 18, 19, 24, 25, 21, 26, 17, 23], [32, 29, 37, 34, 33, 36, 30, 28, 31, 35], [46, 48, 43, 41, 44, 47, 40, 45, 49, 42, 39]],
                },
                {
                    fields: {
                        capacity: 2500,
                    },
                    field: "capacity",
                    data: [[9, 16, 5, 11, 12, 6, 3, 13, 14, 15, 2, 17, 8, 10, 4, 7], [25, 24, 27, 22, 30, 26, 29, 20, 19, 21, 28, 23], [41, 32, 39, 40, 35, 38, 33, 43, 42, 36, 37, 34], [47, 46, 45, 48, 49]],
                },
                {
                    fields: {
                        capacity: 2745,
                    },
                    field: "capacity",
                    data: [[18, 7, 4, 10, 8, 15, 14, 2, 17, 13, 3, 19, 9, 6, 12, 11, 16, 5], [25, 28, 23, 31, 21, 29, 33, 26, 24, 27, 30, 22, 32], [41, 39, 40, 38, 35, 43, 45, 42, 37, 36, 44, 46], [48, 49]],
                },
                {
                    fields: {
                        capacity: 4000,
                    },
                    field: "capacity",
                    data: [[25, 18, 7, 23, 4, 10, 8, 17, 2, 15, 14, 21, 13, 3, 19, 9, 6, 12, 11, 20, 5, 26, 16, 24, 22], [41, 32, 39, 30, 40, 35, 38, 33, 29, 43, 45, 42, 37, 36, 44, 28, 31, 46, 34], [48, 49]],
                },
                {
                    fields: {
                        capacity: 11000,
                    },
                    field: "capacity",
                    data: [[25, 44, 18, 7, 28, 23, 46, 4, 47, 34, 10, 8, 31, 37, 36, 45, 42, 21, 14, 15, 2, 17, 13, 3, 19, 9, 6, 12, 11, 43, 20, 29, 5, 33, 48, 26, 38, 35, 40, 16, 24, 27, 49, 30, 41, 39, 32, 22]],
                },
                {
                    fields: {
                        capacity: 15000,
                    },
                    field: "capacity",
                    data: [[25, 44, 18, 7, 28, 23, 46, 4, 47, 34, 10, 8, 31, 37, 36, 45, 42, 21, 14, 15, 2, 17, 13, 3, 19, 9, 6, 12, 11, 43, 20, 29, 5, 33, 48, 26, 38, 35, 40, 16, 24, 27, 49, 30, 41, 39, 32, 22]],
                },
            ]
        },
        ga: {
            title: 'Genetic Algorithm',
            description: 'Some description',
            dataset: 'data_3_50',
            id: 'GA',
            runs: []
        }
    },
    data_3_96: {
        aco: {
            title: 'Ant Colony Algorithm',
            description: 'Some description',
            dataset: 'data_3_96',
            id: 'ACO',
            runs: [
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[85, 26, 82, 54, 48, 31, 20, 92, 17, 69], [78, 33, 11, 88, 51, 39, 24, 27, 15, 46, 53], [14, 60, 58, 96, 49, 5, 94, 62, 91, 35, 34, 18, 87], [2, 57, 22, 65, 77, 52, 71, 10, 40, 29, 16], [44, 38, 76, 56, 30, 12, 19, 13, 89, 90, 42, 74, 67, 55, 84, 23, 3, 59], [68, 73, 9, 79, 61, 6, 66, 37, 81, 43, 95, 83], [64, 70, 4, 36, 25, 28, 86, 50, 45, 41, 93, 32], [63, 80, 72, 7, 21, 75, 8, 47]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 60,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[57, 65, 22, 77, 2, 53, 46, 15, 54], [29, 40, 16, 75, 21, 7, 8, 10, 71, 52, 11], [69, 5, 58, 96, 17, 49, 60, 18, 35, 34, 87, 14], [19, 12, 13, 89, 90, 74, 67, 42, 62, 91, 55, 94, 84], [23, 3, 59, 20, 92, 48, 82, 26, 47, 24, 85, 31], [38, 44, 76, 56, 30, 86, 28, 25, 50, 45, 41, 36, 4, 64, 70, 51], [37, 66, 6, 9, 79, 61, 73, 68, 81, 43, 95, 83], [27, 39, 78, 88, 33, 72, 80, 63, 93, 32]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 100,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[11, 33, 78, 22, 65, 2, 53, 54, 82, 47], [68, 73, 9, 79, 61, 6, 66, 37, 81, 43, 95, 83, 41, 45], [69, 17, 49, 5, 58, 96, 44, 38, 76, 30, 56, 31, 26, 85, 24, 27], [12, 19, 13, 89, 90, 67, 74, 42, 34, 35, 18, 87], [63, 80, 72, 52, 77, 57, 15, 46, 48, 20, 92], [71, 10, 40, 29, 16, 7, 21, 75, 8, 88, 51, 39], [70, 64, 36, 4, 86, 28, 25, 50, 93, 32, 55], [84, 91, 62, 94, 60, 14, 3, 59, 23]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 200,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[38, 44, 96, 49, 5, 69, 17, 58, 60, 62, 91, 18, 34, 35], [89, 74, 67, 42, 90, 13, 19, 12, 87, 14, 94, 55, 84, 31], [27, 15, 46, 53, 2, 22, 65, 57, 78, 11, 33, 39], [48, 54, 82, 26, 47, 24, 85, 20, 92, 59], [37, 66, 6, 61, 79, 9, 73, 68, 81, 43, 95, 83, 41, 45], [25, 28, 86, 50, 36, 4, 64, 70, 51, 88, 56, 76, 30, 23], [72, 71, 10, 40, 29, 16, 7, 21, 75, 8, 52], [32, 93, 63, 80, 77, 3]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 200,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[27, 46, 15, 54, 82, 26, 20, 92], [23, 3, 59, 69, 5, 49, 17, 96, 58, 60, 14, 87, 18, 34, 35], [77, 22, 65, 57, 2, 53, 88, 51, 39, 24, 47, 48, 31, 85], [84, 55, 94, 62, 91, 12, 19, 13, 89, 90, 74, 67, 42], [28, 25, 36, 4, 86, 50, 45, 41, 70, 64, 76, 56, 30, 38, 44], [63, 80, 16, 29, 40, 21, 75, 7, 8, 10, 71, 52], [95, 43, 81, 37, 66, 6, 9, 79, 61, 68, 73, 83], [11, 33, 78, 72, 93, 32]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 400,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[82, 26, 85, 47, 15, 46, 24, 31, 48, 54], [87, 18, 34, 35, 12, 19, 13, 89, 90, 74, 67, 42, 91], [37, 66, 6, 9, 79, 61, 73, 68, 81, 95, 43, 32], [71, 10, 40, 29, 16, 8, 7, 21, 75, 52, 72], [65, 57, 22, 2, 53, 88, 51, 39, 11, 33, 78, 27, 20], [62, 94, 55, 84, 69, 17, 49, 96, 58, 60, 14, 5], [3, 59, 23, 92, 44, 38, 76, 56, 30, 70, 64, 4, 36, 25, 28], [86, 50, 45, 41, 83, 93, 63, 80, 77]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 1000,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[49, 58, 96, 5, 69, 17, 92, 20, 31, 82, 26], [16, 29, 40, 7, 21, 75, 8, 10, 71, 52, 57], [85, 47, 15, 27, 24, 51, 39, 88, 46, 54, 48], [65, 22, 53, 2, 77, 72, 80, 63, 33, 11, 78], [55, 84, 94, 91, 62, 60, 87, 18, 35, 34, 19], [90, 67, 42, 74, 89, 13, 12, 14, 44, 38, 76, 56, 30, 70], [61, 73, 68, 79, 9, 6, 66, 37, 81, 43, 95, 83, 41, 45], [25, 28, 86, 50, 93, 32, 4, 36, 64, 23, 3, 59]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[8, 29, 16, 40, 7, 21, 75, 10, 71, 52], [47, 54, 82, 26, 85, 51, 39, 24, 27, 15], [42, 74, 67, 90, 89, 13, 19, 12, 35, 34, 18, 87], [37, 66, 6, 61, 79, 9, 73, 68, 81, 43, 95, 83], [2, 53, 46, 48, 31, 20, 92, 17, 49, 58, 96, 5, 69], [59, 3, 84, 94, 55, 91, 62, 60, 14, 38, 44, 76, 56, 30], [88, 33, 11, 78, 57, 65, 22, 77, 72, 80, 63, 36, 4], [23, 70, 64, 25, 28, 86, 45, 41, 50, 93, 32]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.02,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[15, 27, 47, 26, 82, 54, 48, 31, 20, 92], [67, 74, 42, 89, 90, 13, 12, 19, 18, 91, 62, 94], [78, 2, 57, 22, 65, 77, 52, 53, 46, 24, 51, 39], [60, 58, 49, 17, 96, 44, 38, 14, 87, 35, 34, 84, 55, 5], [43, 95, 81, 66, 6, 9, 79, 61, 73, 68, 37, 83, 41, 45], [10, 71, 8, 16, 29, 40, 7, 21, 75, 63, 80, 72], [70, 64, 4, 36, 25, 28, 86, 50, 32, 93], [59, 3, 23, 69, 56, 76, 30, 85, 88, 11, 33]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[57, 65, 22, 2, 53, 27, 15, 47, 26, 82], [37, 66, 6, 61, 79, 9, 73, 68, 81, 95, 43, 41, 45, 50, 25], [93, 32, 83, 86, 28, 4, 36, 24, 51, 39, 85], [11, 33, 70, 64, 88, 78, 72, 80, 63, 77], [49, 58, 5, 69, 17, 96, 44, 38, 30, 56, 76, 54, 48, 31, 20, 92], [59, 3, 23, 84, 94, 55, 91, 62, 60, 14, 87, 18, 34], [40, 29, 16, 7, 21, 75, 8, 10, 71, 52, 46], [42, 74, 67, 90, 89, 19, 12, 13, 35]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.5,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[42, 67, 74, 90, 89, 13, 19, 12, 34, 35, 18, 87], [3, 59, 23, 69, 5, 49, 17, 92, 20, 48, 82, 26], [25, 28, 86, 50, 45, 41, 83, 32, 93, 63, 80, 72, 57], [15, 27, 47, 51, 39, 24, 85, 31, 54, 46, 88, 78], [40, 29, 16, 7, 21, 75, 8, 10, 71, 52, 65], [37, 66, 6, 61, 79, 9, 73, 68, 81, 95, 43, 76, 56, 30, 58, 60, 55], [70, 64, 4, 36, 33, 11, 53, 2, 77, 22], [84, 94, 91, 62, 14, 44, 38, 96]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.8,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[60, 58, 49, 17, 96, 5, 69, 92, 20, 31, 48, 54, 47, 26], [52, 71, 10, 40, 29, 16, 7, 21, 75, 8, 80, 63], [87, 18, 34, 35, 13, 19, 12, 89, 90, 67, 74, 42], [66, 6, 37, 73, 68, 61, 79, 9, 81, 43, 95, 83, 41, 45], [33, 11, 65, 57, 22, 78, 88, 51, 39, 15, 46, 27], [28, 25, 86, 50, 93, 32, 36, 4, 70, 64], [3, 23, 59, 84, 55, 94, 62, 91, 14, 44, 38, 76, 56, 30], [77, 72, 2, 53, 85, 24, 82]],
                },
                //--##############
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 1,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[28, 23, 72, 11, 15, 47, 75, 7, 40, 16, 25, 64], [96, 17, 26, 84, 14, 67, 46, 49, 13, 60, 62, 54, 31], [6, 81, 66, 61, 79, 9, 73, 68, 95, 39, 24], [33, 38, 44, 58, 76, 30, 89, 90, 77, 92, 42, 74], [69, 5, 29, 71, 10, 27, 53, 22, 82, 70, 4], [85, 51, 52, 48, 3, 59, 2, 87, 18, 35, 91, 94, 55, 34], [20, 88, 78, 65, 57, 50, 41, 83, 86, 80, 63, 37, 43], [8, 21, 56, 12, 19, 45, 32, 93, 36]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 3,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[53, 2, 22, 65, 57, 88, 51, 26, 82, 47, 15], [52, 77, 72, 24, 85, 54, 48, 31, 20, 27], [42, 74, 67, 90, 34, 35, 13, 12, 19, 60, 58, 49, 5, 17, 69], [78, 4, 36, 25, 28, 86, 93, 32, 50, 45, 41, 70], [71, 10, 40, 29, 16, 7, 21, 75, 8, 80, 63, 11], [3, 59, 23, 92, 96, 44, 84, 94, 55, 91, 18, 87, 14], [73, 68, 37, 66, 6, 61, 79, 9, 81, 43, 95, 83], [38, 30, 56, 76, 39, 64, 46, 33, 62, 89]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[59, 23, 3, 84, 55, 94, 60, 14, 87, 18, 35, 34], [89, 74, 67, 42, 90, 13, 19, 12, 30, 56, 76, 17, 49, 58, 5, 69, 96, 44], [37, 66, 6, 9, 79, 61, 68, 73, 81, 43, 95, 83, 41, 45], [20, 92, 24, 85, 26, 47, 15, 27, 46], [63, 80, 72, 11, 33, 88, 51, 39, 78, 57, 65, 22, 77], [29, 16, 21, 75, 7, 8, 40, 10, 71, 52, 53], [93, 32, 4, 36, 64, 70, 25, 28, 50, 86], [54, 48, 31, 82, 2, 38, 62, 91]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 10,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[93, 32, 86, 28, 25, 36, 4, 64, 70, 39, 51], [31, 48, 54, 82, 26, 47, 15, 27, 24, 85], [40, 29, 16, 7, 21, 75, 8, 10, 71, 52], [59, 3, 23, 84, 55, 94, 62, 91, 18, 87, 14, 60, 58, 49, 96, 17], [42, 67, 74, 90, 89, 13, 12, 19, 34, 35, 69, 5], [92, 20, 76, 56, 30, 38, 44, 46, 53, 2, 57, 65, 22], [95, 43, 81, 37, 66, 6, 9, 79, 61, 73, 68, 83, 41, 45], [77, 78, 88, 33, 11, 72, 80, 63, 50]],
                },
                //--
                {
                    fields: {
                        alpha: 0.5,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[48, 31, 82, 26, 85, 47, 15, 27, 46, 53, 2, 22], [36, 4, 64, 70, 51, 39, 88, 78, 33, 11, 57, 65], [40, 29, 16, 7, 21, 75, 8, 10, 71, 52], [30, 76, 56, 38, 44, 17, 49, 5, 69, 96, 58, 60, 14, 87, 18, 34], [90, 74, 67, 42, 89, 13, 19, 12, 35, 62, 91, 55, 94], [9, 79, 61, 6, 66, 37, 68, 73, 81, 95, 43, 83], [28, 25, 86, 50, 45, 41, 93, 32, 63, 80, 72, 77, 23], [59, 3, 84, 20, 92, 54, 24]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[69, 5, 58, 49, 17, 96, 44, 38, 76, 56, 30, 26, 82, 85], [78, 57, 65, 22, 2, 53, 47, 15, 27, 46, 54, 48, 31], [94, 55, 84, 91, 62, 18, 87, 14, 60, 92, 20, 23], [45, 41, 50, 86, 28, 25, 64, 70, 39, 51, 88, 24], [37, 66, 6, 9, 79, 61, 73, 68, 81, 43, 95, 83], [72, 52, 77, 33, 11, 80, 63, 36, 4, 3, 59], [32, 93, 10, 71, 40, 29, 16, 7, 75, 21, 8], [74, 42, 67, 90, 89, 13, 19, 12, 34, 35]],
                },
                {
                    fields: {
                        alpha: 2,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[61, 79, 9, 6, 66, 37, 68, 73, 81, 43, 95, 83, 41, 45], [96, 58, 49, 17, 5, 69, 62, 91, 35, 34, 18, 87], [77, 22, 65, 57, 78, 88, 51, 39, 64, 70, 56, 76, 31, 48], [84, 94, 55, 60, 14, 12, 19, 13, 89, 90, 67, 74, 42], [11, 33, 4, 36, 28, 86, 25, 50, 93, 32, 47], [23, 3, 59, 20, 92, 44, 38, 30, 24, 85, 26, 82], [75, 21, 7, 16, 29, 40, 8, 10, 71, 52, 72], [46, 15, 27, 54, 53, 2, 63, 80]],
                },
                {
                    fields: {
                        alpha: 3,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[49, 17, 5, 69, 92, 20, 31, 48, 54, 82, 26], [53, 2, 22, 11, 33, 78, 57, 65, 77, 52, 71, 10], [96, 58, 60, 62, 91, 18, 34, 35, 87, 14, 44, 38, 30, 56, 76], [59, 3, 23, 55, 84, 94, 12, 19, 13, 89, 74, 67, 42, 90], [73, 68, 37, 66, 6, 61, 79, 9, 81, 43, 95, 83], [4, 36, 25, 28, 86, 50, 45, 41, 93, 32, 64, 70], [7, 21, 75, 29, 40, 16, 8, 63, 80, 72, 51, 39], [46, 15, 47, 27, 24, 85, 88]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 1000,
                    },
                    field: "capacity",
                    data: [[22, 65, 57, 78, 2, 53, 48], [73, 68, 9, 79, 61], [17, 49, 58, 96, 44, 38, 76, 30, 56, 20], [15, 82, 26, 85], [13, 12, 19, 34, 35, 18], [47, 27, 46, 54, 31], [60, 14, 87, 91, 62], [94, 84, 55, 5], [32, 93, 41, 45, 50, 86], [63, 80, 11, 33, 72, 10, 71], [74, 67, 42, 90, 89, 3, 23, 59], [37, 66, 6, 81, 95, 43, 83], [70, 64, 39, 51, 88], [77, 52, 40, 29], [16, 7, 21, 75, 8], [36, 4, 28, 25, 24], [69, 92]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 1500,
                    },
                    field: "capacity",
                    data: [[33, 11, 72, 80, 63, 29, 16, 40], [49, 5, 69, 92, 20, 54, 48, 31], [23, 3, 59, 84, 55, 94, 58, 96, 44, 38, 76, 56, 30], [91, 62, 35, 34, 18, 87, 14, 60], [2, 53, 46, 15, 47, 26, 82], [86, 28, 25, 45, 41, 50, 36, 4, 39, 51, 88], [52, 22, 65, 57, 78, 27, 24, 85, 17], [75, 21, 7, 8, 10, 71, 77], [68, 73, 9, 79, 61, 6, 66, 37, 81, 43], [93, 95, 83, 32, 64, 70], [67, 74, 42, 90, 89, 19, 12, 13]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2500,
                    },
                    field: "capacity",
                    data: [[18, 87, 14, 60, 58, 49, 96, 17, 69, 5, 92, 20, 48, 26, 82, 46], [45, 41, 50, 86, 28, 25, 36, 4, 64, 70, 24, 15, 27, 47], [35, 34, 12, 19, 13, 74, 42, 67, 90, 89, 62, 91, 55, 84], [85, 31, 54, 51, 39, 88, 11, 33, 78, 2, 53, 65, 22, 57, 77], [66, 6, 61, 79, 73, 68, 9, 37, 81, 43, 95, 32, 83, 93, 63, 80], [16, 29, 40, 7, 21, 75, 8, 10, 71, 52, 72, 44, 38, 76, 56, 30, 23, 3], [59, 94]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2745,
                    },
                    field: "capacity",
                    data: [[78, 57, 65, 22, 2, 53, 46, 15, 27, 47, 26, 82, 54, 48, 31], [7, 21, 75, 16, 29, 40, 8, 10, 71, 52, 11, 33, 77, 51, 39, 88], [44, 49, 5, 69, 96, 58, 60, 14, 87, 18, 35, 34, 12, 19, 13, 89, 90, 74, 67, 42], [72, 80, 63, 50, 45, 41, 86, 28, 25, 36, 4, 64, 70, 24, 85, 20, 17], [93, 32, 83, 81, 9, 79, 61, 6, 66, 37, 73, 68, 43, 95, 56, 76, 30, 38], [91, 62, 94, 55, 84, 23, 3, 59, 92]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 4000,
                    },
                    field: "capacity",
                    data: [[74, 67, 42, 90, 89, 34, 35, 18, 87, 14, 60, 58, 17, 5, 49, 96, 44, 92, 20, 31, 48, 54, 82, 26, 85, 27], [6, 66, 37, 61, 79, 9, 73, 68, 81, 43, 95, 83, 32, 93, 50, 45, 41, 86, 28, 25, 4, 36, 33, 11, 78], [2, 22, 65, 57, 77, 52, 10, 71, 29, 16, 7, 21, 75, 8, 40, 63, 80, 72, 51, 88, 39, 24, 47, 15], [69, 84, 55, 94, 62, 91, 12, 19, 13, 38, 76, 56, 30, 64, 70, 46, 53, 23, 3, 59]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 11000,
                    },
                    field: "capacity",
                    data: [[39, 51, 88, 78, 57, 65, 22, 77, 52, 71, 10, 40, 29, 16, 8, 75, 21, 7, 72, 80, 63, 64, 70, 2, 53, 46, 15, 27, 47, 26, 82, 54, 48, 31, 20, 92, 69, 17, 5, 49, 96, 58, 60, 14, 18, 87, 34, 35, 12, 19, 13, 74, 42, 67, 89, 90, 76, 56, 85, 24, 44, 38, 55, 94, 84, 62, 91, 23, 3, 59], [33, 11, 4, 36, 25, 28, 86, 50, 45, 41, 83, 81, 66, 6, 9, 79, 61, 68, 73, 37, 43, 95, 32, 93, 30]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 15000,
                    },
                    field: "capacity",
                    data: [[59, 3, 23, 92, 20, 48, 31, 26, 82, 15, 27, 46, 53, 2, 22, 65, 57, 78, 11, 33, 88, 51, 39, 85, 24, 47, 54, 69, 5, 17, 49, 55, 84, 94, 62, 91, 60, 14, 87, 18, 34, 35, 13, 19, 12, 89, 90, 74, 42, 67, 58, 96, 44, 38, 76, 56, 30, 64, 70, 4, 36, 86, 50, 45, 41, 25, 28, 37, 66, 6, 61, 79, 9, 73, 68, 81, 43, 95, 83, 32, 93, 63, 80, 72, 77, 52, 71, 10, 40, 29, 16, 7, 21, 75, 8]],
                },
            ]
        },
        sweep: {
            title: 'Sweep Algorithm',
            description: 'Some description',
            dataset: 'data_3_96',
            id: 'SWEEP',
            runs: [
                {
                    fields: {
                        capacity: 1000,
                    },
                    field: "capacity",
                    data: [[3, 5, 6, 4, 2], [9, 8, 10], [13, 12, 14, 15], [19, 18, 17, 20, 22, 21], [26, 25, 24], [31, 30, 28, 32, 29], [38, 35, 34, 37, 36], [48, 47, 46, 40, 45, 41, 43, 42, 44], [54, 52, 53, 51, 50], [59, 57, 56, 58, 60, 62, 61], [65, 64, 67, 66], [69, 71, 72, 70, 73], [76, 78, 77, 75], [82, 80, 81], [84, 87, 85, 86], [89, 90, 91, 92], [95, 94]],
                },
                {
                    fields: {
                        capacity: 1500,
                    },
                    field: "capacity",
                    data: [[3, 5, 2, 8, 7, 4, 6], [10, 16, 11, 15, 13, 12, 14], [23, 18, 19, 20, 22, 21, 25, 24], [31, 27, 33, 29, 32, 28, 30], [48, 47, 46, 40, 43, 37, 41, 45, 36, 39, 44, 38, 42, 35], [59, 54, 53, 52, 57, 51, 50, 56, 58, 55], [65, 63, 64, 62, 67, 66, 61], [69, 74, 73, 75, 71, 72, 70], [82, 78, 77, 80, 81, 79], [86, 88, 85, 84, 87, 90, 89], [93, 95, 92, 94]],
                },
                {
                    fields: {
                        capacity: 2000,
                    },
                    field: "capacity",
                    data: [[3, 5, 9, 6, 4, 7, 8, 10, 2], [18, 13, 19, 12, 14, 17, 20, 15, 22, 21, 16], [31, 26, 27, 24, 33, 29, 32, 28, 25, 30], [35, 42, 38, 44, 49, 48, 47, 46, 51, 39, 36, 50, 45, 41, 37, 43, 40], [59, 55, 62, 60, 58, 56, 64, 54, 53, 65, 57, 63, 61, 66], [76, 69, 74, 73, 68, 70, 72, 75, 71, 77], [84, 87, 79, 81, 83, 86, 80, 82, 85], [92, 93, 95, 90, 89, 91, 94]],
                },
                {
                    fields: {
                        capacity: 2500,
                    },
                    field: "capacity",
                    data: [[3, 5, 2, 10, 8, 7, 11, 4, 6, 9, 13, 12], [23, 26, 27, 24, 25, 28, 21, 16, 29, 22, 15, 20, 17, 18, 19], [35, 42, 34, 38, 44, 49, 31, 48, 47, 46, 33, 40, 32, 43, 37, 41, 45, 50, 36, 39], [59, 54, 53, 57, 65, 52, 63, 64, 56, 58, 60, 55, 62, 67, 66, 61], [76, 69, 74, 79, 73, 81, 70, 78, 72, 80, 75, 71, 77], [86, 83, 93, 88, 85, 92, 87, 90, 89, 91, 84], [95]],
                },
                {
                    fields: {
                        capacity: 2745,
                    },
                    field: "capacity",
                    data: [[3, 5, 14, 12, 13, 9, 6, 4, 11, 7, 8, 10, 2], [23, 31, 26, 27, 24, 20, 17, 18, 19, 30, 25, 28, 32, 21, 16, 29, 22], [48, 54, 47, 39, 51, 46, 53, 52, 40, 36, 50, 45, 41, 43, 37, 42, 35, 34, 38, 44, 49], [59, 57, 65, 71, 72, 63, 68, 73, 61, 66, 64, 70, 56, 69, 58, 60, 62, 67], [82, 85, 76, 84, 87, 79, 81, 83, 86, 80, 75, 77, 78], [92, 93, 95, 90, 89, 91, 94]],
                },
                {
                    fields: {
                        capacity: 4000,
                    },
                    field: "capacity",
                    data: [[3, 23, 15, 2, 22, 10, 8, 16, 21, 7, 11, 24, 20, 17, 5, 14, 18, 12, 13, 19, 9, 6, 4], [48, 31, 30, 38, 44, 49, 35, 34, 42, 37, 43, 32, 45, 41, 50, 28, 36, 29, 40, 52, 33, 39, 51, 53, 46, 27, 47, 26], [59, 55, 69, 65, 77, 71, 75, 80, 63, 72, 57, 78, 64, 70, 56, 76, 58, 60, 62, 67, 74, 66, 61, 79, 73, 68], [82, 88, 93, 95, 83, 86, 85, 92, 84, 94, 91, 89, 90, 87]],
                },
                {
                    fields: {
                        capacity: 11000,
                    },
                    field: "capacity",
                    data: [[59, 3, 23, 48, 54, 47, 27, 15, 46, 53, 2, 22, 65, 57, 72, 52, 71, 10, 40, 29, 16, 8, 75, 21, 7, 63, 11, 33, 39, 51, 24, 26, 31, 20, 69, 5, 49, 17, 44, 38, 58, 60, 55, 62, 14, 18, 34, 35, 67, 42, 74, 13, 12, 19, 37, 66, 6, 61, 9, 73, 68, 43, 32, 45, 41, 50, 28, 25, 36, 4, 64, 70, 56, 30], [84, 94, 91, 87, 89, 90, 79, 81, 95, 83, 93, 86, 80, 77, 78, 88, 85, 82, 92]],
                },
                {
                    fields: {
                        capacity: 15000,
                    },
                    field: "capacity",
                    data: [[59, 3, 23, 92, 20, 31, 48, 54, 82, 26, 85, 24, 47, 27, 15, 46, 53, 2, 22, 65, 57, 78, 88, 51, 39, 33, 11, 72, 77, 52, 71, 10, 40, 29, 16, 8, 75, 21, 7, 80, 63, 36, 4, 64, 70, 25, 28, 86, 41, 45, 50, 93, 32, 83, 95, 43, 81, 68, 73, 79, 9, 61, 6, 66, 37, 42, 67, 74, 90, 89, 13, 19, 12, 34, 35, 18, 87, 14, 60, 62, 91, 55, 84, 94, 58, 49, 5, 69, 17, 76, 56, 30, 38, 44]],
                },
            ]
        },
        ga: {
            title: 'Genetic Algorithm',
            description: 'Some description',
            dataset: 'data_3_96',
            id: 'GA',
            runs: []
        }
    },
    data_3_240: {
        aco: {
            title: 'Ant Colony Algorithm',
            description: 'Some description',
            dataset: 'data_3_240',
            id: 'ACO',
            runs: [
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[138, 8, 38, 7, 77, 16, 75, 27, 20, 5, 184, 227, 192, 195], [226, 176, 173, 198, 100, 17, 44, 179, 83, 182, 14, 194], [223, 72, 235, 22, 240, 144, 139, 3, 172, 207, 71, 37], [40, 63, 211, 36, 218, 120, 60, 106, 129, 47], [191, 157, 105, 201, 35, 197, 224, 43, 19], [113, 146, 239, 233, 116, 31, 238, 219, 9, 4, 150, 6, 185], [229, 154, 115, 48, 161, 64, 168, 234, 33, 237], [57, 148, 147, 13, 82, 91, 199, 97, 111, 23, 190, 162, 53], [65, 189, 202, 114, 41, 153, 221, 11, 25, 135, 204, 118, 136], [126, 70, 78, 169, 232, 127, 159, 46, 231, 67], [203, 205, 85, 10, 76, 225, 142, 187, 152, 12, 196], [156, 109, 28, 94, 130, 30, 177, 49, 220], [149, 79, 183, 104, 228, 69, 217, 73, 222, 151, 145, 80, 206, 236, 51], [163, 141, 132, 180, 93, 32, 110, 92, 21, 58, 164, 55], [99, 208, 45, 181, 143, 123, 66, 117, 175, 59, 124], [121, 81, 125, 88, 213, 155, 212, 133, 50, 96, 26], [86, 2, 119, 134, 178, 87, 108, 214, 84, 90, 103], [68, 42, 24, 200, 56, 39, 137, 171, 186, 52], [15, 101, 209, 170, 174, 29, 54, 62, 193, 160, 165, 166, 210], [140, 216, 131, 230, 167, 95, 18, 102, 107], [61, 112, 74, 89, 34, 158, 215, 128, 188, 122, 98]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 60,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[186, 171, 137, 200, 56, 39, 68, 42, 24, 172], [9, 219, 6, 134, 185, 65, 150, 4, 223, 173, 226, 176, 238, 31], [167, 230, 131, 216, 140, 124, 59, 175, 117], [78, 169, 232, 70, 126, 190, 82, 13, 199, 97, 111, 148], [221, 114, 41, 153, 113, 146, 239, 233, 86, 2, 178, 189, 202], [160, 235, 72, 22, 144, 240, 139, 3, 109, 28, 94, 130], [35, 197, 19, 43, 52, 30, 156, 220, 49], [64, 161, 168, 115, 48, 25, 33, 237, 234], [105, 157, 224, 191, 201, 177, 54, 51, 236, 62, 145], [187, 152, 12, 142, 196, 217, 203, 205, 85, 183, 79], [32, 110, 92, 21, 164, 55, 34, 61, 74, 112, 60], [104, 228, 76, 10, 69, 225, 29, 174, 170, 209, 194, 14], [218, 40, 63, 211, 166, 210, 47, 57, 106, 120, 147], [155, 212, 133, 50, 88, 213, 96, 81, 121, 125, 180, 132], [198, 17, 100, 15, 83, 182, 101, 44, 179, 116, 119, 87], [149, 73, 222, 151, 80, 206, 193, 136, 214, 108, 84, 90, 162, 91, 135], [138, 8, 38, 7, 77, 16, 75, 20, 27, 5, 184, 227, 195, 192], [154, 229, 118, 204, 11, 103, 53, 37, 207, 71, 67, 107], [95, 18, 143, 123, 181, 99, 45, 208, 66, 102, 122, 128, 215], [158, 58, 188, 26, 141, 163, 93, 127, 23, 129], [46, 159, 231, 89, 165, 36, 98]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 100,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[71, 207, 172, 3, 139, 240, 144, 22, 65, 150, 4, 9, 219, 119, 2, 86], [165, 166, 210, 34, 55, 164, 112, 74, 61, 110, 92, 21], [186, 171, 137, 200, 56, 39, 68, 24, 42, 201, 35], [195, 45, 208, 192, 99, 143, 123, 66, 117, 175, 124], [167, 230, 131, 216, 18, 140, 59, 95, 157], [114, 41, 103, 202, 189, 178, 84, 108, 214, 136, 87, 6], [98, 58, 180, 132, 93, 163, 141, 26, 128, 215, 188, 122, 133, 50], [17, 100, 15, 101, 194, 14, 209, 174, 29, 183, 79, 104], [30, 130, 49, 177, 220, 197, 19, 43], [203, 205, 85, 69, 225, 142, 187, 12, 152, 196, 217], [129, 47, 57, 60, 106, 120, 218, 36, 63, 211, 161], [64, 168, 48, 115, 154, 229, 25, 33, 237], [78, 169, 232, 127, 46, 23, 199, 13, 82, 118], [221, 153, 146, 113, 233, 239, 226, 176, 238, 31, 173, 223, 160, 72], [116, 179, 44, 198, 83, 182, 193, 80, 206, 236, 51, 54, 62], [155, 96, 213, 81, 121, 125, 88, 212, 158, 89], [148, 147, 204, 135, 11, 234, 97, 111, 107, 67, 231, 32, 159, 190, 53], [138, 8, 38, 7, 16, 77, 75, 27, 20, 5, 184, 227, 181, 102], [228, 76, 10, 149, 73, 222, 151, 145, 235, 185, 134], [52, 156, 109, 28, 94, 105, 224, 191, 90, 162, 91], [126, 70, 37, 40, 170]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 200,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "ants",
                    data: [[45, 208, 192, 195, 99, 117, 66, 123, 143, 181, 102], [104, 79, 183, 29, 174, 170, 209, 14, 194, 101, 182, 83, 17], [137, 171, 200, 56, 39, 68, 42, 24, 105], [217, 196, 187, 142, 152, 12, 225, 69, 203, 205, 85], [10, 76, 228, 149, 73, 222, 151, 62, 145, 80, 206, 236, 51, 54], [234, 33, 237, 82, 13, 111, 97, 129, 57, 47, 60], [153, 114, 41, 103, 202, 189, 178, 2, 86, 119, 113, 146, 233], [193, 15, 100, 198, 44, 179, 31, 238, 116, 173, 226, 176, 160], [36, 211, 63, 40, 64, 48, 115, 168, 161, 147], [148, 120, 218, 106, 67, 107, 89, 164, 55, 34, 61, 74], [191, 224, 157, 35, 197, 19, 43, 52, 28], [23, 231, 159, 46, 127, 190, 199, 141, 163, 93, 132, 180], [6, 185, 134, 136, 214, 108, 87, 84, 90, 162, 53], [207, 71, 172, 3, 139, 240, 144, 22, 72, 235, 9, 219, 150, 4, 65], [37, 70, 126, 169, 78, 232, 91, 135, 204, 118], [124, 59, 140, 216, 18, 131, 230, 167, 95], [156, 109, 94, 130, 30, 49, 177, 220, 201, 11, 25, 154], [50, 133, 212, 155, 96, 125, 213, 88, 81, 121, 98], [215, 128, 26, 188, 122, 21, 92, 112, 158, 58, 110, 32, 165, 166, 210, 229], [221, 239, 223, 8, 38, 138, 16, 77, 75, 7, 27, 20, 5, 184, 227, 175, 186]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 200,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[155, 96, 213, 125, 81, 121, 88, 50, 133, 212], [72, 235, 22, 144, 240, 219, 9, 4, 150, 6, 185, 134, 136, 87], [221, 153, 114, 41, 103, 91, 13, 82, 199, 190, 126, 53, 162], [223, 160, 14, 194, 15, 100, 17, 198, 44, 179, 31, 238, 176, 226], [27, 20, 184, 5, 8, 38, 7, 16, 77, 75, 138, 227, 195, 45], [168, 115, 48, 154, 229, 25, 33, 237, 234], [113, 233, 239, 146, 119, 2, 178, 86, 202, 189, 108, 214, 84], [231, 129, 57, 47, 106, 60, 120, 218, 204, 135, 118], [158, 58, 180, 132, 93, 163, 141, 26, 122, 128, 215, 188, 110, 32], [68, 42, 24, 39, 56, 200, 137, 171, 186, 191, 224], [78, 169, 232, 70, 37, 90, 207, 71, 172, 3], [205, 203, 85, 10, 76, 228, 104, 79, 183, 29, 174, 170, 209], [21, 92, 46, 148, 147, 63, 211, 36, 165, 166, 210, 40], [206, 236, 51, 54, 80, 145, 62, 151, 222, 73, 149, 101, 182, 83], [30, 130, 28, 109, 156, 94, 139, 65, 173, 116], [18, 216, 140, 59, 124, 95, 167, 230, 131], [67, 107, 89, 74, 61, 34, 164, 55, 112, 23, 97, 111, 159], [220, 49, 177, 157, 105, 201, 35, 197, 19], [123, 143, 181, 99, 208, 192, 66, 117, 102, 175, 52], [193, 225, 69, 217, 196, 152, 12, 187, 142, 11, 64, 161], [98, 127, 43]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 400,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[82, 13, 118, 204, 135, 11, 237, 33, 234, 103, 202], [220, 49, 177, 130, 30, 94, 28, 109, 156, 4, 9, 219], [221, 114, 41, 153, 178, 2, 86, 119, 134, 185, 6, 150, 65], [146, 113, 233, 239, 116, 31, 238, 226, 176, 173, 179, 44], [45, 208, 192, 195, 99, 181, 143, 123, 117, 66, 102], [108, 214, 136, 87, 189, 91, 126, 70, 37, 53, 162], [217, 69, 205, 203, 85, 10, 76, 104, 79, 183, 29, 174, 170], [228, 225, 142, 187, 12, 152, 196, 73, 222, 209], [54, 51, 236, 206, 62, 145, 151, 80, 72, 235, 22, 144, 240, 139], [210, 166, 165, 36, 63, 211, 40, 64, 161, 168, 115], [15, 101, 194, 14, 182, 83, 198, 100, 17, 223, 160, 193, 149, 25], [154, 229, 48, 147, 120, 218, 106, 60, 57, 47], [55, 164, 92, 110, 21, 112, 74, 61, 34, 58, 158, 32], [68, 42, 24, 175, 59, 140, 124, 95, 191, 105], [169, 78, 232, 127, 46, 159, 231, 111, 97, 148, 129], [155, 212, 133, 50, 88, 81, 121, 125, 213, 96, 128, 215, 188], [230, 167, 131, 216, 18, 201, 35, 197], [75, 16, 77, 138, 8, 38, 7, 20, 27, 5, 184, 227, 171, 137, 200], [52, 43, 19, 157, 224, 56, 39, 186, 90], [180, 132, 93, 163, 141, 26, 122, 98, 67, 107, 89, 199, 190], [172, 3, 207, 71, 84, 23]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 1000,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[12, 152, 187, 196, 142, 225, 85, 205, 203, 69, 217], [32, 180, 132, 163, 141, 26, 128, 215, 188, 158, 58, 164, 55], [14, 194, 101, 209, 170, 174, 29, 183, 79, 104, 228, 10, 76], [223, 17, 100, 15, 198, 179, 44, 83, 182, 113, 233, 239, 2, 86], [81, 121, 213, 96, 155, 88, 50, 133, 212, 125, 110, 92], [210, 166, 165, 36, 211, 63, 40, 64, 48, 115], [219, 9, 4, 150, 6, 185, 134, 119, 178, 189, 202, 221, 114], [151, 145, 62, 206, 236, 51, 54, 80, 222, 73, 149, 193, 226, 176], [124, 59, 140, 216, 230, 131, 167, 95, 201, 35], [47, 57, 60, 106, 129, 111, 97, 23, 231, 107, 67], [84, 108, 214, 136, 87, 103, 91, 82, 13, 147], [130, 94, 28, 109, 156, 30, 220, 49, 177], [138, 27, 20, 5, 184, 8, 38, 7, 75, 77, 16, 227, 195, 192], [52, 43, 19, 197, 105, 157, 224, 191, 171], [98, 122, 93, 21, 112, 74, 61, 34, 89, 218, 120], [161, 168, 229, 154, 33, 237, 234, 25, 11, 204, 135, 118], [199, 190, 159, 46, 127, 70, 126, 53, 162, 90, 37, 71], [175, 117, 66, 102, 143, 123, 181, 208, 45, 99, 18], [148, 41, 153, 146, 116, 238, 31, 173, 160, 72, 235, 22], [232, 169, 78, 207, 3, 172, 139, 240, 144, 65], [42, 68, 39, 56, 200, 137, 186, 24]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "maxnfc",
                    data: [[230, 131, 167, 216, 140, 59, 124, 95, 157], [231, 23, 97, 111, 129, 47, 57, 106, 60, 148, 13], [33, 25, 48, 115, 168, 161, 64, 40, 63, 211], [108, 214, 136, 87, 189, 202, 153, 114, 103, 41, 221, 11], [90, 84, 207, 71, 126, 70, 37, 53, 162, 190, 199], [10, 85, 205, 203, 69, 225, 76, 79, 183, 104, 228, 149, 170, 174], [34, 55, 164, 112, 74, 61, 107, 67, 89, 36], [145, 206, 80, 62, 236, 51, 54, 30, 28, 94, 109, 156], [123, 143, 181, 99, 45, 208, 192, 195, 66, 117, 175], [42, 24, 68, 39, 56, 200, 171, 137, 191, 224], [201, 35, 197, 105, 19, 43, 52, 3, 172, 65], [118, 82, 91, 135, 204, 237, 234, 218, 120, 147], [229, 154, 21, 92, 110, 32, 180, 132, 93, 163, 141, 26, 128], [150, 4, 9, 219, 6, 185, 134, 178, 2, 86, 119, 233, 239, 113, 146], [169, 78, 232, 127, 159, 46, 158, 58, 188, 215, 122, 81, 121, 213], [50, 133, 212, 155, 96, 125, 88, 98, 166, 210, 165], [151, 222, 73, 217, 196, 152, 12, 187, 142, 29], [238, 31, 179, 44, 17, 100, 15, 198, 83, 182, 14, 194, 101], [177, 49, 220, 130, 139, 144, 240, 116, 226, 176, 173, 223], [184, 5, 7, 77, 16, 75, 138, 8, 38, 27, 20, 227, 102, 18, 186, 22], [72, 235, 160, 193, 209]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.02,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[135, 204, 118, 147, 120, 218, 36, 63, 40, 64, 161, 168], [209, 170, 174, 29, 104, 79, 183, 228, 76, 10, 85, 205, 203], [53, 162, 91, 199, 82, 13, 111, 97, 60, 106, 47, 57], [58, 158, 21, 92, 110, 32, 132, 93, 163, 141, 26, 128, 215, 188, 122], [185, 6, 150, 65, 4, 9, 219, 22, 72, 235, 160, 176, 226, 83, 179, 44, 198], [195, 192, 45, 208, 99, 181, 143, 123, 117, 66, 175], [42, 24, 68, 39, 56, 200, 137, 171, 186, 191, 224], [207, 71, 139, 172, 3, 156, 109, 28, 94, 30], [145, 62, 80, 206, 236, 51, 54, 177, 49, 220, 130, 48], [129, 231, 74, 112, 89, 107, 67, 159, 46, 23], [214, 108, 136, 87, 2, 86, 178, 146, 113, 233, 239, 116, 31], [134, 119, 189, 202, 221, 114, 153, 41, 103, 11, 25, 234], [225, 142, 196, 187, 12, 152, 217, 69, 73, 222, 151, 149], [167, 230, 131, 216, 140, 59, 124, 95, 35, 201], [33, 237, 229, 154, 115, 166, 210, 165, 211, 164, 34], [155, 212, 133, 50, 213, 125, 121, 81, 88, 96, 98], [101, 14, 194, 182, 15, 100, 17, 173, 223, 240, 144, 238], [70, 126, 190, 84, 90, 148, 180, 61, 55], [27, 20, 5, 184, 8, 38, 7, 77, 16, 75, 138, 227, 102, 18], [105, 157, 197, 19, 43, 52, 169, 78], [232, 127, 37, 193]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[70, 126, 53, 162, 190, 48, 115, 33, 25, 237, 234], [100, 17, 44, 179, 198, 226, 176, 173, 238, 31, 116], [3, 172, 139, 240, 144, 22, 72, 235, 160, 223, 9, 219, 4, 150, 65, 6], [63, 211, 36, 165, 40, 64, 161, 168, 229, 154, 103, 114], [232, 78, 169, 37, 71, 207, 90, 214, 108, 136, 87], [75, 16, 77, 7, 8, 38, 138, 27, 20, 5, 184, 227, 195, 192], [134, 185, 178, 2, 119, 86, 146, 113, 233, 239, 202], [210, 166, 34, 61, 55, 164, 21, 92, 110, 32, 180, 132, 93], [118, 147, 120, 218, 57, 47, 129, 106, 60, 111, 97, 23], [212, 50, 133, 155, 213, 81, 121, 125, 96, 88, 98], [141, 163, 26, 128, 215, 188, 122, 158, 58, 112, 74, 107], [105, 157, 224, 197, 35, 201, 19, 52], [83, 182, 14, 194, 209, 170, 174, 29, 79, 183, 104, 228, 85], [45, 208, 99, 181, 143, 123, 102, 66, 117, 175, 59], [11, 221, 153, 41, 189, 84, 91, 135, 204, 82, 13, 199], [18, 216, 230, 131, 167, 95, 124, 140, 42], [196, 152, 12, 187, 142, 225, 203, 205, 76, 10, 149], [130, 94, 28, 109, 156, 220, 49, 177, 30, 43], [193, 145, 62, 206, 236, 51, 54, 80, 151, 222, 73, 69, 217, 101], [39, 68, 24, 56, 200, 171, 137, 191, 186, 15, 67, 89], [46, 159, 231, 148, 127]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.5,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[132, 93, 163, 141, 26, 128, 215, 188, 158, 58, 21, 92, 110, 74], [176, 226, 173, 198, 17, 44, 179, 31, 238, 116, 113], [60, 106, 57, 111, 97, 13, 82, 199, 190, 162, 53, 126, 70], [217, 203, 205, 85, 10, 76, 104, 79, 183, 29, 174, 170, 209], [127, 46, 159, 36, 218, 120, 148, 147, 118, 204, 135], [195, 192, 45, 208, 99, 181, 143, 123, 102, 175], [156, 109, 28, 94, 105, 201, 35, 197, 19], [155, 212, 88, 213, 96, 125, 81, 121, 50, 133, 98, 122, 164], [2, 86, 119, 134, 185, 6, 150, 4, 9, 219, 72, 235, 22, 144], [90, 84, 214, 108, 136, 87, 189, 202, 103, 41, 114], [165, 166, 210, 211, 63, 40, 64, 161, 168, 115, 48, 25], [145, 62, 206, 236, 51, 54, 80, 151, 222, 73, 149, 193, 15, 100, 83, 182, 14], [154, 229, 11, 237, 33, 234, 112, 61, 34, 55], [18, 216, 131, 230, 167, 59, 124, 68], [153, 221, 178, 146, 239, 233, 65, 172, 3, 139, 240, 52], [117, 66, 7, 16, 77, 75, 138, 8, 38, 5, 184, 27, 20, 227, 140, 95], [224, 157, 191, 200, 56, 39, 42, 24, 171, 137, 186], [196, 152, 12, 187, 142, 225, 69, 228, 101, 194, 223], [43, 130, 30, 49, 177, 220, 207, 71, 78, 169], [231, 23, 129, 47, 89, 107, 67, 32, 180, 91], [160, 37, 232]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.8,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "rho",
                    data: [[135, 204, 118, 82, 13, 148, 147, 120, 218, 36, 33, 25], [139, 172, 3, 109, 156, 94, 28, 119, 2, 178, 202], [137, 171, 191, 224, 157, 105, 201, 35, 197], [103, 114, 41, 153, 221, 189, 87, 136, 214, 108, 84], [133, 50, 212, 88, 213, 96, 125, 81, 121, 155, 128, 215, 188], [234, 237, 48, 115, 161, 168, 229, 154, 64, 40], [144, 240, 22, 235, 72, 160, 223, 226, 176, 173, 17, 100, 15, 101, 14], [225, 142, 187, 12, 152, 196, 217, 205, 203, 85, 10], [61, 74, 92, 21, 110, 32, 163, 141, 93, 132, 180, 158, 58], [20, 27, 5, 184, 138, 8, 38, 7, 77, 16, 75, 227, 195, 192], [177, 49, 220, 130, 30, 43, 19, 52], [228, 104, 79, 183, 29, 174, 170, 209, 194, 182, 83, 179, 44], [131, 230, 167, 95, 124, 59, 140, 216, 18], [65, 150, 6, 185, 134, 4, 9, 219, 239, 233, 113, 146, 86, 116], [60, 106, 47, 57, 129, 89, 107, 67, 111, 97, 23], [11, 71, 207, 91, 199, 190, 53, 126, 70, 37, 162, 90], [231, 112, 34, 55, 164, 166, 210, 165, 211, 63], [149, 73, 222, 151, 145, 62, 206, 236, 51, 54, 80, 193, 198], [123, 143, 181, 99, 45, 208, 66, 117, 102, 175, 42], [122, 26, 98, 46, 159, 127, 169, 78, 232, 31, 238], [76, 69, 200, 56, 39, 68, 24, 186]],
                },
                //--##############
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 1,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[196, 14, 25, 190, 90, 31, 223, 226, 173, 198, 35, 197], [121, 110, 34, 21, 92, 48, 237, 23, 211, 162, 13, 119, 178, 41, 215], [53, 126, 240, 177, 233, 153, 51, 114, 210, 98], [218, 165, 234, 130, 18, 57, 235, 33, 111, 232, 118], [116, 65, 221, 216, 28, 156, 43, 30, 52, 139], [108, 214, 224, 136, 239, 87, 189, 112, 155], [166, 202, 72, 219, 185, 204, 61, 36, 125, 229], [201, 56, 171, 137, 63, 2, 176, 17, 67, 199, 220, 103, 70], [81, 213, 96, 157, 105, 15, 182, 194, 209, 222, 205], [93, 180, 107, 106, 60, 161, 115, 179, 11, 97, 120, 148, 74], [175, 59, 145, 10, 69, 203, 186, 64, 150, 82, 200, 132, 32], [102, 55, 50, 144, 9, 174, 228, 152, 225, 129], [159, 231, 40, 86, 238, 212, 133, 101, 83, 100, 37, 188, 141], [24, 88, 46, 128, 163, 122, 26, 71, 207, 89], [151, 193, 170, 146, 168, 19, 167, 44, 62], [109, 80, 236, 206, 58, 158, 84, 113, 134, 91, 164, 49, 68], [85, 76, 79, 135, 127, 227, 138, 3, 140, 187, 142, 29], [183, 217, 123, 16, 75, 42, 39, 191, 12, 73, 6, 160, 154], [117, 192, 208, 45, 38, 8, 7, 77, 27, 5, 20, 184, 66, 95], [172, 78, 169, 47, 147, 94, 131, 230, 124, 143], [99, 181, 195, 104, 149, 54, 22, 4]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 3,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[75, 16, 77, 138, 8, 38, 7, 27, 20, 5, 184, 227, 195, 192], [81, 121, 213, 155, 212, 133, 50, 26, 93, 163, 128, 215], [109, 28, 94, 156, 72, 235, 22, 240, 144, 52, 172, 3], [206, 80, 222, 73, 183, 79, 104, 228, 69, 203, 205, 85, 10, 187], [100, 15, 101, 14, 194, 182, 238, 116, 31, 226, 176, 173], [236, 51, 54, 62, 145, 160, 223, 17, 44, 179, 198, 83, 113], [118, 135, 204, 13, 82, 237, 33, 168, 161, 115, 48], [107, 67, 129, 57, 47, 106, 60, 148, 23, 199, 97, 111], [19, 35, 105, 157, 224, 191, 56, 39], [185, 150, 219, 9, 4, 108, 214, 136, 87, 11, 41, 114, 189, 202, 86], [152, 12, 142, 196, 217, 149, 29, 174, 170, 209, 193], [181, 123, 143, 102, 66, 117, 99, 45, 208, 24, 42], [175, 59, 140, 124, 68, 200, 137, 171, 43], [95, 167, 230, 131, 216, 18, 207, 71, 90], [2, 178, 119, 146, 153, 221, 84, 139, 134, 6, 25, 218, 120], [158, 58, 164, 55, 34, 61, 112, 74, 89, 40], [186, 201, 49, 177, 220, 130, 30, 239, 233, 103, 21, 92], [147, 141, 132, 180, 159, 46, 32, 110, 188, 98, 122, 125], [234, 64, 211, 36, 165, 166, 210, 63, 231, 91, 190, 162], [53, 126, 70, 37, 232, 169, 78, 127, 229, 154], [96, 88, 65, 197, 76, 225, 151]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[195, 45, 208, 192, 99, 181, 143, 123, 66, 117, 175], [183, 79, 104, 228, 76, 10, 85, 205, 203, 69, 196, 152, 12], [230, 131, 216, 18, 140, 59, 124, 83, 179, 44], [186, 171, 137, 200, 56, 39, 191, 224, 157, 105], [135, 204, 118, 82, 13, 199, 97, 111, 57, 47, 106, 60, 120, 218], [30, 130, 94, 28, 109, 156, 52, 43, 19], [159, 46, 127, 126, 53, 162, 190, 23, 231, 129, 67, 107], [114, 41, 11, 33, 237, 234, 25, 161, 168, 115, 48], [225, 142, 187, 217, 73, 149, 174, 170, 29, 209, 194], [148, 147, 89, 36, 165, 166, 211, 63, 40, 64], [188, 26, 128, 215, 163, 141, 93, 132, 180, 32, 110, 92, 21], [119, 2, 86, 146, 113, 233, 239, 116, 226, 176, 238, 31, 173], [17, 100, 15, 101, 14, 182, 198, 72, 235, 160, 223, 6, 185], [87, 136, 214, 108, 84, 90, 91, 134, 189], [81, 121, 88, 155, 213, 96, 125, 50, 133, 212, 98], [210, 34, 164, 55, 112, 74, 58, 158, 122, 61, 144, 240, 139], [16, 77, 7, 8, 38, 138, 27, 20, 5, 184, 75, 227, 102, 177], [62, 145, 206, 236, 51, 54, 80, 222, 151, 193, 22, 219, 9, 65, 150, 4, 178, 202], [232, 169, 78, 70, 37, 172, 3, 207, 71, 103], [220, 35, 197, 49, 201, 167, 95, 68, 42, 24, 229], [221, 153, 154]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 10,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "beta",
                    data: [[76, 10, 85, 205, 203, 69, 217, 196, 152, 12, 187, 142], [141, 163, 93, 132, 180, 32, 110, 92, 112, 74, 61], [73, 222, 151, 145, 62, 206, 236, 51, 54, 80, 193, 14, 194, 101], [116, 238, 31, 226, 176, 173, 17, 100, 15, 44, 179, 198], [208, 45, 192, 195, 99, 181, 143, 123, 117, 66, 102], [39, 56, 200, 171, 137, 191, 224, 157, 105, 201], [168, 161, 48, 115, 154, 229, 25, 33, 237, 234], [109, 28, 94, 130, 30, 220, 49, 177, 197], [70, 126, 53, 162, 199, 13, 82, 118, 147, 148, 57], [103, 41, 114, 153, 202, 189, 87, 136, 214, 108, 84], [169, 78, 232, 231, 67, 107, 89, 106, 60, 120, 218], [122, 215, 128, 26, 188, 21, 158, 58, 164, 55, 34, 166, 210, 211], [144, 240, 22, 235, 72, 160, 223, 9, 219, 150, 4, 65, 6, 185, 134, 178], [133, 50, 212, 155, 96, 213, 125, 81, 121, 88, 98, 165], [167, 230, 131, 216, 18, 140, 59, 124, 95], [135, 204, 11, 221, 2, 86, 146, 113, 233, 239, 119, 90, 37, 190, 23, 97, 111], [209, 170, 174, 29, 183, 79, 104, 228, 149, 225, 182, 83, 3], [138, 8, 38, 7, 16, 77, 75, 27, 20, 5, 184, 227, 175, 24, 42], [172, 139, 156, 52, 43, 19, 35, 68, 186, 71], [64, 40, 63, 36, 47, 129, 46, 159, 127], [207, 91]],
                },
                //--
                {
                    fields: {
                        alpha: 0.5,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[191, 224, 157, 105, 201, 35, 197, 19, 43], [127, 159, 46, 231, 67, 89, 107, 21, 92, 112, 74], [200, 56, 39, 137, 171, 186, 68, 42, 24, 235, 72, 22], [212, 133, 50, 96, 213, 121, 81, 125, 155, 88, 158, 58, 164], [97, 111, 47, 57, 60, 106, 129, 120, 218, 147, 148], [206, 236, 51, 54, 62, 145, 80, 151, 222, 73, 205, 85, 203, 69], [98, 122, 26, 215, 128, 188, 141, 163, 93, 132, 180, 32, 110], [240, 144, 139, 3, 172, 130, 49, 177, 220, 94], [156, 28, 109, 30, 119, 2, 86, 113, 233, 239, 146, 178], [161, 168, 115, 48, 25, 33, 234, 237, 11, 221, 153, 41], [104, 79, 183, 29, 174, 170, 209, 14, 194, 101, 15, 100, 17], [238, 31, 44, 179, 198, 173, 226, 176, 116, 4, 65, 150, 6], [7, 77, 16, 75, 138, 8, 38, 20, 27, 5, 184, 227, 195, 208], [199, 82, 13, 91, 214, 108, 136, 87, 189, 202, 114], [149, 10, 76, 225, 142, 187, 152, 12, 196, 217, 228], [232, 169, 78, 70, 126, 53, 162, 190, 23, 118, 204, 135], [102, 143, 123, 181, 99, 45, 192, 117, 66, 175, 59], [210, 166, 211, 36, 165, 63, 40, 64, 154, 229, 90], [34, 55, 61, 37, 207, 71, 185, 134, 219, 9, 160], [167, 230, 131, 216, 18, 95, 140, 124, 223, 83, 182, 193], [84, 103, 52]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[163, 141, 93, 132, 180, 26, 128, 215, 188, 158, 58, 164, 61, 107, 67], [116, 238, 176, 226, 173, 44, 179, 31, 113, 146, 86, 2, 178], [73, 222, 80, 206, 236, 51, 54, 100, 15, 101, 14, 194, 209, 170, 29], [3, 172, 139, 240, 144, 22, 9, 219, 150, 4, 65, 6, 185, 134, 108], [155, 212, 133, 50, 88, 213, 81, 121, 125, 96, 98], [103, 114, 41, 221, 202, 189, 87, 136, 214, 84], [130, 220, 49, 177, 30, 94, 28, 109, 156, 52], [199, 13, 82, 118, 204, 135, 11, 237, 33, 25, 234, 63, 211], [235, 72, 160, 223, 198, 17, 83, 182, 193, 62, 145, 151], [77, 16, 75, 20, 27, 5, 184, 7, 8, 38, 138, 227, 195, 192], [85, 205, 203, 69, 196, 152, 12, 187, 142, 225, 76], [166, 165, 36, 218, 120, 60, 106, 47, 57, 111, 97, 148], [169, 78, 232, 70, 53, 126, 37, 162, 190, 23, 231, 129], [18, 102, 66, 117, 99, 208, 45, 181, 143, 123, 175], [137, 171, 56, 200, 39, 68, 42, 24, 105], [112, 74, 92, 110, 21, 55, 34, 210, 89, 147], [230, 131, 216, 140, 59, 124, 157, 224], [174, 10, 228, 104, 79, 183, 149, 217, 168, 161, 48, 115], [95, 167, 43, 19, 197, 35, 201, 191, 186, 153, 119, 233, 239], [122, 32, 46, 159, 127, 91, 90, 207, 71, 64], [40, 154, 229]],
                },
                {
                    fields: {
                        alpha: 2,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[186, 171, 137, 56, 200, 39, 68, 42, 24, 201, 35], [203, 205, 85, 228, 104, 79, 183, 29, 174, 170, 209, 194, 14], [220, 109, 94, 28, 156, 130, 30, 49, 177, 54], [95, 140, 59, 124, 167, 230, 131, 216, 18], [72, 235, 160, 223, 173, 176, 226, 238, 31, 179, 44, 198, 100], [136, 108, 214, 84, 90, 91, 199, 13, 82, 120, 218, 165, 36], [70, 126, 53, 162, 190, 106, 60, 47, 57, 148], [154, 229, 115, 48, 161, 168, 64, 40, 63, 211], [172, 3, 139, 240, 144, 22, 17, 15, 101, 182, 83, 113, 233], [193, 222, 73, 149, 10, 76, 225, 142, 12, 152, 187, 196], [78, 169, 232, 158, 58, 164, 112, 74, 61, 34, 55], [151, 145, 62, 206, 236, 51, 80, 69, 217, 119, 2, 86, 178, 146], [110, 92, 21, 32, 180, 132, 93, 163, 141, 26, 128, 215, 188, 122], [71, 207, 65, 150, 4, 9, 219, 185, 134, 6, 87, 189], [213, 81, 121, 125, 96, 155, 212, 133, 50, 88, 98], [195, 192, 208, 45, 99, 181, 143, 123, 66, 117, 102], [221, 114, 41, 202, 153, 239, 116, 135, 204, 118, 147, 33], [191, 224, 157, 105, 197, 19, 43, 52, 103], [75, 16, 77, 7, 27, 20, 5, 138, 38, 8, 184, 227, 175, 237, 11], [210, 166, 89, 107, 67, 129, 111, 97, 23, 46, 159, 127], [37, 231, 234, 25]],
                },
                {
                    fields: {
                        alpha: 3,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2000,
                    },
                    field: "alpha",
                    data: [[30, 130, 220, 49, 177, 105, 157, 224, 191], [142, 187, 12, 152, 196, 203, 205, 85, 10, 69, 225], [175, 102, 66, 117, 123, 143, 181, 99, 45, 208, 192], [3, 172, 139, 144, 240, 219, 9, 4, 150, 6, 185, 134, 136], [42, 24, 68, 39, 56, 200, 171, 137, 186, 35, 201], [97, 111, 57, 47, 129, 60, 106, 89, 107, 67, 231], [82, 13, 199, 190, 91, 204, 135, 118, 147, 148, 120, 218], [160, 223, 114, 41, 221, 189, 202, 153, 119, 86, 2, 178, 113, 233, 239], [156, 109, 28, 94, 52, 43, 19, 197, 84], [44, 179, 198, 100, 15, 101, 194, 14, 182, 83, 31, 238, 116, 226], [87, 214, 108, 90, 37, 53, 126, 70, 78, 169], [132, 180, 93, 163, 141, 26, 128, 215, 188, 122, 98, 58, 158, 21, 92], [77, 16, 7, 38, 8, 138, 20, 27, 5, 184, 227, 75, 195, 18], [236, 206, 80, 145, 62, 151, 222, 73, 149, 209, 29, 174, 170], [33, 234, 237, 25, 115, 48, 168, 161, 64, 40], [23, 46, 159, 127, 32, 74, 112, 55, 34, 164], [88, 50, 133, 212, 213, 81, 121, 125, 155, 96, 110], [95, 124, 59, 140, 216, 230, 131, 167, 173], [162, 232, 71, 207, 65, 22, 235, 72, 17, 176, 146, 103, 11], [228, 104, 79, 183, 76, 217, 54, 51, 193, 229, 154, 166], [211, 63, 36, 165, 210, 61]],
                },
                //--
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 1000,
                    },
                    field: "capacity",
                    data: [[69, 203, 205, 85, 10, 76, 228], [78, 169, 232, 70, 37], [186, 137, 171, 191, 224, 157], [60, 106, 47, 57], [123, 143, 181, 99, 208, 45], [198, 44, 179, 83, 182, 14, 194], [127, 46, 159, 53, 162, 199, 13], [108, 214, 136, 87, 189], [55, 164, 92, 21, 110, 32, 180, 132], [29, 174, 170, 209, 149, 73, 222], [71, 207, 91, 204, 135], [236, 206, 80, 62, 145, 151, 235], [27, 20, 5, 184, 7, 8, 38, 77, 16], [225, 196, 152, 12, 187], [158, 58, 93, 163, 141], [111, 97, 148, 147, 120, 218, 36], [233, 239, 113, 146, 86, 2, 178], [221, 114, 41, 103, 202, 153], [217, 142, 104, 79, 183, 193], [176, 226, 223, 173, 31, 238, 116], [177, 49, 220, 130, 94], [155, 212, 88, 81, 121], [42, 24, 68, 39], [102, 66, 117, 175, 59], [33, 25, 11, 63, 40, 211], [82, 118, 237, 234, 161], [22, 144, 240, 9, 219, 4, 6, 134], [75, 138, 227, 195, 192], [124, 95, 167, 230, 131], [15, 100, 17, 72, 160, 65, 150], [128, 215, 188, 26, 122, 50, 133, 96], [90, 84, 185, 119], [34, 61, 165, 89, 67, 107], [125, 213, 98, 112], [154, 229, 48, 115, 168], [197, 35, 201, 105], [56, 200, 19, 43], [156, 28, 109, 139], [23, 231, 129, 74, 210], [54, 51, 101, 126, 190], [3, 172, 52, 30], [18, 216, 140, 64], [166]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 1500,
                    },
                    field: "capacity",
                    data: [[214, 108, 136, 87, 189, 202, 41, 114, 153], [14, 194, 101, 15, 100, 17, 198, 179, 44], [13, 82, 199, 126, 70, 53, 162, 37, 150], [19, 35, 197, 105, 157], [113, 233, 239, 116, 238, 31, 173, 226, 176, 219, 9, 4, 65, 22], [92, 112, 74, 110, 21, 158, 58, 164, 55], [64, 161, 48, 115, 168, 229, 154], [24, 42, 68, 56, 200, 39], [63, 40, 36, 218, 120, 60, 106, 47], [76, 10, 85, 205, 203, 69, 187, 12, 152], [217, 196, 142, 225, 174, 170, 209, 83], [206, 236, 51, 54, 145, 62, 80, 149, 73, 222, 151], [186, 171, 137, 191, 224, 201, 220, 49, 156, 109], [6, 134, 185, 2, 86, 178, 119, 146, 221, 11], [89, 107, 67, 61, 34, 148, 57, 111, 97], [223, 160, 72, 235, 144, 240, 139, 3, 172], [232, 78, 169, 127, 46, 159, 231], [94, 28, 130, 30, 43, 52, 71], [45, 208, 192, 195, 99, 181, 143, 123], [29, 183, 79, 104, 228, 193, 182, 147], [16, 77, 75, 7, 8, 38, 138, 27, 20, 5, 184, 227], [102, 117, 66, 175, 59, 124, 95, 167], [98, 133, 50, 212, 155, 96, 213, 81], [26, 128, 215, 188, 163, 141, 132, 93, 180], [33, 237, 234, 25, 103, 204, 135, 118], [91, 190, 23, 129, 166, 210, 211, 165, 32], [125, 88, 121, 122, 90, 84, 207], [230, 131, 216, 18, 140, 177]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2500,
                    },
                    field: "capacity",
                    data: [[61, 34, 55, 164, 58, 158, 21, 92, 112, 74, 107, 67, 89, 47], [131, 230, 167, 95, 140, 59, 124, 39, 56, 200, 137, 171], [208, 45, 192, 195, 20, 27, 8, 38, 7, 77, 16, 75, 138, 5, 184, 227, 99], [156, 109, 28, 94, 130, 30, 49, 220, 177, 197, 35, 201], [23, 231, 97, 111, 57, 129, 60, 106, 120, 218, 36, 211, 63, 40, 161, 168], [170, 174, 29, 104, 228, 79, 183, 83, 15, 100, 17, 198, 44, 179, 31, 238, 226], [222, 73, 85, 205, 203, 69, 10, 76, 225, 142, 152, 12, 187, 196, 217], [207, 71, 84, 108, 214, 136, 87, 189, 202, 41, 114, 153, 221], [70, 126, 53, 162, 82, 13, 199, 147, 148, 118, 204, 135, 11, 237, 33], [43, 19, 172, 3, 139, 240, 144, 22, 9, 219, 134, 6, 86, 2, 178, 119, 113, 239], [146, 233, 116, 176, 173, 223, 160, 72, 235, 4, 150, 65, 185, 103, 91], [188, 128, 215, 122, 26, 141, 163, 93, 132, 180, 32, 110, 165, 166, 210, 64], [121, 81, 213, 125, 96, 155, 212, 133, 50, 88, 98, 234, 25, 48], [232, 169, 78, 37, 190, 46, 159, 127, 90, 52, 105, 157], [68, 42, 24, 117, 66, 175, 123, 143, 181, 102, 18, 216, 191], [101, 14, 194, 209, 182, 193, 149, 145, 62, 151, 80, 206, 236, 51, 54, 224, 186], [154, 229, 115]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 2745,
                    },
                    field: "capacity",
                    data: [[14, 194, 209, 170, 174, 29, 183, 79, 104, 228, 85, 205, 203, 69, 196, 152, 187, 12], [115, 161, 168, 229, 154, 48, 25, 33, 237, 118, 204, 135, 11, 103, 114, 41, 153], [136, 214, 108, 87, 178, 2, 86, 119, 146, 113, 233, 239, 116, 238, 31, 226, 176, 173, 223, 160], [225, 217, 142, 10, 76, 149, 73, 222, 145, 62, 206, 236, 54, 51, 80, 151, 193, 15, 100], [185, 134, 6, 150, 4, 9, 219, 65, 22, 144, 240, 139, 3, 172, 156, 28, 94, 109], [188, 215, 128, 26, 141, 163, 93, 132, 180, 32, 110, 92, 112, 74, 61, 34], [138, 38, 8, 7, 16, 77, 75, 20, 27, 5, 184, 227, 192, 208, 45, 195, 99, 181, 143], [55, 164, 158, 21, 58, 98, 122, 212, 133, 50, 88, 121, 81, 125, 96, 213, 155, 120, 218], [17, 198, 44, 179, 83, 182, 101, 72, 235, 147, 148, 129, 47], [35, 197, 19, 201, 105, 157, 224, 191, 200, 56, 39, 42], [68, 24, 171, 137, 186, 220, 49, 177, 130, 30, 43, 52, 199, 13, 82], [167, 230, 131, 216, 95, 124, 59, 140, 175, 117, 66, 123, 102, 18], [23, 97, 111, 106, 60, 57, 89, 107, 67, 231, 159, 46, 127, 169, 78, 70], [162, 126, 53, 37, 91, 84, 90, 189, 202, 221, 36, 165, 166, 210], [207, 71, 190, 211, 63, 40, 64, 234, 232]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 4000,
                    },
                    field: "capacity",
                    data: [[27, 20, 5, 184, 77, 16, 75, 7, 8, 38, 138, 227, 208, 45, 192, 195, 99, 181, 143, 123, 66, 117, 175, 59, 140, 95], [57, 47, 106, 60, 67, 107, 89, 129, 148, 147, 118, 204, 135, 114, 41, 153, 103, 90, 189, 178, 2], [42, 24, 68, 39, 56, 200, 191, 224, 157, 105, 201, 35, 197, 19, 43, 52, 172, 3, 139], [152, 12, 187, 196, 217, 69, 203, 205, 85, 10, 76, 104, 79, 183, 29, 174, 170, 194, 14, 101, 15, 198, 100, 17, 83], [50, 133, 212, 155, 213, 121, 81, 125, 96, 88, 122, 215, 128, 188, 26, 141, 163, 93, 132, 180, 32, 110, 92, 74, 112], [82, 13, 199, 190, 162, 53, 126, 70, 37, 207, 71, 136, 214, 108, 87, 202, 221, 11, 25, 33, 237, 120, 218, 40, 63, 211], [64, 161, 168, 229, 154, 115, 48, 234, 36, 165, 166, 210, 34, 55, 164, 21, 158, 58, 98, 61, 231, 23, 97, 111, 46], [30, 130, 94, 28, 156, 109, 144, 240, 160, 72, 235, 22, 9, 4, 150, 65, 6, 185, 134, 119, 86, 146, 113, 233, 239, 116], [236, 206, 145, 62, 80, 51, 54, 149, 228, 142, 225, 73, 222, 151, 193, 238, 31, 176, 226, 173, 44, 179, 209, 182, 223, 219, 84], [230, 131, 216, 18, 102, 124, 167, 220, 49, 177, 171, 137, 186, 159, 127, 78, 169, 232, 91]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 11000,
                    },
                    field: "capacity",
                    data: [[180, 132, 93, 163, 141, 26, 128, 215, 188, 122, 98, 50, 133, 212, 155, 96, 213, 121, 81, 88, 125, 158, 58, 110, 92, 21, 112, 74, 61, 34, 55, 164, 67, 107, 89, 47, 57, 148, 147, 118, 204, 135, 237, 33, 234, 218, 120, 60, 106, 129, 97, 111, 199, 82, 13, 91, 162, 53, 126, 70, 37, 190, 23, 46, 159, 231, 32], [29, 174, 170, 209, 14, 194, 101, 15, 100, 17, 198, 44, 179, 31, 238, 173, 226, 176, 116, 233, 239, 113, 146, 86, 2, 178, 119, 185, 134, 6, 150, 4, 9, 219, 139, 3, 172, 84, 108, 214, 136, 87, 189, 202, 41, 114, 221, 153, 103, 11, 25, 48, 115, 168, 161, 64, 40, 63, 211, 36, 165, 166, 210, 154, 229, 90, 207, 71, 65], [28, 94, 156, 109, 220, 201, 35, 197, 157, 105, 224, 191, 200, 56, 39, 137, 171, 186, 24, 42, 68, 124, 59, 140, 175, 66, 117, 99, 208, 45, 192, 195, 27, 20, 5, 184, 16, 77, 138, 38, 8, 7, 75, 227, 181, 143, 123, 102, 18, 216, 230, 131, 167, 95, 177, 49, 130, 30, 19, 43, 52], [51, 54, 62, 145, 80, 206, 236, 222, 151, 73, 85, 205, 203, 69, 10, 76, 104, 183, 79, 228, 225, 142, 187, 12, 152, 196, 217, 149, 182, 83, 223, 160, 72, 235, 22, 144, 240, 193, 232, 169, 78, 127]],
                },
                {
                    fields: {
                        alpha: 1,
                        rho: 0.1,
                        ants: 40,
                        beta: 5,
                        maxnfc: 2000,
                        capacity: 15000,
                    },
                    field: "capacity",
                    data: [[63, 165, 36, 218, 120, 60, 106, 47, 57, 129, 67, 107, 89, 74, 112, 164, 55, 34, 61, 92, 110, 21, 158, 58, 163, 141, 26, 128, 215, 188, 122, 212, 88, 96, 213, 155, 121, 81, 125, 50, 133, 98, 132, 180, 93, 32, 159, 46, 97, 111, 199, 82, 13, 147, 148, 118, 204, 135, 114, 41, 103, 153, 221, 202, 189, 178, 86, 2, 119, 146, 113, 233, 239, 4, 9, 219, 150, 65, 6, 185, 134, 136, 214, 108, 87, 84, 90, 207, 71, 70, 37, 162, 53, 126, 190, 23, 231], [40, 64, 161, 168, 48, 115, 229, 154, 25, 33, 237, 234, 11, 91, 127, 78, 169, 232, 109, 156, 94, 28, 49, 220, 19, 201, 35, 197, 157, 105, 224, 191, 56, 200, 39, 68, 42, 24, 59, 124, 95, 167, 230, 131, 216, 18, 143, 123, 181, 99, 45, 208, 192, 195, 75, 77, 16, 138, 8, 38, 7, 27, 20, 5, 184, 227, 66, 117, 102, 175, 140, 52, 43, 30, 130, 177, 80, 206, 236, 51, 54, 62, 145], [211, 166, 210, 179, 44, 31, 176, 226, 173, 17, 100, 198, 182, 14, 194, 209, 101, 15, 83, 238, 116, 240, 144, 235, 72, 160, 223, 151, 222, 73, 85, 205, 203, 69, 217, 196, 152, 12, 187, 142, 225, 10, 76, 228, 104, 79, 183, 29, 174, 170, 149, 193, 22, 139, 3, 172, 137, 171, 186]],
                },
            ]
        },
        sweep: {
            title: 'Sweep Algorithm',
            description: 'Some description',
            dataset: 'data_3_240',
            id: 'SWEEP',
            runs: [
                {
                    fields: {
                        capacity: 1000,
                    },
                    field: "capacity",
                    data: [[2, 6, 4, 3, 5], [13, 11, 9, 15, 14, 10, 12, 8], [17, 22, 19, 18, 20, 21], [25, 26, 27, 24], [31, 29, 30], [33, 35, 34], [40, 41, 37, 39, 38], [44, 43, 45], [50, 47, 48, 49], [55, 53, 52, 54], [59, 57, 60, 58], [63, 64, 65, 62], [67, 70, 71, 68, 69], [74, 75, 73], [82, 78, 81, 77, 80, 79], [85, 86, 87, 84], [90, 91, 89], [94, 95, 97, 93, 96], [99, 102, 101, 100], [106, 107, 104, 105], [112, 110, 111, 109, 113], [115, 116, 119, 118, 120, 122, 121, 117], [125, 124], [129, 128, 127], [133, 132, 131, 134], [136, 139, 137, 140, 138], [144, 143, 142], [147, 148, 146, 149], [151, 152, 153], [155, 158, 156, 157], [161, 166, 165, 164, 163, 162, 160], [168, 169, 171, 172, 170], [178, 176, 179, 174, 177, 175], [185, 182, 183, 187, 186, 181, 184], [190, 189, 191, 192, 193], [196, 195], [199, 200, 201, 202, 198], [204, 207, 205, 206], [209, 211, 210, 212], [218, 215, 214, 219, 217, 216], [221, 226, 223, 225, 222, 224], [229, 228, 230], [234, 232, 233, 235], [237, 239, 238]],
                },
                {
                    fields: {
                        capacity: 1500,
                    },
                    field: "capacity",
                    data: [[13, 11, 2, 6, 4, 9, 3, 7, 8, 5, 12, 10, 14], [23, 21, 24, 16, 20, 18, 19, 22, 17], [29, 31, 28, 30, 27, 26], [36, 34, 38, 39, 35, 37, 33], [44, 41, 43, 42, 45], [48, 50, 47, 53, 52, 49, 51], [56, 59, 57, 60, 58, 55], [64, 63, 67, 66, 68, 65, 62], [74, 75, 71, 70, 72, 73], [82, 84, 78, 81, 77, 80, 85, 79, 83], [88, 93, 92, 89, 91, 87, 90], [97, 98, 96, 99, 102, 95, 101, 100], [104, 105, 109, 108, 106, 107, 110], [115, 114, 116, 113, 119, 118, 120, 112, 122, 121, 117], [128, 125, 124, 126, 127], [133, 132, 135, 136, 134, 130, 131], [141, 138, 143, 140, 139, 144, 142], [147, 148, 146, 150, 151, 149], [161, 154, 155, 158, 159, 153, 160, 156, 157], [168, 166, 165, 164, 163, 169, 170, 167, 171], [180, 175, 181, 177, 178, 176, 173, 179, 174], [188, 190, 189, 185, 191, 186, 184, 192, 187, 183], [198, 194, 196, 197, 195], [204, 202, 203, 205, 206, 201, 200], [214, 209, 211, 210, 212, 213, 208], [218, 221, 219, 223, 226, 225, 217, 222, 220, 224, 216], [229, 233, 228, 230, 232, 231], [237, 239, 238, 236, 235]],
                },
                {
                    fields: {
                        capacity: 2000,
                    },
                    field: "capacity",
                    data: [[13, 11, 2, 6, 4, 9, 3, 16, 7, 8, 5, 12, 10, 14, 15], [25, 21, 26, 23, 19, 24, 27, 20, 18, 28, 22], [33, 36, 34, 32, 37, 31, 30, 35, 38], [40, 47, 46, 45, 42, 43, 41, 44], [55, 58, 50, 57, 53, 52, 54, 51, 49, 56], [64, 63, 60, 67, 61, 66, 68, 62, 69, 65], [74, 78, 71, 72, 73, 79, 76, 80, 75, 77], [85, 83, 86, 87, 84, 90, 91, 82, 89, 88], [103, 97, 93, 98, 96, 99, 102, 95, 94, 100, 101], [106, 107, 112, 110, 111, 108, 105, 109, 113, 114], [120, 118, 127, 126, 116, 119, 124, 117, 123, 125, 121, 122], [133, 132, 129, 135, 136, 134, 139, 130, 137, 131, 138], [141, 148, 147, 146, 144, 143, 145, 142], [154, 153, 150, 151, 152, 157, 156, 155, 158], [161, 168, 166, 165, 164, 163, 169, 162, 172, 171, 167, 160, 170], [176, 179, 182, 174, 183, 187, 177, 181, 184, 175, 186, 185, 178, 180], [190, 189, 192, 195, 191, 197, 196, 193, 194], [204, 202, 209, 205, 203, 206, 201, 200, 208, 207, 199], [211, 213, 212, 215, 218, 221, 214, 219, 223, 217, 222, 220, 216], [229, 234, 231, 232, 227, 230, 235, 233, 226, 228, 225], [237, 239, 238]],
                },
                {
                    fields: {
                        capacity: 2500,
                    },
                    field: "capacity",
                    data: [[13, 11, 2, 6, 4, 9, 17, 15, 14, 10, 12, 3, 19, 18, 16, 7, 8, 5], [33, 25, 31, 29, 22, 28, 30, 24, 27, 26, 32, 23, 21], [40, 36, 41, 44, 37, 43, 35, 39, 42, 45, 38], [48, 55, 58, 50, 47, 57, 53, 52, 54, 51, 49, 56], [64, 63, 61, 67, 60, 70, 71, 68, 66, 65, 72, 62, 69], [74, 82, 78, 84, 87, 86, 83, 79, 76, 85, 80, 75, 77, 81], [98, 96, 93, 92, 89, 97, 91, 90, 101, 100, 94, 95, 99], [115, 106, 107, 112, 110, 111, 108, 103, 114, 113, 116, 104, 109, 105], [120, 129, 118, 119, 130, 131, 123, 124, 126, 127, 121, 125, 122, 128], [133, 141, 138, 143, 140, 137, 135, 136, 134, 139, 144, 142], [155, 148, 147, 154, 153, 146, 150, 149, 152, 151], [161, 168, 166, 165, 164, 158, 163, 159, 169, 162, 172, 171, 157, 167, 160, 170], [176, 179, 182, 174, 183, 187, 177, 186, 191, 185, 178, 189, 190, 180, 188, 175, 181, 184], [202, 198, 194, 193, 203, 196, 201, 197, 195, 200, 199], [211, 210, 215, 212, 213, 218, 214, 207, 219, 209, 205, 217, 206, 216, 208], [229, 234, 231, 232, 221, 233, 226, 223, 235, 224, 227, 230, 222, 225, 228], [237, 239, 238]],
                },
                {
                    fields: {
                        capacity: 2745,
                    },
                    field: "capacity",
                    data: [[21, 16, 7, 8, 5, 20, 18, 19, 3, 6, 4, 9, 22, 17, 15, 10, 12, 14, 2, 11, 13], [34, 26, 32, 33, 25, 29, 31, 28, 30, 27, 24], [40, 48, 41, 44, 36, 47, 46, 37, 43, 39, 42, 45, 38], [63, 55, 50, 58, 61, 60, 57, 53, 52, 56, 59, 54, 51, 62], [67, 74, 77, 75, 66, 68, 71, 70, 78, 65, 72, 73, 69, 76], [96, 81, 88, 93, 92, 89, 82, 91, 87, 86, 83, 85, 80, 95, 94, 84, 90], [98, 110, 107, 106, 103, 100, 101, 104, 102, 99, 105, 109, 108], [115, 114, 116, 113, 119, 124, 117, 123, 125, 121, 122, 128, 112, 127, 126, 118, 120], [133, 132, 141, 138, 143, 140, 131, 137, 130, 139, 134, 136, 135, 142], [155, 148, 147, 154, 153, 146, 150, 149, 152, 151, 145, 156], [161, 168, 166, 165, 164, 158, 163, 159, 169, 162, 172, 171, 175, 167, 160, 174, 170, 173], [188, 180, 190, 189, 185, 178, 179, 182, 194, 183, 187, 193, 177, 186, 191, 181, 192, 184], [204, 202, 198, 209, 205, 203, 196, 206, 201, 197, 200, 208, 207, 199], [211, 213, 212, 215, 218, 229, 221, 214, 219, 223, 226, 228, 225, 217, 222, 220, 224, 227, 216], [234, 237, 231, 232, 239, 233, 238, 236, 235]],
                },
                {
                    fields: {
                        capacity: 4000,
                    },
                    field: "capacity",
                    data: [[21, 26, 24, 16, 7, 8, 5, 27, 20, 18, 19, 28, 3, 23, 13, 25, 11, 2, 6, 4, 9, 22, 17, 15, 14, 12, 10], [40, 36, 34, 32, 38, 45, 42, 39, 35, 43, 30, 37, 46, 47, 31, 44, 41, 33], [64, 63, 60, 57, 67, 61, 55, 58, 50, 66, 59, 68, 56, 52, 49, 54, 51, 62, 69, 65, 53], [82, 91, 90, 84, 87, 86, 83, 79, 76, 85, 73, 80, 72, 71, 78, 89, 74, 88, 81, 75, 77], [115, 114, 103, 108, 97, 111, 106, 107, 112, 110, 93, 98, 96, 99, 102, 95, 105, 94, 109, 100, 101, 104, 113], [120, 129, 127, 126, 118, 135, 136, 119, 134, 139, 130, 137, 131, 140, 124, 117, 123, 138, 125, 121, 133, 122, 128, 132], [155, 158, 159, 148, 147, 161, 154, 153, 146, 150, 160, 145, 152, 142, 149, 151, 144, 156, 143, 157], [168, 166, 165, 164, 188, 163, 180, 190, 169, 172, 185, 189, 178, 176, 173, 179, 182, 170, 174, 183, 187, 177, 167, 181, 184, 175, 186, 171], [210, 211, 204, 199, 207, 202, 198, 194, 209, 205, 203, 196, 193, 206, 197, 201, 200, 208, 195, 192], [229, 221, 233, 219, 214, 237, 234, 218, 231, 232, 215, 213, 227, 216, 230, 224, 220, 236, 217, 225, 228, 222, 235, 223, 226], [239]],
                },
                {
                    fields: {
                        capacity: 11000,
                    },
                    field: "capacity",
                    data: [[63, 40, 64, 48, 25, 33, 11, 41, 2, 6, 65, 4, 9, 22, 31, 44, 17, 15, 14, 29, 10, 12, 62, 51, 54, 30, 28, 49, 18, 16, 7, 8, 38, 5, 27, 20, 45, 66, 59, 24, 42, 39, 56, 35, 19, 43, 52, 3, 37, 53, 46, 23, 13, 57, 47, 60, 36, 61, 34, 55, 21, 58, 50, 26, 32], [115, 103, 114, 86, 119, 113, 116, 83, 100, 101, 79, 104, 76, 69, 85, 73, 80, 72, 109, 94, 130, 131, 95, 124, 102, 123, 77, 75, 99, 117, 68, 105, 71, 70, 78, 127, 126, 90, 84, 108, 87, 91, 82, 118, 97, 111, 129, 106, 120, 89, 107, 74, 112, 92, 110, 132, 93, 128, 122, 98, 96, 125, 121, 81, 88], [166, 165, 161, 168, 154, 135, 153, 146, 176, 173, 198, 179, 182, 194, 170, 174, 183, 142, 187, 152, 196, 149, 151, 145, 193, 160, 144, 156, 172, 139, 150, 185, 134, 178, 189, 136, 162, 169, 190, 199, 147, 148, 159, 180, 163, 141, 188, 158, 164, 155, 138, 184, 195, 192, 181, 143, 175, 140, 167, 177, 157, 191, 200, 186, 171, 137, 197], [211, 210, 213, 212, 215, 231, 232, 207, 224, 227, 208, 216, 230, 220, 236, 206, 222, 217, 203, 205, 225, 228, 209, 238, 226, 233, 239, 202, 221, 229, 237, 234, 218, 204, 214, 219, 223, 235]],
                },
                {
                    fields: {
                        capacity: 15000,
                    },
                    field: "capacity",
                    data: [[63, 40, 64, 48, 25, 33, 11, 41, 2, 86, 31, 44, 17, 15, 83, 14, 29, 79, 76, 10, 85, 69, 12, 73, 80, 54, 51, 62, 72, 22, 9, 4, 65, 6, 3, 28, 30, 49, 18, 75, 16, 77, 7, 8, 38, 5, 27, 20, 45, 66, 59, 24, 42, 68, 39, 56, 35, 19, 43, 52, 71, 37, 53, 70, 78, 46, 23, 67, 89, 74, 32, 26, 50, 81, 88, 58, 21, 55, 34, 61, 36, 60, 47, 57, 13, 82, 87, 84], [161, 168, 154, 115, 114, 153, 146, 113, 116, 179, 182, 101, 170, 174, 183, 104, 152, 142, 149, 151, 145, 100, 173, 176, 119, 178, 103, 135, 118, 147, 120, 148, 97, 111, 129, 106, 165, 166, 107, 112, 164, 92, 110, 158, 98, 121, 125, 96, 155, 133, 122, 128, 141, 163, 93, 132, 180, 159, 127, 169, 126, 162, 91, 108, 136, 134, 150, 160, 144, 139, 172, 109, 156, 94, 130, 137, 171, 157, 105, 177, 131, 167, 95, 140, 124, 175, 102, 117, 123, 143, 181, 99, 138], [211, 210, 213, 212, 215, 188, 231, 232, 190, 199, 204, 218, 234, 237, 229, 221, 202, 189, 185, 214, 207, 197, 201, 224, 191, 186, 200, 192, 227, 195, 208, 216, 230, 220, 236, 206, 222, 205, 203, 217, 196, 187, 225, 228, 209, 194, 193, 235, 223, 198, 226, 238, 233, 239, 219]],
                },
            ]
        },
        ga: {
            title: 'Genetic Algorithm',
            description: 'Some description',
            dataset: 'data_3_240',
            id: 'GA',
            runs: []
        }
    }
}