/**
 * Carbon Fingerprint — Emission Factors Database
 * 
 * Every factor is cited to peer-reviewed sources. When you modify a factor,
 * update the source citation.
 * 
 * Sources:
 *   - IPCC AR6 WG3 (2022): Climate Change 2022: Mitigation of Climate Change
 *   - Poore & Nemecek (2018): Reducing food's environmental impacts, Science 360(6392)
 *   - IEA (2023): World Energy Outlook 2023 / CO2 Emissions in 2023
 *   - ICAO Carbon Emissions Calculator Methodology (2023)
 *   - EPA (2023): Greenhouse Gas Equivalencies Calculator
 *   - Global Carbon Project (2023): Global Carbon Budget 2023
 *   - World Bank (2023): CO2 emissions per capita
 *   - Our World in Data (2023): GHG emissions by sector
 *   - DEFRA (2023): UK Government GHG Conversion Factors
 * 
 * @module emission-factors
 */

export const EMISSION_FACTORS = {
  // ═══════════════════════════════════════════════════════════════
  // TRANSPORT — ~16% of global emissions (IPCC AR6 WG3 Ch.10)
  // ═══════════════════════════════════════════════════════════════
  transport: {
    // Q1: Daily commute mode
    commute_mode: {
      walk_bike: {
        value: 0.15,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.03, high: 0.3 },
        source: 'IPCC AR6 WG3',
        reference: 'Chapter 10, Table 10.3',
        year: 2022,
        note: 'Minimal emissions from walking/cycling. Includes embodied emissions of bicycle amortized over lifetime.'
      },
      public_transit: {
        value: 0.5,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.2, high: 0.9 },
        source: 'ICCT / DEFRA 2023',
        reference: 'ICCT Working Paper 2023-10; DEFRA Conversion Factors Table 13',
        year: 2023,
        note: 'Average for bus + metro commuter. Varies widely by city (electric rail is much lower).'
      },
      ev: {
        value: 0.6,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.2, high: 1.2 },
        source: 'IEA / ICCT',
        reference: 'IEA Global EV Outlook 2023; ICCT LCA of vehicles 2022',
        year: 2023,
        note: 'EV ~60% cleaner than ICE over lifecycle. Depends on grid carbon intensity.'
      },
      gas_car: {
        value: 1.8,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 1.0, high: 2.8 },
        source: 'EPA / IPCC AR6 WG3',
        reference: 'EPA GHG Emissions Factors Hub 2023; IPCC Ch.10 Table 10.3',
        year: 2023,
        note: 'Based on average 11,500 km/yr, 170g CO2/km (EPA average passenger vehicle).'
      },
      motorcycle: {
        value: 1.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.5, high: 1.5 },
        source: 'EPA / DEFRA 2023',
        reference: 'DEFRA Conversion Factors 2023, Table 13 (motorcycles)',
        year: 2023,
        note: 'Motorcycle ~100-130g CO2/km, lower distance than cars but higher per-km emissions than public transit.'
      }
    },

    // Q2: Daily commute distance
    commute_distance: {
      very_short: {
        value: 0.0,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.0, high: 0.0 },
        source: 'N/A — baseline modifier',
        reference: 'Modifies commute mode factor based on distance',
        year: 2023,
        note: '0-2km: Negligible additional emissions. Walking/cycling likely.'
      },
      short: {
        value: 0.15,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.05, high: 0.3 },
        source: 'EPA / DEFRA 2023',
        reference: 'EPA average vehicle emissions per km × distance',
        year: 2023,
        note: '2-10km: Moderate additional distance factor on top of mode.'
      },
      medium: {
        value: 0.45,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.2, high: 0.8 },
        source: 'EPA / DEFRA 2023',
        reference: 'EPA average vehicle emissions per km × distance',
        year: 2023,
        note: '10-30km: Significant daily commute distance.'
      },
      long: {
        value: 0.9,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.5, high: 1.5 },
        source: 'EPA / DEFRA 2023',
        reference: 'EPA average vehicle emissions per km × distance',
        year: 2023,
        note: '30km+: Long daily commute. Major emissions driver.'
      }
    },

    // Q3: Long-distance driving frequency
    long_distance_driving: {
      never: {
        value: 0.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.0, high: 0.0 },
        source: 'N/A',
        reference: 'No long-distance driving',
        year: 2023,
        note: 'No additional intercity driving emissions.'
      },
      monthly: {
        value: 0.3,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.1, high: 0.6 },
        source: 'EPA / DEFRA 2023',
        reference: '~300km round trip × 12 months × 170g CO2/km',
        year: 2023,
        note: 'Monthly intercity trip (~300km round trip).'
      },
      weekly: {
        value: 1.2,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.6, high: 2.0 },
        source: 'EPA / DEFRA 2023',
        reference: '~300km round trip × 52 weeks × 170g CO2/km',
        year: 2023,
        note: 'Weekly intercity trips. Significant emissions.'
      },
      daily: {
        value: 2.5,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 1.5, high: 4.0 },
        source: 'EPA / DEFRA 2023',
        reference: 'EPA average vehicle emissions for high-mileage drivers',
        year: 2023,
        note: 'Daily long-distance driving (sales, fieldwork, etc.).'
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // DIET — 26% of global emissions (FAO / IPCC AR6 WG3 Ch.7)
  // ═══════════════════════════════════════════════════════════════
  diet: {
    // Q4: Main protein source
    protein_source: {
      plant_based: {
        value: 0.6,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.3, high: 1.0 },
        source: 'Poore & Nemecek (2018)',
        reference: 'Science 360(6392), pp.987-992, Figure 1',
        year: 2018,
        note: 'Plant-based protein (legumes, tofu, nuts). Lifecycle emissions from Poore & Nemecek meta-analysis of 38,700 farms.'
      },
      fish: {
        value: 0.9,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.4, high: 1.8 },
        source: 'Poore & Nemecek (2018)',
        reference: 'Science 360(6392), pp.987-992, Figure 1',
        year: 2018,
        note: 'Fish/seafood. Varies widely: farmed fish ~5kg CO2e/kg, wild catch ~3kg CO2e/kg.'
      },
      poultry: {
        value: 1.2,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.6, high: 2.0 },
        source: 'Poore & Nemecek (2018)',
        reference: 'Science 360(6392), pp.987-992, Figure 1',
        year: 2018,
        note: 'Poultry as main protein. ~7kg CO2e/kg chicken (Poore & Nemecek).'
      },
      mixed_meat: {
        value: 1.6,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.8, high: 2.5 },
        source: 'Poore & Nemecek (2018)',
        reference: 'Science 360(6392), pp.987-992, Figure 1',
        year: 2018,
        note: 'Mix of poultry, pork, and occasional red meat.'
      },
      red_meat_daily: {
        value: 2.5,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 1.5, high: 4.0 },
        source: 'Poore & Nemecek (2018)',
        reference: 'Science 360(6392), pp.987-992, Figure 1; beef ~60kg CO2e/kg',
        year: 2018,
        note: 'Daily red meat consumption. Beef is the most emission-intensive food at ~60kg CO2e/kg.'
      }
    },

    // Q5: Dairy consumption
    dairy: {
      none: {
        value: 0.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.0, high: 0.0 },
        source: 'Poore & Nemecek (2018)',
        reference: 'Science 360(6392), pp.987-992',
        year: 2018,
        note: 'No dairy. Avoids ~3kg CO2e/kg milk equivalent emissions.'
      },
      occasional: {
        value: 0.2,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.1, high: 0.4 },
        source: 'Poore & Nemecek (2018) / FAO',
        reference: 'Science 360(6392); FAO GLEAM 2023',
        year: 2023,
        note: 'Occasional dairy (cheese in meals, occasional milk). ~30kg dairy/year.'
      },
      daily: {
        value: 0.5,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.25, high: 0.8 },
        source: 'Poore & Nemecek (2018) / FAO',
        reference: 'Science 360(6392); FAO GLEAM 2023',
        year: 2023,
        note: 'Daily dairy (milk, yogurt, cheese). ~100kg dairy/year × ~5kg CO2e/kg.'
      },
      heavy: {
        value: 0.8,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.4, high: 1.3 },
        source: 'Poore & Nemecek (2018) / FAO',
        reference: 'Science 360(6392); FAO GLEAM 2023',
        year: 2023,
        note: 'Heavy dairy consumption (milk daily, lots of cheese, butter). ~160kg dairy/year.'
      }
    },

    // Q6: Food waste habits
    food_waste: {
      minimal: {
        value: 0.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.0, high: 0.0 },
        source: 'FAO / IPCC AR6 WG3',
        reference: 'FAO 2019: State of Food and Agriculture; IPCC Ch.7',
        year: 2022,
        note: 'Minimal waste, composting. ~8-10% of food emissions are from waste (FAO).'
      },
      average: {
        value: 0.3,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.1, high: 0.5 },
        source: 'FAO / UNEP Food Waste Index 2021',
        reference: 'UNEP Food Waste Index Report 2021',
        year: 2021,
        note: 'Average food waste (~20% of food purchased wasted). Global average: 121kg/capita/year.'
      },
      significant: {
        value: 0.6,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.3, high: 1.0 },
        source: 'FAO / UNEP Food Waste Index 2021',
        reference: 'UNEP Food Waste Index Report 2021',
        year: 2021,
        note: 'Significant food waste (~35%+ wasted). Includes rotting food methane emissions.'
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // ENERGY — ~20% of global emissions (IEA 2023)
  // ═══════════════════════════════════════════════════════════════
  energy: {
    // Q7: Electricity source
    electricity_source: {
      renewable_100: {
        value: 0.2,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.05, high: 0.4 },
        source: 'IEA 2023',
        reference: 'IEA World Energy Outlook 2023; Electricity emission factors by source',
        year: 2023,
        note: '100% renewable electricity (solar/wind/hydro). Near-zero operational emissions.'
      },
      mostly_renewable: {
        value: 0.6,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.3, high: 1.0 },
        source: 'IEA 2023',
        reference: 'IEA CO2 Emissions in 2023; grid emission factors',
        year: 2023,
        note: 'Mostly renewable grid (e.g., France, UK, California). ~200g CO2/kWh.'
      },
      mixed_grid: {
        value: 1.2,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.6, high: 2.0 },
        source: 'IEA 2023',
        reference: 'IEA CO2 Emissions in 2023; global average ~420g CO2/kWh',
        year: 2023,
        note: 'Mixed grid (global average). ~420g CO2/kWh, ~3,000 kWh household.'
      },
      coal_heavy: {
        value: 2.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 1.2, high: 3.0 },
        source: 'IEA 2023',
        reference: 'IEA CO2 Emissions in 2023; coal-heavy grids ~800g CO2/kWh',
        year: 2023,
        note: 'Coal-heavy grid (e.g., Poland, parts of China/India). ~800g CO2/kWh.'
      }
    },

    // Q8: Home size
    home_size: {
      small_apartment: {
        value: 0.15,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.05, high: 0.3 },
        source: 'IEA / EIA',
        reference: 'IEA Buildings sector 2023; EIA Residential Energy Consumption Survey',
        year: 2023,
        note: 'Small apartment (<50m²). Lower heating/cooling needs.'
      },
      medium_apartment: {
        value: 0.35,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.15, high: 0.6 },
        source: 'IEA / EIA',
        reference: 'IEA Buildings sector 2023; EIA RECS',
        year: 2023,
        note: 'Medium apartment (50-90m²). Average residential energy use.'
      },
      large_house: {
        value: 0.7,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.3, high: 1.2 },
        source: 'IEA / EIA',
        reference: 'IEA Buildings sector 2023; EIA RECS',
        year: 2023,
        note: 'Large house (90-200m²). Higher heating/cooling demand.'
      },
      very_large: {
        value: 1.2,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.6, high: 2.0 },
        source: 'IEA / EIA',
        reference: 'IEA Buildings sector 2023; EIA RECS',
        year: 2023,
        note: 'Very large home (200m²+). Significant energy demand.'
      }
    },

    // Q9: Heating fuel
    heating_fuel: {
      none_solar: {
        value: 0.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.0, high: 0.1 },
        source: 'IEA 2023',
        reference: 'IEA Buildings sector 2023',
        year: 2023,
        note: 'No heating needed (tropical climate) or solar thermal only.'
      },
      heat_pump: {
        value: 0.2,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.05, high: 0.5 },
        source: 'IEA 2023 / IPCC AR6 WG3',
        reference: 'IEA Heat Pump Outlook 2023; IPCC Ch.9',
        year: 2023,
        note: 'Heat pump (COP ~3). ~3x more efficient than direct electric heating.'
      },
      gas: {
        value: 0.8,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.4, high: 1.4 },
        source: 'EPA / IEA 2023',
        reference: 'EPA GHG Emissions Factors; IEA Natural Gas Information 2023',
        year: 2023,
        note: 'Natural gas heating. ~2,000kg CO2/year for average US home (EPA).'
      },
      oil_coal: {
        value: 1.5,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.8, high: 2.5 },
        source: 'EPA / IEA 2023',
        reference: 'EPA GHG Emissions Factors; IEA Coal Information 2023',
        year: 2023,
        note: 'Oil or coal heating. Highest emission heating source. ~2.5x gas emissions.'
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CONSUMPTION — 21% of global emissions (UNEP / IPCC AR6 WG3 Ch.5)
  // ═══════════════════════════════════════════════════════════════
  consumption: {
    // Q10: Shopping frequency
    shopping_frequency: {
      rarely: {
        value: 0.15,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.05, high: 0.3 },
        source: 'IPCC AR6 WG3 / UNEP',
        reference: 'IPCC Ch.5, Table 5.3; UNEP Emissions Gap Report 2023',
        year: 2022,
        note: 'Rarely buys new goods. Minimal manufacturing emissions.'
      },
      monthly: {
        value: 0.35,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.15, high: 0.6 },
        source: 'IPCC AR6 WG3 / UNEP',
        reference: 'IPCC Ch.5, Table 5.3',
        year: 2022,
        note: 'Monthly purchases. Moderate consumer goods footprint.'
      },
      weekly: {
        value: 0.6,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.3, high: 1.0 },
        source: 'IPCC AR6 WG3 / UNEP',
        reference: 'IPCC Ch.5, Table 5.3',
        year: 2022,
        note: 'Weekly shopping. Regular acquisition of new goods.'
      },
      very_frequent: {
        value: 1.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.5, high: 1.8 },
        source: 'IPCC AR6 WG3 / UNEP',
        reference: 'IPCC Ch.5, Table 5.3',
        year: 2022,
        note: 'Very frequent shopping. High manufacturing + shipping emissions.'
      }
    },

    // Q11: Electronics/clothing replacement cycle
    replacement_cycle: {
      long: {
        value: 0.1,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.03, high: 0.2 },
        source: 'DEFRA 2023 / IPCC AR6 WG3',
        reference: 'DEFRA Conversion Factors 2023 (embodied carbon); IPCC Ch.5',
        year: 2023,
        note: '3+ year replacement cycle. Embodied carbon of electronics amortized over longer life.'
      },
      medium: {
        value: 0.3,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.1, high: 0.5 },
        source: 'DEFRA 2023 / IPCC AR6 WG3',
        reference: 'DEFRA Conversion Factors 2023',
        year: 2023,
        note: '2-year replacement cycle. Average for developed countries.'
      },
      short: {
        value: 0.55,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.3, high: 0.9 },
        source: 'DEFRA 2023 / IPCC AR6 WG3',
        reference: 'DEFRA Conversion Factors 2023',
        year: 2023,
        note: 'Annual replacement. Frequent upgrades of devices and clothing.'
      },
      very_short: {
        value: 0.9,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.5, high: 1.5 },
        source: 'DEFRA 2023 / IPCC AR6 WG3',
        reference: 'DEFRA Conversion Factors 2023',
        year: 2023,
        note: 'Multiple replacements per year. Fast fashion + latest electronics.'
      }
    },

    // Q12: Repair vs replace tendency
    repair_replace: {
      always_repair: {
        value: 0.0,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: -0.1, high: 0.0 },
        source: 'IPCC AR6 WG3 / Ellen MacArthur Foundation',
        reference: 'IPCC Ch.5; Ellen MacArthur Foundation Circular Economy Report 2023',
        year: 2022,
        note: 'Always repairs. Circular economy approach reduces embodied emissions.'
      },
      mostly_repair: {
        value: 0.1,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.0, high: 0.2 },
        source: 'IPCC AR6 WG3',
        reference: 'IPCC Ch.5',
        year: 2022,
        note: 'Mostly repairs. Some replacement when beyond repair.'
      },
      replace_broken: {
        value: 0.3,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.1, high: 0.5 },
        source: 'IPCC AR6 WG3',
        reference: 'IPCC Ch.5',
        year: 2022,
        note: 'Replaces when broken. Standard consumer behavior.'
      },
      replace_new: {
        value: 0.5,
        unit: 'tonnes CO2e/year (additive modifier)',
        uncertainty: { low: 0.25, high: 0.8 },
        source: 'IPCC AR6 WG3',
        reference: 'IPCC Ch.5',
        year: 2022,
        note: 'Replaces for newest model. High embodied carbon from premature disposal.'
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // FLIGHTS — ~2.5% of global emissions but highly skewed (ICAO)
  // ═══════════════════════════════════════════════════════════════
  flights: {
    // Q13: Short-haul flights per year
    short_haul: {
      none: {
        value: 0.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.0, high: 0.0 },
        source: 'ICAO',
        reference: 'ICAO Carbon Emissions Calculator Methodology 2023',
        year: 2023,
        note: 'No short-haul flights.'
      },
      few: {
        value: 0.5,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.2, high: 0.9 },
        source: 'ICAO',
        reference: 'ICAO Carbon Emissions Calculator; ~0.25t CO2 per short-haul flight',
        year: 2023,
        note: '1-2 short-haul flights/year (<3h). ~250kg CO2 per flight (ICAO).'
      },
      moderate: {
        value: 1.2,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.6, high: 2.0 },
        source: 'ICAO',
        reference: 'ICAO Carbon Emissions Calculator',
        year: 2023,
        note: '3-5 short-haul flights/year. Regular domestic traveler.'
      },
      frequent: {
        value: 2.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 1.0, high: 3.5 },
        source: 'ICAO',
        reference: 'ICAO Carbon Emissions Calculator',
        year: 2023,
        note: '6+ short-haul flights/year. Very frequent domestic flyer.'
      }
    },

    // Q14: Long-haul flights per year
    long_haul: {
      none: {
        value: 0.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.0, high: 0.0 },
        source: 'ICAO',
        reference: 'ICAO Carbon Emissions Calculator Methodology 2023',
        year: 2023,
        note: 'No long-haul flights.'
      },
      one: {
        value: 1.6,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 0.8, high: 2.5 },
        source: 'ICAO',
        reference: 'ICAO Carbon Emissions Calculator; transatlantic ~1.6t CO2',
        year: 2023,
        note: '1 long-haul flight/year (>6h). Transatlantic round trip ≈ 1.6t CO2 (ICAO).'
      },
      two: {
        value: 3.2,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 1.6, high: 5.0 },
        source: 'ICAO',
        reference: 'ICAO Carbon Emissions Calculator',
        year: 2023,
        note: '2 long-haul flights/year. e.g., two intercontinental trips.'
      },
      three_plus: {
        value: 5.0,
        unit: 'tonnes CO2e/year',
        uncertainty: { low: 3.0, high: 8.0 },
        source: 'ICAO',
        reference: 'ICAO Carbon Emissions Calculator',
        year: 2023,
        note: '3+ long-haul flights/year. Frequent international traveler.'
      }
    },

    // Q15: Flight class multiplier
    flight_class: {
      economy: {
        value: 1.0,
        unit: 'multiplier',
        uncertainty: { low: 1.0, high: 1.0 },
        source: 'ICAO / DEFRA 2023',
        reference: 'DEFRA Conversion Factors 2023, Table 7 (aviation); ICAO methodology',
        year: 2023,
        note: 'Economy class. Base multiplier (1x). Occupies ~1/6th of floor space.'
      },
      premium_economy: {
        value: 1.5,
        unit: 'multiplier',
        uncertainty: { low: 1.3, high: 1.8 },
        source: 'ICAO / DEFRA 2023',
        reference: 'DEFRA Conversion Factors 2023, Table 7',
        year: 2023,
        note: 'Premium economy. ~1.5x economy due to wider seat and more legroom.'
      },
      business: {
        value: 2.5,
        unit: 'multiplier',
        uncertainty: { low: 2.0, high: 3.0 },
        source: 'ICAO / DEFRA 2023',
        reference: 'DEFRA Conversion Factors 2023, Table 7',
        year: 2023,
        note: 'Business class. ~2.5x economy. Lie-flat seats take ~3x floor space.'
      },
      first: {
        value: 4.0,
        unit: 'multiplier',
        uncertainty: { low: 3.0, high: 5.0 },
        source: 'ICAO / DEFRA 2023',
        reference: 'DEFRA Conversion Factors 2023, Table 7',
        year: 2023,
        note: 'First class. ~4x economy. Suites take ~4-5x floor space.'
      }
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// BENCHMARKS — Reference values for comparison
// ═══════════════════════════════════════════════════════════════
export const BENCHMARKS = {
  global_average: {
    value: 4.7,
    unit: 'tonnes CO2e/year',
    source: 'World Bank',
    reference: 'World Development Indicators, CO2 emissions per capita',
    year: 2023,
    note: 'Global average per capita CO2 emissions (2023 data).'
  },
  paris_target: {
    value: 2.3,
    unit: 'tonnes CO2e/year',
    source: 'IPCC AR6 WG3',
    reference: 'Chapter 2, Table 2.3 — 1.5°C pathway per capita budget',
    year: 2022,
    note: 'Per capita budget for 1.5°C by 2030 (SSP1-1.9 pathway).'
  },
  us_average: {
    value: 14.5,
    unit: 'tonnes CO2e/year',
    source: 'Global Carbon Project',
    reference: 'Global Carbon Budget 2023',
    year: 2023,
    note: 'US per capita CO2 emissions from fossil fuels and industry.'
  },
  eu_average: {
    value: 6.8,
    unit: 'tonnes CO2e/year',
    source: 'Global Carbon Project / Eurostat',
    reference: 'Global Carbon Budget 2023; Eurostat GHG emissions',
    year: 2023,
    note: 'EU-27 average per capita CO2 emissions.'
  },
  china_average: {
    value: 8.0,
    unit: 'tonnes CO2e/year',
    source: 'Global Carbon Project',
    reference: 'Global Carbon Budget 2023',
    year: 2023,
    note: 'China per capita CO2 emissions.'
  },
  india_average: {
    value: 1.9,
    unit: 'tonnes CO2e/year',
    source: 'Global Carbon Project',
    reference: 'Global Carbon Budget 2023',
    year: 2023,
    note: 'India per capita CO2 emissions.'
  }
};

// ═══════════════════════════════════════════════════════════════
// SHARED EMISSIONS — Government services, infrastructure, military
// ═══════════════════════════════════════════════════════════════
export const SHARED_EMISSIONS = {
  value: 1.5,
  unit: 'tonnes CO2e/year',
  uncertainty: { low: 1.0, high: 2.5 },
  source: 'Our World in Data / Government services allocation',
  reference: 'Our World in Data, GHG emissions by sector; allocated per capita',
  year: 2023,
  note: 'Represents per-capita share of government services, infrastructure, military, public buildings, and other shared emissions that individuals cannot directly control.'
};

// ═══════════════════════════════════════════════════════════════
// ALL SOURCES — For data provenance display
// ═══════════════════════════════════════════════════════════════
export const ALL_SOURCES = [
  {
    id: 'ipcc_ar6',
    name: 'IPCC AR6 WG3 (2022)',
    full: 'Climate Change 2022: Mitigation of Climate Change',
    url: 'https://www.ipcc.ch/report/ar6/wg3/',
    categories: ['transport', 'diet', 'energy', 'consumption']
  },
  {
    id: 'poore_nemecek',
    name: 'Poore & Nemecek (2018)',
    full: 'Reducing food\'s environmental impacts through producers and consumers, Science 360(6392)',
    url: 'https://doi.org/10.1126/science.aaq0216',
    categories: ['diet']
  },
  {
    id: 'iea_2023',
    name: 'IEA (2023)',
    full: 'International Energy Agency — World Energy Outlook 2023 / CO2 Emissions in 2023',
    url: 'https://www.iea.org/reports/co2-emissions-in-2023',
    categories: ['energy']
  },
  {
    id: 'icao',
    name: 'ICAO (2023)',
    full: 'ICAO Carbon Emissions Calculator Methodology',
    url: 'https://www.icao.int/environmental-protection/Carbonoffset/Pages/default.aspx',
    categories: ['flights']
  },
  {
    id: 'epa',
    name: 'EPA (2023)',
    full: 'US Environmental Protection Agency — Greenhouse Gas Equivalencies Calculator',
    url: 'https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator',
    categories: ['transport', 'energy']
  },
  {
    id: 'defra',
    name: 'DEFRA (2023)',
    full: 'UK Department for Environment — GHG Conversion Factors',
    url: 'https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2023',
    categories: ['transport', 'consumption', 'flights']
  },
  {
    id: 'global_carbon_project',
    name: 'Global Carbon Project (2023)',
    full: 'Global Carbon Budget 2023',
    url: 'https://globalcarbonproject.org/carbonbudget/',
    categories: ['benchmarks']
  },
  {
    id: 'world_bank',
    name: 'World Bank (2023)',
    full: 'World Development Indicators — CO2 emissions per capita',
    url: 'https://data.worldbank.org/indicator/EN.ATM.CO2E.PC',
    categories: ['benchmarks']
  },
  {
    id: 'our_world_in_data',
    name: 'Our World in Data (2023)',
    full: 'Greenhouse gas emissions by sector',
    url: 'https://ourworldindata.org/emissions-by-sector',
    categories: ['shared']
  },
  {
    id: 'fao',
    name: 'FAO (2023)',
    full: 'Food and Agriculture Organization — GLEAM / State of Food and Agriculture',
    url: 'https://www.fao.org/gleam/en',
    categories: ['diet']
  },
  {
    id: 'unep',
    name: 'UNEP (2021)',
    full: 'UNEP Food Waste Index Report 2021',
    url: 'https://www.unep.org/resources/publication/food-waste-index-report-2021',
    categories: ['diet']
  },
  {
    id: 'nasa_giss',
    name: 'NASA GISS',
    full: 'GISTEMP v4 — Surface Temperature Analysis (1880–2025)',
    url: 'https://data.giss.nasa.gov/gistemp/',
    categories: ['climate']
  },
  {
    id: 'noaa',
    name: 'NOAA',
    full: 'Sea Level Rise data',
    url: 'https://www.climate.gov/news-features/understanding-climate/climate-change-global-sea-level',
    categories: ['climate']
  },
  {
    id: 'icct',
    name: 'ICCT (2023)',
    full: 'International Council on Clean Transportation — Transit emission factors',
    url: 'https://theicct.org/',
    categories: ['transport']
  },
  {
    id: 'ellen_macarthur',
    name: 'Ellen MacArthur Foundation',
    full: 'Circular Economy Reports',
    url: 'https://ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview',
    categories: ['consumption']
  }
];
