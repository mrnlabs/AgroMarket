import React, { FormEvent, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Role, RolesIndexProps } from '@/types';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Loader, SquarePen, Trash2 } from 'lucide-react';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Button } from '@/Components/ui/button';
import RolesTable from './RolesTable';

const RolesIndex: React.FC<RolesIndexProps> = ({ roles, auth }) => {

    return (
        <Authenticated>
            

        <div className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-6">
        <div className="2xl:col-span-2 md:col-span-2">
            <div className="card">
                <div className="p-6">
                    <div className="">
                        <h4 className="card-title">Roles</h4>
                        <RolesTable roles={roles} auth={auth} />
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
                                <option selected>Today</option>
                                <option value="1">Yesterday</option>
                                <option value="2">Tomorrow</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <div className="px-6 overflow-y-scroll" data-simplebar style={{maxHeight: "304px"}}>
                        <div className="space-y-4">
                        {/* <RolesTable roles={roles} auth={auth} /> */}
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
                            <option selected>Active</option>
                            <option value="1">Offline</option>
                        </select>
                    </div>
                </div>

                <div className="py-6">
                    <div className="px-6 overflow-y-auto" data-simplebar style={{maxHeight: "304px"}}>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <img className="me-3 rounded-full" src="/images/users/avatar-1.jpg" width="40" alt="Generic placeholder image"/>
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
                                <img className="me-3 rounded-full" src="/images/users/avatar-2.jpg" width="40" alt="Generic placeholder image"/>
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
                                <img className="me-3 rounded-full" src="/images/users/avatar-3.jpg" width="40" alt="Generic placeholder image"/>
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
                                <img className="me-3 rounded-full" src="/images/users/avatar-4.jpg" width="40" alt="Generic placeholder image"/>
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
                                <img className="me-3 rounded-full" src="/images/users/avatar-5.jpg" width="40" alt="Generic placeholder image"/>
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
                                <img className="me-3 rounded-full" src="/images/users/avatar-6.jpg" width="40" alt="Generic placeholder image"/>
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
        </Authenticated>
    );
};

export default RolesIndex;