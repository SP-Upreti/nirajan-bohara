import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
      <>
      <nav className="flex align-center content-center navbar">
              <ul className="flex align-center content-center gap-10">
                <li><Link href={"#"}>Home</Link></li>
                <li><Link href={"#"}>About</Link></li>
                <li><Link href={"#"}>Portfolio</Link></li>
                <li><Link href={"#"}>Pages</Link></li>
                <li><Link href={"#"}>Blogs</Link></li>
                <li><Link href={"#"}>Contacts</Link></li>
              </ul>
      </nav>
      <HomeSection/>
      <div className="w-full flex items-center justify-center">
        <div className="w-4/5">
        <Stats/>
        </div>
        
      </div>
      <Skill/>
      <Service/>
    </> 
  );
}

function HomeSection(){
  return(
    <div className="home-section" id="home-section">
      <div className="flex h-screen">
        <div className="w-4/5 h-full flex items-center justify-center">
          <div className="w-3/5 flex flex-col gap-5">
              <div className="text-lg"><p>Hey There !</p></div>
              <div className="text-5xl font-bold tracking-wider"><p>I AM NIRAJAN</p></div>
              <div className="text-xl"><p>CREATIVE ART DIRECTOR & DESIGN</p></div>
              <div className="flex gap-5 text-2xl py-4">
                <span><i className="fa-brands fa-instagram"></i></span>
                <span><i className="fa-brands fa-facebook"></i></span>
                <span><i className="fa-brands fa-twitter"></i></span>
                <span><i className="fa-brands fa-linkedin"></i></span>
                </div>
                <div className="btn"><button>see my work</button></div>
          </div>
        </div>
        <div className="w-2/5 h-96 h-full">
        </div>
      </div>
    </div>
  )
}

function Stats(){
  return(
    <div className="flex gap-8">
      <div className="flex flex-col gap-2 items-center bg-slate-100 w-40 p-4">
          <div className="text-3xl font-bold"><p>15k +</p></div>
          <div><p>Happy Customer</p></div>
    </div>
    <div className="flex flex-col gap-2 items-center bg-slate-100 w-40 p-4">
          <div className="text-3xl font-bold"><p>12k +</p></div>
          <div><p>App Developed</p></div>
    </div>
    <div className="flex flex-col gap-2 items-center bg-slate-100 w-40 p-4">
          <div className="text-3xl font-bold"><p>15k +</p></div>
          <div><p>Content Written</p></div>
    </div>
    </div>
  )
}

function Skill(){
  return(
    <div className="flex  h-screen">
        <div className="w-2/5"></div>
        <div className="w-4/5">
          <div className="flex items-center h-full p-24">
              <div className="w-4/5 flex justify-center flex-col gap-4 px-8">
                  <div><p>ABOUT ME</p></div>
                  <div className="flex flex-col gap-10">
                  <div className="text-5xl  font-bold"><p>Creative Art Director
And Designer</p></div>
                    <div className=""><p>Also signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering moved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs his face</p></div>
                    <div className="btn">
                      <button>download cv</button>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

function Service(){
  return(
    <div className="h-screen w-full flex justify-center">
      <div className="w-4/5 flex flex-col gap-4 py-4">
        <div className="text-lg"><p>Our Service</p></div>
        <div className="w-80 text-4xl font-bold">
          <p>What Service I Offer For You</p>
        </div>
        <div className="flex py-8 gap-4">
            <div className="flex items-center justify-center flex-col gap-6 w-80 py-8 bg-slate-100">
              <div className="py-8"><img src="https://preview.colorlib.com/theme/breed2/img/services/s1.png" alt="" /></div>
              <div className="text-lg font-bold"><p>Web Development</p></div>
              <div className="px-4 text-sm text-center"><p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth</p></div>
              <div className="font-bold border-b-2 border-indigo-400"><a href="">Learn More</a></div>
            </div>
            <div className="flex items-center justify-center flex-col gap-6 w-80 py-8 bg-slate-100">
              <div className="py-8"><img src="https://preview.colorlib.com/theme/breed2/img/services/s3.png" alt="" /></div>
              <div className="text-lg font-bold"><p>Web Developing</p></div>
              <div className="px-4 text-sm text-center"><p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth</p></div>
              <div className="font-bold border-b-2 border-indigo-400"><a href="">Learn More</a></div>
            </div>
            <div className="flex items-center justify-center flex-col gap-6 w-80 py-8 bg-slate-100">
              <div className="py-8"><img src="https://preview.colorlib.com/theme/breed2/img/services/s2.png" alt="" /></div>
              <div className="text-lg font-bold"><p>UI/UX Design</p></div>
              <div className="px-4 text-sm text-center"><p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth</p></div>
              <div className="font-bold border-b-2 border-indigo-400"><a href="">Learn More</a></div>
            </div>
        </div>
        
      </div>
    </div>
  )
}