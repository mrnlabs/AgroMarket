import { Button } from '@/Components/ui/button';
import { Link, router, usePage } from '@inertiajs/react'
import { Store,ClipboardCheck,CircleDollarSign, Search, Plus,Check, ChevronsUpDown } from 'lucide-react';
import React from 'react'

 
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/Components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"
import { Input } from '@/Components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';

export default function AdminProductFilter({ canCreateStore, onSearch,onStatusFilter }: { 
  canCreateStore: boolean, 
  onSearch: (searchValue: string) => void,
  onStatusFilter: (filterValue: string) => void
  }) {
    const { auth } = usePage().props;
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const frameworks = [
      {
        value: "next.js",
        label: "Next.js",
      },
      {
        value: "sveltekit",
        label: "SvelteKit",
      },
      {
        value: "nuxt.js",
        label: "Nuxt.js",
      },
      {
        value: "remix",
        label: "Remix",
      },
      {
        value: "astro",
        label: "Astro",
      },
    ]

    const [searchValue, setSearchValue] = React.useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch(value);
    }

  return (
<>

                <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <div className="mt-4 flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    value={searchValue}
                    onChange={handleSearch}
                    type="search"
                    placeholder="Search store..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button  role="combobox"
          aria-expanded={open} type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
          <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
          </svg>
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Filter by category..."}
          <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
          </svg>
        </Button>

      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>

        <Select onValueChange={onStatusFilter}>
  <SelectTrigger className="flex w-[100px] items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
    <SelectValue placeholder="Filter By Status" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="active" className='cursor-pointer text-success'>Active</SelectItem>
    <SelectItem value="inactive" className='cursor-pointer text-danger'>Inactive</SelectItem>
  </SelectContent>
</Select>

            </div>
          </div>
          </div>
    </>
  )
}
