import Image from "next/image";
import Saju from "../Saju";
import SpeechBubble from "../SpeechBubble";
import bubbleTop from '@/assets/images/4.svg';
import bubbleBottom from '@/assets/images/5.svg';
import first from "@/assets/images/1.svg"
import second from "@/assets/images/2.svg"
import third from "@/assets/images/3.svg"

export default function IndexPage() {
    return (
        <div className="w-full mb-20">
            <div className="relative">
                <Image className="w-full" src={first} alt="" style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 90%) ',
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 90%)',
                }} />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/90 to-transparent" />
                <SpeechBubble
                    className="top-[80%]"
                    src={bubbleTop}
                    width={257}
                    height={181}
                    text={"이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요."}
                    textClassName="-translate-y-1/3"
                />
            </div>

            <div className="relative mt-20">
                <Image className="w-full pr-8" src={second} alt="" />
                <SpeechBubble
                    className="top-[80%] z-10"
                    src={bubbleBottom}
                    width={281}
                    height={181}
                    text={"제가 oo님의 사주를\n보기 쉽게 표로 정리했어요"}
                    textClassName="-translate-y-4/5"
                />
            </div>

            <div className="relative mt-10">
                <Image
                    className="w-full"
                    src={third}
                    alt=""
                    style={{
                        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 90%)',
                        maskImage: 'linear-gradient(to bottom, black 70%, transparent 90%)',
                    }}
                />
            </div>
            <Saju className="z-20" />
        </div>
    )
}