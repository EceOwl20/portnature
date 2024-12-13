import React from 'react'

export const DotButton = ({ onClick, isSelected }) => (
  <button
    onClick={onClick}
    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
      isSelected ? 'border-black bg-black' : 'border-gray-300 bg-transparent'
    }`}
    aria-label="Scroll to slide"
  />
)

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState([])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      onSelect()
    })
  }, [emblaApi, onSelect])

  const onDotButtonClick = React.useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}
