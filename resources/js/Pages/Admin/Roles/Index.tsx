import React, { FormEvent, lazy, Suspense, useState } from 'react';
import { Role, RolesIndexProps } from '@/types';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Loader } from 'lucide-react';
import RolesTable from './RolesTable';

const CategoriesTable = lazy(
    () => import("../Categories/CategoriesTable"),
   );

const RolesIndex: React.FC<RolesIndexProps> = ({ roles, categories, auth }) => {

    return (
        <Authenticated>
            

        <div className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-6">
        <div className="2xl:col-span-2 md:col-span-2">
            <div className="card">
            <div className="card-header flex justify-between items-center">
                    <h4 className="card-title">Roles</h4>
                </div>
                <div className="">
                    <div className="">
                        <h4 className="card-title"></h4>
                        <RolesTable roles={roles} auth={auth} />
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-2">
            <div className="card">
                <div className="card-header flex justify-between items-center">
                    <h4 className="card-title">Product Categories</h4>
                    <div>
                        <select className="form-select form-select-sm">
                            <option selected>Active</option>
                            <option value="1">Offline</option>
                        </select>
                    </div>
                </div>

                <Suspense fallback={<Loader className="mx-auto" size={20} />}>
                    <CategoriesTable categories={categories || []} />
                </Suspense>
            </div>
        </div>
    </div> 
        </Authenticated>
    );
};

export default RolesIndex;