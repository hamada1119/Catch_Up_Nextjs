import Link from "next/link";
import { FaPen } from "react-icons/fa";

interface TaskEditButtonProps {
    id: string;
}

const TaskEditButton: React.FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <Link href={`/edit/${id}`}>
        <FaPen className='hover:text-gray text-lg cursor-pointer' />
    </Link>
  )
}

export default TaskEditButton