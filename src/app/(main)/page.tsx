import Link from "next/link";
import Image from "next/image";
import { MdAddTask } from "react-icons/md";
import TaskCard from "@/components/TaskCard/TaskCard";

export default function MainPage() {
  return ( 
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">All Tasks</h1>
        <Link href='/new' className="flex items-center gap-1 font-semibold border px-4
        py-2 rounded-full shadow-sm text-white hover:bg-gray-700 bg-gray-800 ">
          <MdAddTask className="size-5"/>
          <div>Add Task</div>
        </Link>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        <TaskCard />
      </div>
    </div>
  );
}
