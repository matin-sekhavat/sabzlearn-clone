import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchInput() {
  return (
    <div className=" rounded-2xl  relative h-12 ">
      <input
        type="text"
        placeholder="چی میخوای یاد بگیری؟"
        className=" outline-none bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white   rounded-full pr-4 pl-12 text-sm font-semibold  w-full h-full"
      />
      <button className="absolute left-4 h-full  w-6  my-auto text-slate-500 dark:text-white">
        <FaMagnifyingGlass />
      </button>
    </div>
  );
}

export default SearchInput;
