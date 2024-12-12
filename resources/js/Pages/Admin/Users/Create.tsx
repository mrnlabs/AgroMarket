import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'
import { Trash2 } from 'lucide-react'
import React from 'react'


export default function Create() {
  return (
    <Authenticated>
<div className="grid lg:grid-cols-4 gap-6">
        <div className="col-span-1 flex flex-col gap-6">
            <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="card-title">Add Avatar Images</h4>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                        <i className="mgc_add_line"></i>
                    </div>
                </div>

                <form action="#" className="dropzone text-gray-700 dark:text-gray-300 h-52">
                    <div className="fallback">
                        <input name="file" type="file" multiple={true}/>
                    </div>
                    <div className="dz-message needsclick w-full h-full flex items-center justify-center">
                        <i className="mgc_pic_2_line text-8xl"></i>
                    </div>
                </form>

                <div className=""></div>
            </div>

            <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Team Members</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                        <i className="mgc_compass_line"></i>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="">
                        <label htmlFor="select-label-catagory" className="mb-2 block">Catagory</label>
                        <select id="select-label-catagory" className="form-select">
                            <option defaultValue="">Select</option>
                            <option>Mary Scott</option>
                            <option>Holly Campbell</option>
                            <option>Mary Scott</option>
                            <option>Melinda Gills</option>
                            <option>Linda Garza</option>
                        </select>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex -space-x-2">
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-700" src="/images/users/user-9.jpg" alt="Image Description"/>
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-700" src="/images/users/user-8.jpg" alt="Image Description"/>
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-700" src="/images/users/user-7.jpg" alt="Image Description"/>
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-700" src="/images/users/user-6.jpg" alt="Image Description"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
            <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="card-title">Genrel Product Data</p>
                    <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 w-9 h-9">
                        <i className="mgc_transfer_line"></i>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="">
                        <label htmlFor="project-name" className="mb-2 block">Project Name</label>
                        <input type="email" id="project-name" className="form-input" placeholder="Enter Title" aria-describedby="input-helper-text"/>
                    </div>

                    <div className="">
                        <label htmlFor="project-description" className="mb-2 block">Project Description
                            <span className="text-red-500">*</span>
                        </label>
                        <textarea id="project-description" className="form-input" rows={8}></textarea>
                    </div>


                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="">
                            <label htmlFor="start-date" className="mb-2 block">Start Date</label>
                            <input type="date" id="start-date" className="form-input"></input>
                        </div>

                        <div className="">
                            <label htmlFor="due-date" className="mb-2 block">Due Date</label>
                            <input type="date" id="due-date" className="form-input"></input>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="select-label" className="mb-2 block">Label</label>
                        <select id="select-label" className="form-select">
                            <option defaultValue="0">Open this select menu</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Low</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="budget" className="mb-2 block">Budget</label>
                        <input type="text" id="budget" className="form-input" placeholder="Enter Project Budget"></input>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-4 mt-5">
                <div className="flex justify-end gap-3">
                    <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none">
                        Cancle
                    </button>
                    <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</Authenticated>
  )
}
