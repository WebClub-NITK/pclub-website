import React from 'react'
import Tabs from '../../components/tabs'
import { TeamShowcase } from '../../components/team/team_showcase'
import SearchBar from "../../components/searchbar/index"
const PortfolioPage = () => {
  return (
    <>
        {/* top most section  */}
        <div className="mt-11 flex flex-col justify-center items-center gap-y-4 px-4 sm:px-6 lg:px-8">
          <SearchBar/>
          <span className="text-center font-bold text-3xl border-[1.2px] border-black rounded-full px-4 py-2 w-auto sm:text-4xl lg:text-5xl">
            Meet our team
          </span>
          <span className="text-md opacity-60 sm:text-lg lg:text-xl lg:max-w-2xl text-center">
            Meet our diverse team of class photographers, designers
          </span>
        </div>


        {/* tabs part  */}
        <div className='mt-11'>
          <Tabs/>
        </div>

        {/* team showcase section  */}
        <div>
          <TeamShowcase />
        </div>
    </>
  )
}

export default PortfolioPage