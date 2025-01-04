import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Task } from '@/types';
import React, { useEffect, useState } from 'react'
import { ReactSortable, Sortable, SortableEvent } from "react-sortablejs";

export default function Index() {

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Task 1', description: 'Description 1', created_at: '2023-07-13', updated_at: '2023-07-13' },
        { id: 2, title: 'Task 2', description: 'Description 2', created_at: '2023-07-13', updated_at: '2023-07-13' },
        { id: 3, title: 'Task 3', description: 'Description 3', created_at: '2023-07-13', updated_at: '2023-07-13' },
        { id: 4, title: 'Task 4', description: 'Description 4', created_at: '2023-07-13', updated_at: '2023-07-13' },
        { id: 5, title: 'Task 5', description: 'Description 5', created_at: '2023-07-13', updated_at: '2023-07-13' },
        { id: 6, title: 'Task 6', description: 'Description 6', created_at: '2023-07-13', updated_at: '2023-07-13' },
        { id: 7, title: 'Task 7', description: 'Description 7', created_at: '2023-07-13', updated_at: '2023-07-13' },
      ]);

      // State for completed tasks
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const handleMove = (evt: SortableEvent, sortable: Sortable | null, store: any) => {
    // Safely extract necessary information
    const fromColumn = evt.from.id;
    const toColumn = evt.to.id;
    const oldIndex = evt.oldIndex ?? -1;
    const newIndex = evt.newIndex ?? -1;

    if (fromColumn === 'tasks-column' && toColumn === 'completed-column' && oldIndex !== -1) {
      // Moving from tasks to completed
      const movedTask = tasks[oldIndex];
      
      // Remove from tasks
      const newTasks = [...tasks];
      newTasks.splice(oldIndex, 1);
      setTasks(newTasks);

      // Add to completed tasks
      setCompletedTasks([...completedTasks, { ...movedTask, updated_at: new Date().toISOString().split('T')[0] }]);
    } else if (fromColumn === 'completed-column' && toColumn === 'tasks-column' && oldIndex !== -1) {
      // Moving from completed back to tasks
      const movedTask = completedTasks[oldIndex];
      
      // Remove from completed tasks
      const newCompletedTasks = [...completedTasks];
      newCompletedTasks.splice(oldIndex, 1);
      setCompletedTasks(newCompletedTasks);

      // Add back to tasks
      setTasks([...tasks, { ...movedTask, updated_at: new Date().toISOString().split('T')[0] }]);
    }
  };
  return (
    <Authenticated>
<div className="grid h-full w-full">
	<div className="overflow-hidden text-gray-700 dark:text-slate-400">
		<div className="flex overflow-x-auto custom-scroll gap-6 pb-4">
			<div className="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700">
				<div className="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800">
					<span className="block text-sm font-semibold uppercase">In progress (6)</span>
				</div>
				
                <ReactSortable 
                className="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll" id="kanbanborad-two"
                list={tasks} 
                setList={setTasks}
                group="task-group"
                onEnd={handleMove}
                >
                    {tasks.map((task) => (
                        <div className="card p-4 cursor-pointer space-y-3">
						<div className="flex justify-between items-center">
							<h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-danger bg-danger/25 rounded-full">{task.title}</h4>
							<div className="text-xs">{task.created_at}</div>
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
							<img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-8.jpg"/>
						</div>
					</div>
                    ))}
                    </ReactSortable>
			</div>


			<div className="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700">
				<div className="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800">
					<span className="block text-sm font-semibold uppercase">Pending (6)</span>
				</div>
				<div className="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll" id="kanbanborad-one">
					
                <ReactSortable
                id="completed-column"
                list={completedTasks}
                setList={setCompletedTasks}
                group="task-group"
                onEnd={handleMove}
                className="space-y-4"
                >
                {completedTasks.map((task) => (
                <div key={task.id} className="card p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                    <h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-info bg-info/25 rounded-full">{task.title}</h4>

                    <div className="text-xs">{task.updated_at}</div>
                </div>

                <h4 className="mt-3 text-sm">{task.description}</h4>
                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div className="flex items-center">
                        <i className="mgc_chat_3_line text-base"></i>
                        <span className="ms-1 leading-none">6</span>
                    </div>
                    <div className="flex items-center ms-4">
                        <i className="mgc_attachment_line rotate-45 text-base"></i>
                        <span className="ms-1 leading-none">7</span>
                    </div>
                    <img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-4.jpg"/>
                </div>
            </div>
                ))}
                </ReactSortable>
                

				</div>
			</div>

			<div className="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700">
				<div className="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800">
					<span className="block text-sm font-semibold uppercase">On Hold: (6)</span>
				</div>
				<div className="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll" id="kanbanborad-three">

					<ReactSortable 
					id="onhold-column"
					list={completedTasks}
					setList={setCompletedTasks}
					group="task-group"
					onEnd={handleMove}
					className="card p-4 cursor-pointer">
						{completedTasks.map((task) => (
						 <div key={task.id} className="card p-4 cursor-pointer">
							<div className="flex justify-between items-center">
								<h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-info bg-info/25 rounded-full">{task.title}</h4>

								<div className="text-xs">{task.updated_at}</div>
							</div>

							<h4 className="mt-3 text-sm">{task.description}</h4>
							<div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
								<div className="flex items-center">
									<i className="mgc_chat_3_line text-base"></i>
									<span className="ms-1 leading-none">6</span>
								</div>
								<div className="flex items-center ms-4">
									<i className="mgc_attachment_line rotate-45 text-base"></i>
									<span className="ms-1 leading-none">7</span>
								</div>
								<img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-4.jpg"/>
							</div>
						</div>
					))}
					</ReactSortable>

					<div className="card p-4 cursor-pointer">
						<div className="flex justify-between items-center">
							<h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-danger bg-danger/25 rounded-full">Design</h4>

							<div className="text-xs">15 Jul 2023</div>
						</div>

						<h4 className="mt-3 text-sm">Code HTML email template</h4>
						<div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
							<div className="flex items-center">
								<i className="mgc_chat_3_line text-base"></i>
								<span className="ms-1 leading-none">24</span>
							</div>
							<div className="flex items-center ms-4">
								<i className="mgc_attachment_line rotate-45 text-base"></i>
								<span className="ms-1 leading-none">15</span>
							</div>
							<img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-4.jpg"/>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700">
				<div className="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800">
					<span className="block text-sm font-semibold uppercase">Done (1)</span>
				</div>
				<div className="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll" id="kanbanborad-four">
					<div className="card p-4 cursor-pointer">
						<div className="flex justify-between items-center">
							<h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-sky-500 bg-sky-500/25 rounded-full">App</h4>

							<div className="text-xs">16 Jul 2023</div>
						</div>

						<h4 className="mt-3 text-sm">Brand logo design</h4>
						<div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
							<div className="flex items-center">
								<i className="mgc_chat_3_line text-base"></i>
								<span className="ms-1 leading-none">34</span>
							</div>
							<div className="flex items-center ms-4">
								<i className="mgc_attachment_line rotate-45 text-base"></i>
								<span className="ms-1 leading-none">16</span>
							</div>
							<img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-6.jpg"/>
						</div>
					</div>

					<div className="card p-4 cursor-pointer">
						<div className="flex justify-between items-center">
							<h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-danger bg-danger/25 rounded-full">Design</h4>

							<div className="text-xs">15 Jul 2023</div>
						</div>

						<h4 className="mt-3 text-sm">Improve animation loader</h4>
						<div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
							<div className="flex items-center">
								<i className="mgc_chat_3_line text-base"></i>
								<span className="ms-1 leading-none">2</span>
							</div>
							<div className="flex items-center ms-4">
								<i className="mgc_attachment_line rotate-45 text-base"></i>
								<span className="ms-1 leading-none">15</span>
							</div>
							<img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-9.jpg"/>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700">
				<div className="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800">
					<span className="block text-sm font-semibold uppercase">Cancelled (1)</span>
				</div>
				<div className="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll" id="kanbanborad-five">
					<div className="card p-4 cursor-pointer">
						<div className="flex justify-between items-center">
							<h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-success bg-success/25 rounded-full">Web</h4>

							<div className="text-xs">16 Jul 2023</div>
						</div>

						<h4 className="mt-3 text-sm">Dashboard design</h4>
						<div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
							<div className="flex items-center">
								<i className="mgc_chat_3_line text-base"></i>
								<span className="ms-1 leading-none">14</span>
							</div>
							<div className="flex items-center ms-4">
								<i className="mgc_attachment_line rotate-45 text-base"></i>
								<span className="ms-1 leading-none">5</span>
							</div>
							<img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-2.jpg"/>
						</div>
					</div>

					<div className="card p-4 cursor-pointer">
						<div className="flex justify-between items-center">
							<h4 className="flex justify-between items-center h-6 px-3 text-xs font-semibold text-amber-500 bg-amber-500/25 rounded-full">Testing</h4>

							<div className="text-xs">17 Jul 2023</div>
						</div>

						<h4 className="mt-3 text-sm">Banner Design for FB & Twitter</h4>
						<div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
							<div className="flex items-center">
								<i className="mgc_chat_3_line text-base"></i>
								<span className="ms-1 leading-none">9</span>
							</div>
							<div className="flex items-center ms-4">
								<i className="mgc_attachment_line rotate-45 text-base"></i>
								<span className="ms-1 leading-none">41</span>
							</div>
							<img className="w-6 h-6 ms-auto rounded-full" src="/images/users/avatar-7.jpg"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </Authenticated>
  )
}
