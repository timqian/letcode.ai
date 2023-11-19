import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default ({ active }: { active: boolean }) => {
  return (
    <div className="relative group">
      <button className={clsx("btn btn-sm", !active && "btn-ghost")}>
        Case
      </button>
      <button className="absolute -top-1 -right-1 bg-gray-400 hover:bg-gray-500 rounded-full text-white text-xs opacity-0 group-hover:opacity-100">
        <XMarkIcon className="h-3" />
      </button>
    </div>
  );
};
