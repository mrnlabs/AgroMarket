import React from 'react'

export default function FileManagerSearch({onSearch}: {onSearch: (searchValue: string) => void}) {

	 const [searchValue, setSearchValue] = React.useState('');
		
		const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		  const value = e.target.value;
		  setSearchValue(value);
		  onSearch(value);
		}
		
		const searchRef = React.useRef<HTMLInputElement>(null);
		React.useEffect(() => {
			if (searchRef.current) {
				searchRef.current.focus();
			}
		}, []); 
		

  return (
    <div className="2xl:col-span-4 sm:col-span-2">
				<div className="flex items-center justify-between gap-4">
					<div className="lg:hidden block">
						<button data-fc-target="default-offcanvas" data-fc-type="offcanvas" className="inline-flex items-center justify-center text-gray-700 border border-gray-300 rounded shadow hover:bg-slate-100 dark:text-gray-400 hover:dark:bg-gray-800 dark:border-gray-700 transition h-9 w-9 duration-100">
							<div className="mgc_menu_line text-lg"></div>
						</button>
					</div>
					<h4 className="text-xl">Folders</h4>

					<form className="ms-auto">
						<div className="flex items-center">
							<input ref={searchRef} onChange={handleSearch} type="search" className="form-input  rounded-full" placeholder="Search files..."/>
							<span className="mgc_search_line text-xl -ms-8"></span>
						</div>
					</form>
				</div>
			</div>
  )
}
