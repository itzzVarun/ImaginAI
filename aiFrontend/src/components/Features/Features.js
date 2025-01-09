import {
  BoltIcon,
  CubeTransparentIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Advanced AI Technology",
    description:
      "Our platform leverages state-of-the-art artificial intelligence to create high-quality, beautiful images based on your descriptions. The AI is trained on a diverse dataset to ensure the generated images are both realistic and aesthetically pleasing.",
    href: "#",
    icon: CubeTransparentIcon,
  },
  {
    name: "User-Friendly Interface",
    description:
      "Designed with users in mind, our website is intuitive and easy to navigate. Simply type in your description, and watch as the AI brings your vision to life in seconds.",
    href: "#",
    icon: UserIcon,
  },
  {
    name: "Fast and Reliable",
    description:
      "Our platform is optimized for speed, ensuring you get your generated images quickly without compromising on quality. Whether you’re using it for fun, creative projects, or professional purposes, ImaginAI Generator delivers reliable results every time.",
    href: "#",
    icon: BoltIcon,
  },
];

export default function AppFeatures() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Be creative
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ImaginAI is everything you need for converting ideas into reality.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Revolutionalizing the way of image generation. Try yourself now...
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
