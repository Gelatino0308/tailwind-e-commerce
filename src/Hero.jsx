import heroImage from './assets/suit.png'

export default function Hero () {
    return (
        <main id='home' className="bg-linear-45 from-violet-grayish to-violet-400 h-max p-16 
                        text-center flex flex-col items-center lg:flex-row lg:h-screen">
            <div className="pt-17 mx-auto lg:pt-16">
                <h1 className="text-h2 text-gray-800 lg:text-h1">
                    Welcome to <span className='font-bold italic'>The Tailor</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Discover premium clothing tailored just for you. 
                    Shop our latest collection today!
                </p>
                <div className="mt-6 flex flex-col justify-center gap-2 lg:block">
                    <a
                        href="#products"
                        className="bg-black text-white px-6 py-3 rounded-lg 
                        shadow hover:bg-violet-500 w-full lg:w-fit"
                    >
                        Shop Now
                    </a>
                    <a
                        href="#home"
                        className="lg:ml-4 bg-violet-grayish text-gray-800 px-6 py-3 
                        rounded-lg shadow hover:bg-gray-300 w-full lg:w-fit"
                    >
                        Learn More
                    </a>
                </div>
            </div>
            <div className="mt-8">
                <img
                    src={heroImage}
                    alt="Featured Product"
                    className="min-w-50 rounded-lg min-h-50 lg:w-120 lg:h-120"
                />
            </div>
        </main>
    )
}