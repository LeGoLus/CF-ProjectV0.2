import {Input} from "../components/ui/input";


export default function Search() {
  return (
    <div className="text-3xl text-black ">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[1000px] lg:w-[300px]"
      />
    </div>
  )

  }