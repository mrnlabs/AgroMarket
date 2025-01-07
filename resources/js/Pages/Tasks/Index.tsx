import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Task } from '@/types';
import { router } from '@inertiajs/react';
import { format } from 'date-fns';
import { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';

export default function KanbanBoard({
  dcompletedTasks = [] as Task[],
  dinProgressTasks = [] as Task[],
  donHoldTasks = [] as Task[],
  dcancelledTasks = [] as Task[],
}) {
  const in_progress = useRef(null);
  const cancelledRef = useRef(null);
  const on_hold = useRef(null);
  const doneRef = useRef(null);

  useEffect(() => {
    const refs = [in_progress, cancelledRef, on_hold, doneRef];
    const sortables = []; // To store Sortable instances

    refs.forEach((ref) => {
      if (ref.current) {
        const sortable = new Sortable(ref.current, {
          group: 'shared',
          animation: 150,
          onEnd: (evt) => {
            const draggedTaskId = evt.item.dataset.id; // Get the ID of the dragged task
            const fromColumn = evt.from.id; // Get the original column ID
            const toColumn = evt.to.id; // Get the new column ID
             console.log(draggedTaskId)
            if (fromColumn !== toColumn) {
              router.post(
                route('tasks.updateStatus', draggedTaskId),
                { status: toColumn },
                {
                  preserveScroll: true,
                  preserveState: true,
                  onSuccess: () => {
                    console.log('Task updated successfully');
                  },
                  onError: () => {
                    console.error('Failed to update task');
                  },
                }
              );
            }
          },
        });

        sortables.push(sortable);
      }
    });

    // Cleanup: Destroy Sortable instances on component unmount
    return () => {
      sortables.forEach((sortable) => sortable.destroy());
    };
  }, []);

  return (
    <Authenticated>
      <div className="h-full w-full p-6">
        <div className="grid grid-cols-4 gap-3">
          <div
            id="in_progress"
            ref={in_progress}
            className="flex flex-col flex-shrink-0  border rounded-md overflow-hidden border-gray-200 "
          >
            <div className="flex items-center flex-shrink-0 h-10 p-4 bg-white">
              <span className="block text-sm font-semibold uppercase">In Progress</span>
            </div>
            {dinProgressTasks.map((task) => (
              <div key={task.id} data-id={task.id} className="card p-4 mt-3 cursor-pointer ">
			  <div className="flex justify-between items-center">
				<h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-danger bg-danger/25 rounded-full">{task.title}</h4>
				<div className="text-xs">{format(new Date(task.created_at), 'dd MMM yyyy')}</div>
			  </div>
			  <h4 className="mt-3 text-sm">{task.description}</h4>
			  <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
				<div className="flex items-center">
				  <i className="mgc_chat_3_line text-base"></i>
				  <span className="ms-1 leading-none">12</span>
				</div>
				<div className="flex items-center ms-4">
				  <i className="mgc_attachment_line rotate-45 text-base"></i>
				  <span className="ms-1 leading-none">12</span>
				</div>
				<img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-8.jpg" />
			  </div>
			</div>
            ))}
          </div>

        

          <div
            id="on_hold"
            ref={on_hold}
            className="flex flex-col flex-shrink-0  border rounded-md overflow-hidden border-gray-200"
          >
            <div className="flex items-center flex-shrink-0 h-10 p-4 bg-white">
              <span className="block text-sm font-semibold uppercase">On Hold</span>
            </div>
            {donHoldTasks.map((task) => (
              <div key={task.id} data-id={task.id} className="card p-4 mt-3 cursor-pointer space-y-3">
			  <div className="flex justify-between items-center">
				<h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-danger bg-danger/25 rounded-full">{task.title}</h4>
				<div className="text-xs">{format(new Date(task.created_at), 'dd MMM yyyy')}</div>
			  </div>
			  <h4 className="mt-3 text-sm">{task.description}</h4>
			  <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
				<div className="flex items-center">
				  <i className="mgc_chat_3_line text-base"></i>
				  <span className="ms-1 leading-none">12</span>
				</div>
				<div className="flex items-center ms-4">
				  <i className="mgc_attachment_line rotate-45 text-base"></i>
				  <span className="ms-1 leading-none">12</span>
				</div>
				<img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-8.jpg" />
			  </div>
			</div>
            ))}
          </div>

          <div
            id="done"
            ref={doneRef}
            className="flex flex-col flex-shrink-0  border rounded-md overflow-hidden border-gray-200"
          >
            <div className="flex items-center flex-shrink-0 h-10 p-4 bg-white">
              <span className="block text-sm font-semibold uppercase">Done</span>
            </div>
            {dcompletedTasks.map((task) => (
              <div key={task.id} data-id={task.id} className="card p-4 mt-3 cursor-pointer space-y-3">
			  <div className="flex justify-between items-center">
				<h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-danger bg-danger/25 rounded-full">{task.title}</h4>
				<div className="text-xs">{format(new Date(task.created_at), 'dd MMM yyyy')}</div>
			  </div>
			  <h4 className="mt-3 text-sm">{task.description}</h4>
			  <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
				<div className="flex items-center">
				  <i className="mgc_chat_3_line text-base"></i>
				  <span className="ms-1 leading-none">12</span>
				</div>
				<div className="flex items-center ms-4">
				  <i className="mgc_attachment_line rotate-45 text-base"></i>
				  <span className="ms-1 leading-none">12</span>
				</div>
				<img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-8.jpg" />
			  </div>
			</div>
            ))}
          </div>

          <div
            id="cancelled"
            ref={cancelledRef}
            className="flex flex-col flex-shrink-0  border rounded-md overflow-hidden border-gray-200"
          >
            <div className="flex items-center flex-shrink-0 h-10 p-4 bg-white">
              <span className="block text-sm font-semibold uppercase">Cancelled</span>
            </div>
            {dcancelledTasks.map((task) => (
             <div key={task.id} data-id={task.id} className="card p-4 mt-3 cursor-pointer space-y-3">
			 <div className="flex justify-between items-center">
			   <h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-danger bg-danger/25 rounded-full">{task.title}</h4>
			   <div className="text-xs">{format(new Date(task.created_at), 'dd MMM yyyy')}</div>
			 </div>
			 <h4 className="mt-3 text-sm">{task.description}</h4>
			 <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
			   <div className="flex items-center">
				 <i className="mgc_chat_3_line text-base"></i>
				 <span className="ms-1 leading-none">12</span>
			   </div>
			   <div className="flex items-center ms-4">
				 <i className="mgc_attachment_line rotate-45 text-base"></i>
				 <span className="ms-1 leading-none">12</span>
			   </div>
			   <img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-8.jpg" />
			 </div>
		   </div>
            ))}
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
