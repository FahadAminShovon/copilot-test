type PassengerCounts = {
  adult?: number
  child?: number
  infantLap?: number
  infantSeat?: number
}

export const formatPassengerCounts = ({
  adult = 0,
  child = 0,
  infantLap = 0,
  infantSeat = 0,
}: PassengerCounts): string => {
  const formatCount = (count: number, label: string): string => {
    if (count === 0) {
      return ''
    } else if (count === 1) {
      return `1 ${label}`
    } else {
      // Handle special cases like "child" -> "children"
      if (label.toLowerCase() === 'child') {
        return `${count} ${label}ren`
      } else {
        return `${count} ${label}s`
      }
    }
  }

  const formattedCounts: string[] = [
    formatCount(adult, 'Adult'),
    formatCount(child, 'Child'),
    formatCount(infantLap, 'Infant (on lap)'),
    formatCount(infantSeat, 'Infant (in seats)'),
  ].filter(Boolean)

  return formattedCounts.join(' ')
}

// Example usage:
const passengerCounts: string = formatPassengerCounts({
  adult: 2,
  child: 1,
  infantLap: 1,
})
console.log(passengerCounts) // Output: "2 Adults, 1 Child, 1 Infant (on lap)"
