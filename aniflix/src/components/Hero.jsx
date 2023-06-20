import DemonSlayer from '/Kimetsu.jpg'
import Naruto from '/naruto.png'
import Spy from '/spy-x.png'
import TokyoRev from '/tokyo-rev.png'
import Komi from '/komi.png'
import Chain from '/chainsaw.png'
import Mash from '/mashle.png'
import Hell from '/HellP.png'
import Demon from '/demon.png'
import Drama from '/drama.png'
import Horror from '/horror.png'
import Thriller from '/thriller.png'
import Romance from '/romance.png'
import Assass from '/assassination.png'
import Your from '/your-name.png'
import Ani from '/ani-mov.png'
import Howls from '/howls.png'

export const Hero = () => {
    return (
        <div className="hero flex bg-[#333030] max-h-fit">
            <div className="hero-content-left w-1/4 bg-[#292626]">
                <ul className="p-5 text-left text-white space-y-2">
                    <li>Home</li>
                    <li>Watchlist</li>
                    <li>Browse</li>
                    <li>Coming Soon</li>
                    <li>Dubbed Anime</li>
                    <li>Subbed Anime</li>
                </ul>
            </div>
            <div className="hero-content-right flex">
                <div className="hero-content-l w-1/2">
                    <div className="p-5">
                        <img src={DemonSlayer} alt="" className='rounded-lg' />
                        <div className="btn mt-2 space-x-5 text-white">
                            <button className='rounded-sm p-2 bg-amber-500'>
                                Watch Now
                            </button>
                            <button className='rounded-sm p-2 bg-lime-500'>
                                Watchlist
                            </button>
                        </div>
                    </div>
                    <div className="px-5 py-2 text-white">
                        <h1 className='text-xl py-2 font-bold'>Top Shows</h1>
                        <div className="shows grid grid-cols-4 gap-2">
                            <img src={Naruto} alt="" className='rounded-md' />
                            <img src={Spy} alt="" className='rounded-md' />
                            <img src={TokyoRev} alt="" className='rounded-md' />
                            <img src={Komi} alt="" className='rounded-md' />
                        </div>
                    </div>
                    <div className="p-5 text-white">
                        <h1 className='text-xl py-2 font-bold'>Top Airing</h1>
                        <div className="shows grid grid-cols-4 gap-2">
                            <img src={Hell} alt="" className='rounded-md' />
                            <img src={Mash} alt="" className='rounded-md' />
                            <img src={Demon} alt="" className='rounded-md' />
                            <img src={Chain} alt="" className='rounded-md' />
                        </div>
                    </div>
                </div>
                <div className="hero-content-r w-1/2 p-5 h-fit">
                    <div className="genre">
                        <h1 className='text-2xl font-bold text-white mb-2'>Genre</h1>
                        <div className="genre-grid grid grid-cols-2 gap-2">
                            <div className="img1">
                                <img src={Drama} alt="" className='rounded-md' />
                                <h2 className='text-xl font-semibold text-white'>Drama</h2>
                            </div>
                            <div className="img2">
                                <img src={Thriller} alt="" className='rounded-md' />
                                <h2 className='text-xl font-semibold text-white'>Thriller</h2>
                            </div>
                            <div className="img3">
                                <img src={Romance} alt="" className='rounded-md' />
                                <h2 className='text-xl font-semibold text-white'>Romance</h2>
                            </div>
                            <div className="img4">
                                <img src={Horror} alt="" className='rounded-md' />
                                <h2 className='text-xl font-semibold text-white'>Horor</h2>
                            </div>
                        </div>
                        <div className="cont-watch mt-5">
                            <div className="watch flex items-center text-white mb-2">
                            <h1 className='text-2xl font-bold'>Continue Watching</h1>
                            <p className='ml-auto'>more</p>
                            </div>
                            <div className="watch-cont flex gap-2">
                                <img src={Assass} alt='' className='rounded-md'/>
                                <img src={Your} alt='' className='rounded-md'/>
                                <img src={Ani} alt='' className='rounded-l-md'/>
                            </div>
                        </div>
                        <div className="trailer mt-2">
                            <h1 className='text-2xl font-bold text-white my-2'>Trailer</h1>
                            <img src={Howls} alt="" className=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}