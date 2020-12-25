export const preConfigs = {
    aco : {
        title : 'Ant Colony Algorithm',
        controls: [
            {
                label : '# Dataset',
                type : 'select',
                title: 'Dataset',
                name : 'aco_dataset',
                options: [
                    {
                        name: '40',
                        value: 40,
                        selected: true,
                    },
                    {
                        name: '60',
                        value: 60,
                    },
                    {
                        name: '100',
                        value: 100,
                    },
                    {
                        name: '200',
                        value: 200
                    }
                ]
            },
            {
                label : '# Ants',
                type : 'select',
                title: 'Number of ants',
                name : 'aco_num_ants',
                options: [
                    {
                        name: '40',
                        value: 40,
                        selected: true,
                    },
                    {
                        name: '60',
                        value: 60,
                    },
                    {
                        name: '100',
                        value: 100,
                    },
                    {
                        name: '200',
                        value: 200
                    }
                ]
            },
            {
                label : '# Rho',
                type : 'select',
                title: 'Pheromone coefficient, evaporation factor',
                name : 'aco_num_rho',
                options: [
                    {
                        name: '0.02',
                        value: 0.02,
                    },
                    {
                        name: '0.1',
                        value: 0.1,
                        selected: true,
                    },
                    {
                        name: '0.5',
                        value: 0.5,
                    },
                    {
                        name: '0.8',
                        value: 0.8
                    }
                ]
            },
            {
                label : '# Alpha',
                type : 'select',
                title: 'Relative important of pheromone',
                name : 'aco_num_alpha',
                options: [
                    {
                        name: '0.5',
                        value: 0.5,
                    },
                    {
                        name: '1',
                        value: 1,
                        selected: true,
                    },
                    {
                        name: '2',
                        value: 2,
                    },
                    {
                        name: '3',
                        value: 3
                    }
                ]
            },
            {
                label : '# Beta',
                type : 'select',
                title: 'Realtive importance of heuristic information',
                name : 'aco_num_beta',
                options: [
                    {
                        name: '1',
                        value: 1,
                    },
                    {
                        name: '3',
                        value: 3,
                    },
                    {
                        name: '5',
                        value: 5,
                        selected: true,
                    },
                    {
                        name: '10',
                        value: 10
                    }
                ]
            },
            {
                label : '# MaxNFC',
                type : 'select',
                title: 'Number of generation',
                name : 'aco_num_maxnfc',
                options: [
                    {
                        name: '1000',
                        value: 1000,
                    },
                    {
                        name: '1500',
                        value: 1500,
                    },
                    {
                        name: '2000',
                        value: 2000,
                        selected: true,
                    },
                    {
                        name: '2500',
                        value: 2500,
                    },
                    {
                        name: '2745',
                        value: 2745,
                    },
                    {
                        name: '4000',
                        value: 4000,
                    },
                    {
                        name: '11000',
                        value: 11000,
                    },
                    {
                        name: '15000',
                        value: 15000,
                    },
                ]
            }
        ]
    }
}