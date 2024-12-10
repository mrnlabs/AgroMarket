import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Clock, Ellipsis } from 'lucide-react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
    <div className="grid 2xl:grid-cols-4 gap-6 mb-6">

        <div className="2xl:col-span-3">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 mb-6">
                <div className="card">
                    <div className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-base mb-1 text-gray-600 dark:text-gray-400">Project Dashboard</h4>
                                <p className="font-normal text-sm text-gray-400 truncate dark:text-gray-500">New Task Assign</p>
                            </div>

                            <div>
                                <button className="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                    <Ellipsis className="text-xl" />
                                </button>

                                <div className="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                        <i className="mgc_add_circle_line"></i> Add
                                    </a>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                        <i className="mgc_edit_line"></i> Edit
                                    </a>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                        <i className="mgc_copy_2_line"></i> Copy
                                    </a>
                                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="#!">
                                        <i className="mgc_delete_line"></i> Delete
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-end">
                            <div className="flex-grow">
                                <p className="text-[13px] flex items-center  text-gray-400 dark:text-gray-500 font-semibold">
                                <Clock size={12} className="mr-1" /> 4 Hrs ago</p>
                            </div>
                            <div className="flex">
                                <a href="#!">
                                    <img src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" className="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend"/>
                                </a>
                                <a href="#!" className="-ms-2">
                                    <img src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" className="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-base mb-1 text-gray-600 dark:text-gray-400">Admin Template</h4>
                                <p className="font-normal text-sm text-gray-400 truncate dark:text-gray-500">New Task Assign</p>
                            </div>
                            <div>
                                <button className="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                    <i className="mgc_more_1_fill text-xl"></i>
                                </button>

                                <div className="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                        <i className="mgc_add_circle_line"></i> Add
                                    </a>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                        <i className="mgc_edit_line"></i> Edit
                                    </a>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                        <i className="mgc_copy_2_line"></i> Copy
                                    </a>
                                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="#!">
                                        <i className="mgc_delete_line"></i> Delete
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-end">
                            <div className="flex-grow">
                                <p className="text-[13px] text-gray-400 dark:text-gray-500 font-semibold"><i className="mgc_alarm_2_line"></i> 3 Hrs ago</p>
                            </div>
                            <div className="flex">
                                <a href="#!">
                                    <img src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" className="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend"/>
                                </a>
                                <a href="#!" className="-ms-2">
                                    <img src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" className="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-base mb-1 text-gray-600 dark:text-gray-400">Client Project</h4>
                                <p className="font-normal text-sm text-gray-400 truncate dark:text-gray-500">New Task Assign</p>
                            </div>
                            <div>
                                <button className="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                    <i className="mgc_more_1_fill text-xl"></i>
                                </button>

                                <div className="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                        <i className="mgc_add_circle_line"></i> Add
                                    </a>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                        <i className="mgc_edit_line"></i> Edit
                                    </a>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                        <i className="mgc_copy_2_line"></i> Copy
                                    </a>
                                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="#!">
                                        <i className="mgc_delete_line"></i> Delete
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-end">
                            <div className="flex-grow">
                                <p className="text-[13px] text-gray-400 dark:text-gray-500 font-semibold"><i className="mgc_alarm_2_line"></i> 5 Hrs ago</p>
                            </div>
                            <div className="flex">
                                <a href="#!">
                                    <img src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" className="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend"/>
                                </a>
                                <a href="#!" className="-ms-2">
                                    <img src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" className="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-base mb-1 text-gray-600 dark:text-gray-400">Figma Design</h4>
                                <p className="font-normal text-sm text-gray-400 truncate dark:text-gray-500">New Task Assign</p>
                            </div>
                            <div>
                                <button className="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                    <i className="mgc_more_1_fill text-xl"></i>
                                </button>

                                <div className="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                        <i className="mgc_add_circle_line"></i> Add
                                    </a>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                        <i className="mgc_edit_line"></i> Edit
                                    </a>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                        <i className="mgc_copy_2_line"></i> Copy
                                    </a>
                                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
                                    <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="#!">
                                        <i className="mgc_delete_line"></i> Delete
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-end">
                            <div className="flex-grow">
                                <p className="text-[13px] text-gray-400 dark:text-gray-500 font-semibold"><i className="mgc_alarm_2_line"></i> 1 Day ago</p>
                            </div>
                            <div className="flex">
                                <a href="#!">
                                    <img src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" className="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend"/>
                                </a>
                                <a href="#!" className="-ms-2">
                                    <img src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" className="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="col-span-1">
                    <div className="card">
                        <div className="p-6">
                            <h4 className="card-title">Monthly Target</h4>

                            <div id="monthly-target" className="apex-charts my-8" data-colors="#0acf97,#3073F1"></div>

                            <div className="flex justify-center">
                                <div className="w-1/2 text-center">
                                    <h5>Pending</h5>
                                    <p className="fw-semibold text-muted">
                                        <i className="mgc_round_fill text-primary"></i> Projects
                                    </p>
                                </div>
                                <div className="w-1/2 text-center">
                                    <h5>Done</h5>
                                    <p className="fw-semibold text-muted">
                                        <i className="mgc_round_fill text-success"></i> Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <div className="card">
                        <div className="p-6">
                            <div className="flex justify-between items-center">
                                <h4 className="card-title">Project Statistics</h4>
                                <div className="flex gap-2">
                                    <button type="button" className="btn btn-sm bg-primary/25 text-primary hover:bg-primary hover:text-white">
                                        All
                                    </button>
                                    <button type="button" className="btn btn-sm bg-gray-400/25 text-gray-400 hover:bg-gray-400 hover:text-white">
                                        6M
                                    </button>
                                    <button type="button" className="btn btn-sm bg-gray-400/25 text-gray-400 hover:bg-gray-400 hover:text-white">
                                        1Y
                                    </button>
                                </div>
                            </div>

                            <div dir="ltr" className="mt-2">
                                <div id="crm-project-statistics" className="apex-charts" data-colors="#cbdcfc,#3073F1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-1">
            <div className="card mb-6">
                <div className="px-6 py-5 flex justify-between items-center">
                    <h4 className="header-title">Project Summary</h4>
                    <div>
                        <button className="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                            <i className="mgc_more_1_fill text-xl"></i>
                        </button>

                        <div className="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                            <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                <i className="mgc_add_circle_line"></i> Add
                            </a>
                            <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                <i className="mgc_edit_line"></i> Edit
                            </a>
                            <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                <i className="mgc_copy_2_line"></i> Copy
                            </a>
                            <div className="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
                            <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="#!">
                                <i className="mgc_delete_line"></i> Delete
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 bg-warning/20 text-warning" role="alert">
                    <i className="mgc_folder_star_line me-1 text-lg align-baseline"></i> <b>38</b> Total Admin & Client Projects
                </div>

                <div className="p-6 space-y-3">
                    <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                        <div className="flex-shrink-0 me-2">
                            <div className="w-12 h-12 flex justify-center items-center rounded-full text-primary bg-primary/25">
                                <i className="mgc_group_line text-xl"></i>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h5 className="font-semibold mb-1">Project Discssion</h5>
                            <p className="text-gray-400">6 Person</p>
                        </div>
                        <div>
                            <button className="text-gray-400" data-fc-type="tooltip" data-fc-placement="top">
                                <i className="mgc_information_line text-xl"></i>
                            </button>
                            <div className="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                                Info <div className="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                        <div className="flex-shrink-0 me-2">
                            <div className="w-12 h-12 flex justify-center items-center rounded-full text-warning bg-warning/25">
                                <i className="mgc_compass_line text-xl"></i>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h5 className="fw-semibold my-0">In Progress</h5>
                            <p>16 Projects</p>
                        </div>
                        <div>
                            <button className="text-gray-400" data-fc-type="tooltip" data-fc-placement="top">
                                <i className="mgc_information_line text-xl"></i>
                            </button>
                            <div className="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                                Info <div className="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                        <div className="flex-shrink-0 me-2">
                            <div className="w-12 h-12 flex justify-center items-center rounded-full text-danger bg-danger/25">
                                <i className="mgc_check_circle_line text-xl"></i>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h5 className="fw-semibold my-0">Completed Projects</h5>
                            <p>24</p>
                        </div>
                        <div>
                            <button className="text-gray-400" data-fc-type="tooltip" data-fc-placement="top">
                                <i className="mgc_information_line text-xl"></i>
                            </button>
                            <div className="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                                Info <div className="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                        <div className="flex-shrink-0 me-2">
                            <div className="w-12 h-12 flex justify-center items-center rounded-full text-success bg-success/25">
                                <i className="mgc_send_line text-xl"></i>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h5 className="fw-semibold my-0">Delivery Projects</h5>
                            <p>20</p>
                        </div>
                        <div>
                            <button className="text-gray-400" data-fc-type="tooltip" data-fc-placement="top">
                                <i className="mgc_information_line text-xl"></i>
                            </button>
                            <div className="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                                Info <div className="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card p-6">
                <h4 className="text-gray-600 dark:text-gray-300 mb-2.5">On Time Completed Rate <span className="px-2 py-0.5 rounded bg-success/25 text-success ms-2"><i className="mgc_arrow_up_line text-sm align-baseline me-1"></i>59%</span></h4>
                <div className="flex justify-between items-center mb-2">
                    <h5 className="text-base font-semibold">Completed Projects</h5>
                    <h5 className="text-gray-600 dark:text-gray-300">65%</h5>
                </div>
                <div className="flex w-full h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 ">
                <div 
                className="flex flex-col justify-center overflow-hidden bg-primary w-1/4" 
                role="progressbar" 
                aria-valuenow={25} 
                aria-valuemin={0} 
                aria-valuemax={100}
                ></div>
                </div>
            </div>
        </div>
    </div> 

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-6">
        <div className="col-span-1">
            <div className="card">
                <div className="p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 me-3">
                            <div className="w-12 h-12 flex justify-center items-center rounded text-primary bg-primary/25">
                                <i className="mgc_document_2_line text-xl"></i>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h5 className="mb-1">Active Projects</h5>
                            <p>85</p>
                        </div>
                        <div>
                            <button className="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                <i className="mgc_more_2_fill text-xl"></i>
                            </button>

                            <div className="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                    Today
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                    Yesterday
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                    Last Week
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                    Last Month
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-1">
            <div className="card">
                <div className="p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 me-3">
                            <div className="w-12 h-12 flex justify-center items-center rounded text-success bg-success/25">
                                <i className="mgc_group_line text-xl"></i>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h5 className="mb-1">Total Employees</h5>
                            <p>32</p>
                        </div>
                        <div>
                            <button className="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                <i className="mgc_more_2_fill text-xl"></i>
                            </button>

                            <div className="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                    Today
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                    Yesterday
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                    Last Week
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                    Last Month
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-1">
            <div className="card">
                <div className="p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 me-3">
                            <div className="w-12 h-12 flex justify-center items-center rounded text-info bg-info/25">
                                <i className="mgc_star_line text-xl"></i>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h5 className="mb-1">Project Reviews</h5>
                            <p>40</p>
                        </div>
                        <div>
                            <button className="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                <i className="mgc_more_2_fill text-xl"></i>
                            </button>

                            <div className="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                    Today
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                    Yesterday
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                    Last Week
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                    Last Month
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-1">
            <div className="card">
                <div className="p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 me-3">
                            <div className="w-12 h-12 flex justify-center items-center rounded text-warning bg-warning/25">
                                <i className="mgc_new_folder_line text-xl"></i>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h5 className="mb-1">New Projects</h5>
                            <p>25</p>
                        </div>
                        <div>
                            <button className="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                <i className="mgc_more_2_fill text-xl"></i>
                            </button>

                            <div className="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                    Today
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                    Yesterday
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                    Last Week
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                    Last Month
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 

    <div className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-6">
        <div className="2xl:col-span-2 md:col-span-2">
            <div className="card">
                <div className="p-6">
                    <div className="flex justify-between items-center">
                        <h4 className="card-title">Project Overview</h4>
                        <div>
                            <button className="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                <i className="mgc_more_2_fill text-xl"></i>
                            </button>

                            <div className="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                    Today
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="#!">
                                    Yesterday
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                    Last Week
                                </a>
                                <a className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#!">
                                    Last Month
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 items-center gap-4">
                        <div className="md:order-1 order-2">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <i className="mgc_round_fill h-10 w-10 flex justify-center items-center rounded-full bg-primary/25 text-lg text-primary"></i>
                                    </div>
                                    <div className="flex-grow ms-3">
                                        <h5 className="fw-semibold mb-1">Product Design</h5>
                                        <ul className="flex items-center gap-2">
                                            <li className="list-inline-item"><b>26</b> Total Projects</li>
                                            <li className="list-inline-item">
                                                <div className="w-1 h-1 rounded bg-gray-400"></div>
                                            </li>
                                            <li className="list-inline-item"><b>4</b> Employees</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <i className="mgc_round_fill h-10 w-10 flex justify-center items-center rounded-full bg-danger/25 text-lg text-danger"></i>
                                    </div>
                                    <div className="flex-grow ms-3">
                                        <h5 className="fw-semibold mb-1">Web Development</h5>
                                        <ul className="flex items-center gap-2">
                                            <li className="list-inline-item"><b>30</b> Total Projects</li>
                                            <li className="list-inline-item">
                                                <div className="w-1 h-1 rounded bg-gray-400"></div>
                                            </li>
                                            <li className="list-inline-item"><b>5</b> Employees</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <i className="mgc_round_fill h-10 w-10 flex justify-center items-center rounded-full bg-success/25 text-lg text-success"></i>
                                    </div>
                                    <div className="flex-grow ms-3">
                                        <h5 className="fw-semibold mb-1">Illustration Design</h5>
                                        <ul className="flex items-center gap-2">
                                            <li className="list-inline-item"><b>12</b> Total Projects</li>
                                            <li className="list-inline-item">
                                                <div className="w-1 h-1 rounded bg-gray-400"></div>
                                            </li>
                                            <li className="list-inline-item"><b>3</b> Employees</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <i className="mgc_round_fill h-10 w-10 flex justify-center items-center rounded-full bg-warning/25 text-lg text-warning"></i>
                                    </div>
                                    <div className="flex-grow ms-3">
                                        <h5 className="fw-semibold mb-1">UI/UX Design</h5>
                                        <ul className="flex items-center gap-2">
                                            <li className="list-inline-item"><b>8</b> Total Projects</li>
                                            <li className="list-inline-item">
                                                <div className="w-1 h-1 rounded bg-gray-400"></div>
                                            </li>
                                            <li className="list-inline-item"><b>4</b> Employees</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:order-2 order-1">
                            <div id="project-overview-chart" className="apex-charts" data-colors="#3073F1,#ff679b,#0acf97,#ffbc00"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-1">
            <div className="card">
                <div className="card-header">
                    <div className="flex justify-between items-center">
                        <h4 className="card-title">Daily Task</h4>
                        <div>
                            <select className="form-input form-select-sm">
                                <option defaultValue={'1'}>Today</option>
                                <option value="1">Yesterday</option>
                                <option value="2">Tomorrow</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <div className="px-6" data-simplebar style={{ maxHeight: '304px' }}>
                        <div className="space-y-4">
                            <div className="border border-gray-200 dark:border-gray-700 rounded p-2">
                                <ul className="flex items-center gap-2 mb-2">
                                    <a href="#!" className="text-base text-gray-600 dark:text-gray-400">Landing Page Design</a>
                                    <i className="mgc_round_fill text-[5px]"></i>
                                    <h5 className="text-sm font-semibold">2 Hrs ago</h5>
                                </ul>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Create a new landing page (Saas Product)</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm"><i className="mgc_group_line text-xl me-1 align-middle"></i> <b>5</b> People</p>
                            </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded p-2">
                                <ul className="flex items-center gap-2 mb-2">
                                    <a href="#!" className="text-base text-gray-600 dark:text-gray-400">Admin Dashboard</a>
                                    <i className="mgc_round_fill text-[5px]"></i>
                                    <h5 className="text-sm font-semibold">3 Hrs ago</h5>
                                </ul>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Create a new Admin dashboard</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm"><i className="mgc_group_line text-xl me-1 align-middle"></i> <b>2</b> People</p>
                            </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded p-2">
                                <ul className="flex items-center gap-2 mb-2">
                                    <a href="#!" className="text-base text-gray-600 dark:text-gray-400">Client Work</a>
                                    <i className="mgc_round_fill text-[5px]"></i>
                                    <h5 className="text-sm font-semibold">5 Hrs ago</h5>
                                </ul>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Create a new Power Project (Sktech design)</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm"><i className="mgc_group_line text-xl me-1 align-middle"></i> <b>2</b> People</p>
                            </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded p-2">
                                <ul className="flex items-center gap-2 mb-2">
                                    <a href="#!" className="text-base text-gray-600 dark:text-gray-400">UI/UX Design</a>
                                    <i className="mgc_round_fill text-[5px]"></i>
                                    <h5 className="text-sm font-semibold">6 Hrs ago</h5>
                                </ul>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Create a new UI Kit in figma</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm"><i className="mgc_group_line text-xl me-1 align-middle"></i> <b>3</b> People</p>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="animate-spin flex">
                                    <i className="mgc_loading_2_line text-xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-1">
            <div className="card">
                <div className="card-header flex justify-between items-center">
                    <h4 className="card-title">Team Members</h4>
                    <div>
                        <select className="form-select form-select-sm">
                            <option  defaultValue={""}>Active</option>
                            <option value="1">Offline</option>
                        </select>
                    </div>
                </div>

                <div className="py-6">
                    <div className="px-6" data-simplebar style={{ maxHeight: '304px' }}>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <img className="me-3 rounded-full" src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" width="40" alt="Generic placeholder image"/>
                                <div className="w-full overflow-hidden">
                                    <h5 className="font-semibold"><a href="#!" className="text-gray-600 dark:text-gray-400">Risa Pearson</a></h5>
                                    <div className="flex items-center gap-2">
                                        <div>UI/UX Designer</div>
                                        <i className="mgc_round_fill text-[5px]"></i>
                                        <div>2.5 Year Experience</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img className="me-3 rounded-full" src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" width="40" alt="Generic placeholder image"/>
                                <div className="w-full overflow-hidden">
                                    <h5 className="font-semibold"><a href="#!" className="text-gray-600 dark:text-gray-400">Margaret D. Evans</a></h5>
                                    <div className="flex items-center gap-2">
                                        <div>PHP Developer</div>
                                        <i className="mgc_round_fill text-[5px]"></i>
                                        <div>2 Year Experience</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img className="me-3 rounded-full" src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" width="40" alt="Generic placeholder image"/>
                                <div className="w-full overflow-hidden">
                                    <h5 className="font-semibold"><a href="#!" className="text-gray-600 dark:text-gray-400">Bryan J. Luellen</a></h5>
                                    <div className="flex items-center gap-2">
                                        <div>Front end Developer</div>
                                        <i className="mgc_round_fill text-[5px]"></i>
                                        <div>1 Year Experience</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img className="me-3 rounded-full" src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" width="40" alt="Generic placeholder image"/>
                                <div className="w-full overflow-hidden">
                                    <h5 className="font-semibold"><a href="#!" className="text-gray-600 dark:text-gray-400">Kathryn S. Collier</a></h5>
                                    <div className="flex items-center gap-2">
                                        <div>UI/UX Designer</div>
                                        <i className="mgc_round_fill text-[5px]"></i>
                                        <div>3 Year Experience</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img className="me-3 rounded-full" src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" width="40" alt="Generic placeholder image"/>
                                <div className="w-full overflow-hidden">
                                    <h5 className="font-semibold"><a href="#!" className="text-gray-600 dark:text-gray-400">Timothy Kauper</a></h5>
                                    <div className="flex items-center gap-2">
                                        <div>Backend Developer</div>
                                        <i className="mgc_round_fill text-[5px]"></i>
                                        <div>2 Year Experience</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img className="me-3 rounded-full" src="https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg" width="40" alt="Generic placeholder image"/>
                                <div className="w-full overflow-hidden">
                                    <h5 className="font-semibold"><a href="#!" className="text-gray-600 dark:text-gray-400">Zara Raws</a></h5>
                                    <div className="flex items-center gap-2">
                                        <div>Python Developer</div>
                                        <i className="mgc_round_fill text-[5px]"></i>
                                        <div>1 Year Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 


        </AuthenticatedLayout>
    );
}
