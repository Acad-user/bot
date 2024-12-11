export const waterKnowledgeBase = {
  techniques: {
    rainwaterHarvesting: {
      title: 'Rainwater Harvesting',
      description: 'Collection and storage of rainwater for reuse.',
      methods: [
        'Rooftop harvesting',
        'Surface runoff harvesting',
        'Underground tanks'
      ],
      benefits: [
        'Reduces dependency on groundwater',
        'Cost-effective water source',
        'Helps in groundwater recharge'
      ]
    },
    waterRecycling: {
      title: 'Water Recycling',
      description: 'Process of treating wastewater for reuse.',
      methods: [
        'Greywater systems',
        'Biological treatment',
        'Membrane filtration'
      ],
      benefits: [
        'Reduces water wastage',
        'Environmental protection',
        'Cost savings on water bills'
      ]
    },
    dripIrrigation: {
      title: 'Drip Irrigation',
      description: 'Method of irrigation that saves water and fertilizer by allowing water to drip slowly to the roots.',
      methods: [
        'Surface drip',
        'Subsurface drip',
        'Micro-sprinklers'
      ],
      benefits: [
        'Water efficiency up to 90%',
        'Reduced weed growth',
        'Better crop yield'
      ]
    }
  },
  waterQuality: {
    parameters: [
      {
        name: 'pH',
        description: 'Measure of water acidity or alkalinity',
        idealRange: '6.5-8.5'
      },
      {
        name: 'TDS',
        description: 'Total Dissolved Solids',
        idealRange: '<500 mg/L'
      },
      {
        name: 'Turbidity',
        description: 'Measure of water clarity',
        idealRange: '<1 NTU'
      }
    ],
    wqiCalculation: 'WQI = Σ(Wi × Qi) / ΣWi, where Wi is weight and Qi is quality rating'
  },
  conservation: {
    household: [
      'Fix leaking taps',
      'Install water-efficient fixtures',
      'Collect and reuse greywater',
      'Use water-efficient appliances'
    ],
    agriculture: [
      'Drip irrigation',
      'Mulching',
      'Crop rotation',
      'Drought-resistant crops'
    ],
    industrial: [
      'Water recycling systems',
      'Efficient cooling towers',
      'Process optimization',
      'Regular maintenance'
    ]
  }
};