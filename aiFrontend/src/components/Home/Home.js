import HomeFeatures from "./HomeFeatures";
import FreeTrial from "./FreeTrial";
import ai from "../../assets/ai.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="relative isolate overflow-hidden pt-14">
          <img
            src={ai}
            alt=" ai"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-black bg-opacity-90"></div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-12 sm:py-28 lg:py-36">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-white/40 hover:ring-white/20">
                Announcing ImaginAI Image Generator
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-violet-600 via-stone-500 to-purple-500 inline-block text-transparent bg-clip-text">
                ImaginAI Image Generator
              </h1>
              <h2 className="text-2xl font-medium tracking-tight sm:text-2xl pt-2 bg-gradient-to-r from-violet-400 via-stone-400 to-purple-400 inline-block text-transparent bg-clip-text">
                -A blend of imagination and AI
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                ImaginAI is an online image generator powered by AI. It allows
                you to generate images from text descriptions. You can use it to
                generate images for your website, social media, or your
                business.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="free-plan"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Start 3 Day Free Trial
                </Link>
                <Link
                  to="free-plan"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Homepage features */}
      <HomeFeatures />
      {/* Homepage CTA */}
      <FreeTrial />
    </>
  );
}
