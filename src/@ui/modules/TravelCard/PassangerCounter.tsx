import React, { useEffect, useState } from 'react'
import Counter from '../../components/Counter/Counter'
import { Stack } from '@mui/material'

type PassengerCounts = {
  adult?: number
  child?: number
  infantLap?: number
  infantSeat?: number
}

type onChange = (counts: PassengerCounts) => void

const PassangerCounter = ({ onChange }: { onChange: onChange }) => {
  const [adultCount, setAdultCount] = useState(1)
  const [childCount, setChildCount] = useState(0)
  const [infantLapCount, setInfantLapCount] = useState(0)
  const [infantSeatCount, setInfantSeatCount] = useState(0)

  const genericCount =
    (incrementBy: number) =>
    (setCount: React.Dispatch<React.SetStateAction<number>>) =>
    () => {
      setCount((prev) => Math.max(0, prev + incrementBy)) // Ensure the count doesn't go below 0
    }

  const incrementCount = genericCount(1)
  const decrementCount = genericCount(-1)

  const addAdult = incrementCount(setAdultCount)
  const addChild = incrementCount(setChildCount)
  const addInfantLap = incrementCount(setInfantLapCount)
  const addInfantSeat = incrementCount(setInfantSeatCount)

  const removeAdult = decrementCount(setAdultCount)
  const removeChild = decrementCount(setChildCount)
  const removeInfantLap = decrementCount(setInfantLapCount)
  const removeInfantSeat = decrementCount(setInfantSeatCount)

  useEffect(() => {
    onChange({
      adult: adultCount,
      child: childCount,
      infantLap: infantLapCount,
      infantSeat: infantSeatCount,
    })
  }, [adultCount, childCount, infantSeatCount, infantLapCount])

  return (
    <Stack gap={2}>
      <Counter
        label="Adult"
        caption="15 years and older"
        value={adultCount}
        onIncrement={addAdult}
        onDecrement={() => {
          if (adultCount > 1) {
            removeAdult()
          }
        }}
      />
      <Counter
        label="Child"
        caption="Ages 2-14 Years"
        value={childCount}
        onIncrement={addChild}
        onDecrement={removeChild}
      />
      <Counter
        label="Infant (on lap)"
        caption="1-12 Months"
        value={infantLapCount}
        onIncrement={addInfantLap}
        onDecrement={removeInfantLap}
      />
      <Counter
        label="Infant (in seats)"
        caption="1-12 Months"
        value={infantSeatCount}
        onIncrement={addInfantSeat}
        onDecrement={removeInfantSeat}
      />
    </Stack>
  )
}

export default PassangerCounter
