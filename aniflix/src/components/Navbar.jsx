import Bell from '/bell.png'
import DarkMode from '/dark-mode.png'


export const Navbar = () => {
    return (
        <div className="nav p-5 flex justify-between items-center">
            <h1 className="text-4xl font-semibold">Aniflix</h1>
            <ul className="flex gap-10 items-center font-semibold text-slate-500">
                <li className='underline'>TV Shows</li>
                <li>Movies</li>
                <li>Popular</li>
                <li>
                    <input type="search" name="" id="" placeholder="Search" className="p-2 border rounded-md outline-none"/>
                </li>
            </ul>
            <ul className='flex gap-5'>
                <li>
                    <button onClick={()=> alert("You have subscribed")}>
                    <img src={Bell} alt="" className='w-5'/>
                    </button>
                </li>
                <li><img src={DarkMode} alt="" className='w-5'/></li>
                <li className='font-bold'>John Doe</li>
            </ul>
        </div>
    )
}