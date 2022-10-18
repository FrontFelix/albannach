import Navbar from "../components/Navbar";

export default function NftPage() {
    return (
        <div>
            <div className="hero relative h-screen">
            <img className="absolute nftBG w-full h-full" src="./img/nftBackground.png" alt="" />
            <Navbar brand={false}></Navbar>
            <div className="px-2 lg:px-10 wrapper flex mx-auto flex-col-reverse lg:flex-row lg:justify-between 2xl:w-4/6 lg:mx-auto lg:mt-32">
                <div className="hero-left text-center xl:w-1/2 lg:text-left">
                    <h1 className="w-full text-second-white text-head 3xl:w-1/2">The NFTs of Whisky</h1>
                    <p className="text-second-white pt-4 pb-10 text-2xl 3xl:w-1/3">Art that revolutionizes traditional scottish Whisky.</p>
                    <a className="secondary-button px-5 py-2 text-3xl font-bold" href="">Join Discord</a>
                </div>
                <div className="hero-right lg:w-1/3">
                    <img className="mx-auto lg:mx-0 block" src="./img/nftPlaceholder.png" alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}