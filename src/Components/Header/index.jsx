import { HeaderLeft } from "./Components/HeaderLeft/index"
import { HeaderRight } from "./Components/HeaderRight/index"

export const Header = () => {
  return (
    <>
      <div className="w-[100%] lg:flex lg:flex-row md:flex md:flex-col">
      <HeaderLeft></HeaderLeft>
      <HeaderRight></HeaderRight>
      </div>
    </>
  )
}
