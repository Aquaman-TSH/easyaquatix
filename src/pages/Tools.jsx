import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Tools() {
  const [calcType, setCalcType] = useState('water-change')
  const [volume, setVolume] = useState('')
  const [unit, setUnit] = useState('gallons')
  const [changePercent, setChangePercent] = useState(20)
  const [medicationAmount, setMedicationAmount] = useState('')
  const [medicationConcentration, setMedicationConcentration] = useState('')
  const [dosagePerGallon, setDosagePerGallon] = useState('')
  const [result, setResult] = useState(null)

  usePageMeta({
    title: 'Aquarium Tools | Easy Aquatix',
    description: 'Handy aquarium calculators for water changes, medication dosing, and tank volume conversions.',
  })

  const calculateWaterChange = () => {
    const vol = parseFloat(volume)
    const pct = parseFloat(changePercent)
    if (!vol || !pct) return null
    const changeVol = vol * (pct / 100)
    return {
      changeVolume: changeVol.toFixed(2),
      unit,
    }
  }

  const calculateMedication = () => {
    const vol = parseFloat(volume)
    const amount = parseFloat(medicationAmount)
    const conc = parseFloat(medicationConcentration)
    const dosage = parseFloat(dosagePerGallon)
    if (!vol || !dosage) return null
    const totalDosage = vol * dosage
    return {
      totalDosage: totalDosage.toFixed(2),
      unit: 'ml',
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (calcType === 'water-change') {
      setResult(calculateWaterChange())
    } else {
      setResult(calculateMedication())
    }
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#0f3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Aquarium Tools</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Handy calculators for water changes, medication dosing, and tank volume conversions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Calculator Type</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="calcType"
                  value="water-change"
                  checked={calcType === 'water-change'}
                  onChange={(e) => setCalcType(e.target.value)}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-gray-900">Water Change Volume</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="calcType"
                  value="medication"
                  checked={calcType === 'medication'}
                  onChange={(e) => setCalcType(e.target.value)}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-gray-900">Medication Dosage</span>
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tank Volume
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g. 55"
                  />
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="gallons">US Gallons</option>
                    <option value="imperial">Imperial Gallons</option>
                    <option value="liters">Liters</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Change Percentage
                </label>
                <input
                  type="number"
                  step="1"
                  min="1"
                  max="100"
                  value={changePercent}
                  onChange={(e) => setChangePercent(parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {calcType === 'medication' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dosage per Gallon (ml)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.01"
                    value={dosagePerGallon}
                    onChange={(e) => setDosagePerGallon(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g. 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medication Concentration (optional)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={medicationConcentration}
                    onChange={(e) => setMedicationConcentration(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g. 100 mg/ml"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-8 py-3.5 rounded-lg bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
            >
              Calculate
            </button>
          </form>

          {result && (
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Results</h3>
              {calcType === 'water-change' && (
                <p className="text-green-700 text-lg">
                  Change <strong>{result.changeVolume} {result.unit === 'liters' ? 'L' : result.unit === 'imperial' ? 'imp. gal' : 'gal'}</strong> of water
                </p>
              )}
              {calcType === 'medication' && (
                <p className="text-green-700 text-lg">
                  Total medication: <strong>{result.totalDosage} ml</strong>
                </p>
              )}
            </div>
          )}

          <div className="mt-12 p-6 bg-gray-50 border border-gray-100 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Volume Conversion Reference</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
              <div className="p-3 bg-white rounded-lg">
                <p className="font-medium">1 US Gallon</p>
                <p>= 3.785 Liters</p>
                <p>= 0.833 Imperial Gallons</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="font-medium">1 Imperial Gallon</p>
                <p>= 4.546 Liters</p>
                <p>= 1.201 US Gallons</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="font-medium">1 Liter</p>
                <p>= 0.264 US Gallons</p>
                <p>= 0.220 Imperial Gallons</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="font-medium">Common Sizes</p>
                <p>10 gal = 37.9 L</p>
                <p>55 gal = 208 L</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}