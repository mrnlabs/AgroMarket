import React from 'react'
import Select from 'react-select'

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
  placeholder?: string
  maxSelected?: number
  onSelectionChange?: (selected: Option[]) => void
  isDisabled?: boolean
  className?: string
}

const MultiSelect = ({
  options,
  placeholder = "Select items...",
  maxSelected,
  onSelectionChange,
  isDisabled = false,
  className = "",
}: MultiSelectProps) => {
  const handleChange = (selectedOptions: readonly Option[] | null) => {
    onSelectionChange?.(selectedOptions as Option[] || [])
  }

  return (
    <Select
      isMulti
      options={options}
      placeholder={placeholder}
      isDisabled={isDisabled}
      className={className}
      onChange={handleChange}
    //   isOptionDisabled={() => maxSelected ? (selected?.length || 0) >= maxSelected : false}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          minHeight: '42px',
        }),
      }}
    />
  )
}

export default MultiSelect