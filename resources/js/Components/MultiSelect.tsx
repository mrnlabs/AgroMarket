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
  value?: Option[]  // Add this line
}

const MultiSelect = ({
  options,
  placeholder = "Select items...",
  maxSelected,
  onSelectionChange,
  isDisabled = false,
  className = "",
  value,  // Add this line
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
      value={value}  // Add this line
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