import Breadcrumb from "../../components/common/Breadcrumb.jsx";

export default function Profile() {
    return (
        <div>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-1 hidden md:block">
                    <div className="px-4">
                        <div className="flex
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-4xl
          rounded-lg
          my-8
          p-16
          antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
        "
                        >
                            <h1 className="text-2xl font-medium text-white">Advertise</h1>
                        </div>
                    </div>
                </div>
                {/*Main Content start*/}
                <div className="col-span-5 md:col-span-3">
                    <div className="px-4 py-8">
                        <Breadcrumb/>
                        <div className="">
                            <div className="flex shadow
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-4xl
          rounded-lg
          my-8
          p-16
          antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
        "
                            >
                                <h1 className="text-2xl font-medium text-white">Advertise</h1>
                            </div>
                        </div>
                        {/*Main Content One start*/}
                        <div className="">
                            <div className="
                shadow
              flex
              justify-center
              items-center
              bg-white
              mx-auto
              max-w-4xl
              rounded-lg
              my-8
              p-16
              antialiased
            "
                            >
                                <h1 className="text-2xl font-medium">Profile view</h1>
                            </div>
                        </div>
                        {/*Main Content One end*/}
                        <div className="block sm:hidden">
                            <div className="flex
                shadow
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-4xl
          rounded-lg
          my-8
          p-16
          antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
        "
                            >
                                <h1 className="text-2xl font-medium text-white">Advertise</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Main Content end*/}
                <div className="col-span-1 hidden md:block">
                    <div className="px-4">
                        <div className="flex
                shadow
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-4xl
          rounded-lg
          my-8
          p-16
          antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
        "
                        >
                            <h1 className="text-2xl font-medium text-white">Advertise</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
