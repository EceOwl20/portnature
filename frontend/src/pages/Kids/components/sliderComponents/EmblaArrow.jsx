import React from 'react'

export const PrevButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
  >
    {/* Buraya SVG veya 'Prev' yazısı */}
    <span className="text-sm">Prev</span>
  </button>
)

export const NextButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
  >
    {/* Buraya SVG veya 'Next' yazısı */}
    <span className="text-sm">Next</span>
  </button>
)

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

  const onPrevButtonClick = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const onNextButtonClick = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}
