import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default ({ cases, setCases, currentCase, setCurrentCase }) => {
  return (
    <div className="w-full">
      <div className="tabs">
        {cases.map((theCase, i) => (
          <div
            className={clsx(
              "tab tab-lifted flex space-x-2",
              i == currentCase && "tab-active"
            )}
          >
            <a onClick={() => setCurrentCase(i)}>Case {i}</a>
            <a
              className="hover:bg-slate-200 rounded-full"
              onClick={() => {
                setCases(cases.filter((_: any, j: number) => j != i));
                setCurrentCase(0);
              }}
            >
              <XMarkIcon className="h-3.5" />
            </a>
          </div>
        ))}
        <button className="tab tab-lifted">
          <PlusIcon
            className="h-4"
            onClick={() => {
              setCases([...cases, cases[cases.length - 1]]);
              setCurrentCase(cases.length);
            }}
          />
        </button>
      </div>

      <div className="pt-5 px-2">
        <span className="text-sm">Input:</span>
        <div className="flex items-center space-x-4">
          <textarea
            className="textarea textarea-bordered w-full max-w-xs"
            rows={1}
          />{" "}
          <PlusIcon className="h-4" />
        </div>
        <span className="text-sm">Output:</span>
        <div className="flex items-center space-x-4">
          <textarea
            className="textarea textarea-bordered w-full max-w-xs"
            rows={1}
          />
          <PlusIcon className="h-4" />
        </div>
      </div>
    </div>
  );
};
