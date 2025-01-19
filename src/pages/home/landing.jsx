import landingImg from "../../assets/images/landing.png"
import { Squircle } from 'corner-smoothing'
import { ReactTyped } from "react-typed";
import { FiCamera } from "react-icons/fi";

function Landing({ onJoin, specialNotices }) {
    return (
        <div>
            <div className="relative drop-shadow-xl">
                <Squircle
                    bottomRightCornerRadius={60}
                    bottomLeftCornerRadius={60}
                    cornerSmoothing={1}
                    preserveSmoothing={true}
                >
                    <img src={landingImg} alt="landing" className="w-full h-[430px] top-[100px] object-cover" />
                </Squircle>
                <div className="absolute h-[430px] inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-black text-[50px] font-light text-center leading-[0.9] drop-shadow-[0_0px_3px_rgba(255,255,255,1)]">
                        The best place to <span className="text-red-600 font-playfair italic">Focus</span> on<br />your <span className="text-red-600 font-playfair italic">Craft</span>
                    </h1>
                    <p className="pt-4 px-2  max-w-[400px] text-center text-black text-[16px] font-light">
                        A community at NITK where you can show the world from your perspective.
                    </p>
                    <button onClick={onJoin} className="max-w-[200px] bg-black text-white text-[14px] px-4 py-2 rounded-[8px] mt-4 hover:bg-red-400 transition-all duration-200 hover:drop-shadow-xl">
                        <span className="flex justify-center items-center gap-2">
                            Join the community <FiCamera />
                        </span >
                    </button>
                    <p className="pt-5 px-1 max-w-[400px] text-center font-bold text-[14px]">
                        <ReactTyped
                            strings={specialNotices}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                            className="p-1 px-2 rounded-[10px] bg-gray-200 text-black"
                        />
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Landing