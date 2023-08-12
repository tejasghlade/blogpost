import Button from "@/components/Button";
import Post from "@/components/Post";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid col-row-2">
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        <div className="col-span-2 p-5">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-pink text-base font-medium uppercase leading-7 tracking-widest">
              Recently Published
            </div>
            <div className="flex flex-col gap-5">
              {/* blog lists  */}
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>

        {/* other side */}
        <div className="p-5 col-span-1">
          <div className="flex-col justify-start items-start gap-14 inline-flex">
            <div className="flex flex-col gap-5">
              <div className="text-pink text-base font-medium uppercase leading-7 tracking-widest">
                Top Categories
              </div>
              <div className="flex flex-wrap gap-2">
                <Button label={"React"} />
                <Button label={"Animation"} />
                <Button label={"CSS"} />
                <Button label={"Next.js"} />
                <Button label={"Performance"} />
                <Button label={"Gatsby"} />
                <Button label={"Career"} />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-pink text-base font-medium uppercase leading-7 tracking-widest">
                Popular Content
              </div>
              <ul className="flex flex-col gap-5 ">
                <li className="relative text-white text-lg font-medium leading-7">
                <Image  className="absolute bottom-[4px] left-[-26px]" src={'/right_arrow.svg'} width={20} height={20} alt="list arrow"/>
                  An Interactive Guide to CSS Transitions
                </li>
                <li className="relative text-white text-lg font-medium leading-7">
                  <Image  className="absolute bottom-[4px] left-[-26px]" src={'/right_arrow.svg'} width={20} height={20} alt="list arrow"/>
                An Interactive Guide to Flexbox
                </li>
                <li className="relative text-white text-lg font-medium leading-7">
                  <Image  className="absolute bottom-[4px] left-[-26px]" src={'/right_arrow.svg'} width={20} height={20} alt="list arrow"/>
                The End of Front-End Development
                </li>
                <li className="relative text-white text-lg font-medium leading-7">
                  <Image  className="absolute bottom-[4px] left-[-26px]" src={'/right_arrow.svg'} width={20} height={20} alt="list arrow"/>
                My Custom CSS Reset
                </li>
                <li className="relative text-white text-lg font-medium leading-7">
                  <Image  className="absolute bottom-[4px] left-[-26px]" src={'/right_arrow.svg'} width={20} height={20} alt="list arrow"/>
                CSS Variables for React Devs
                </li>
                <li className="relative text-white text-lg font-medium leading-7">
                  <Image  className="absolute bottom-[4px] left-[-26px]" src={'/right_arrow.svg'} width={20} height={20} alt="list arrow"/>
                Designing Beautiful Shadows in
CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
