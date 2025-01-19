import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function ScrollButtons({ onScroll, currentIndex, totalImages }) {
    return (
        <div className="flex flex-row gap-3">
            <button
                onClick={() => onScroll('prev')}
                disabled={currentIndex === 0}
                className={`w-[25px] h-[25px] flex items-center justify-center text-complementPrimary text-[14px] ${currentIndex === 0 ? 'bg-secondary' : 'bg-tertiary'} rounded-full`}
            >
                <IoIosArrowBack size={16} />
            </button>
            <button
                onClick={() => onScroll('next')}
                disabled={currentIndex === totalImages - 1}
                className={`w-[25px] h-[25px] flex items-center justify-center text-complementPrimary text-[14px] ${currentIndex === totalImages - 1 ? 'bg-secondary' : 'bg-tertiary'} rounded-full`}
            >
                <IoIosArrowForward size={16} />
            </button>
        </div>
    )
}

export default ScrollButtons