import { Municipality, Steps } from './types'

export const composeDescription = (municipality: Municipality, steps:Steps) => {
  switch (steps) {
    case 'historiska-utslapp':
      return `${municipality.Name} är en kommun i Sverige med en befolkning på ${municipality.Population} invånare. 
      ${municipality.Name} har en historisk utsläppsrankning på ${municipality.HistoricalEmission.HistoricalEmissionChangeRank}.
      Besök ${municipality.Name} för att se mer information om kommunen.`

    case 'framtida-prognos':
      return `${municipality.Name} är en kommun i Sverige med en befolkning på ${municipality.Population} invånare. 
        ${municipality.Name} har en framtida prognos på ${municipality.EmissionTrend.TrendCO2Emission} CO2-ekvivalenter.
      Besök ${municipality.Name} för att se mer information om kommunen.`

    case 'parisavtalet':
      return `${municipality.Name} är en kommun i Sverige med en befolkning på ${municipality.Population} invånare. 
      ${municipality.Name} har en budget som uppgår till ${municipality.Budget.CO2Equivalent} CO2-ekvivalenter.
      Besök ${municipality.Name} för att se mer information om kommunen.`
    default:
      return `${municipality.Name} är en kommun i Sverige med en befolkning på ${municipality.Population} invånare.`
  }
}
