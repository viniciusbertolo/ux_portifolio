import 'boxicons/css/boxicons.min.css';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const toggleMobileMenu = () =>{
        const mobileMenu = document.getElementById('mobileMenu')

        if(mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden')
        }else{
            mobileMenu.classList.add('hidden')
        }
    }


    const { t } = useTranslation();
    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20">
            <h1 className="font-[Open_Sans] text-3xl md:text-4xl lg:text-5xl font-light m-0">VMUS</h1>

            <nav className="hidden md:flex items-center gap-12">
                <a className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#about">
                    {t('header.header_1')}
                </a>
                <a className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#projects">
                    {t('header.header_2')}
                </a>
                <a className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#networks">
                    {t('header.header_3')}
                </a>
                <a className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#contact">
                    {t('header.header_4')}
                </a>
            </nav>

            {/* <LanguageSwitcher />

            <button className="font-[Open_Sans] hidden md:block bg-[#7a7a7a] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
                SIGNIN
            </button> */}



            {/* --- Container para Desktop --- */}
            <div className="hidden md:flex items-center gap-6">
                <LanguageSwitcher />
                <button className="font-[Open_Sans] bg-[#222222] text-white py-3 px-8 rounded-[10px] border-none font-bold transition-all duration-500 hover:bg-[#ff8c00] hover:text-black cursor-pointer z-50">
                    {t('header.button')}
                </button>
            </div>


            {/* --- Container para Mobile --- */}
            <div className="md:hidden flex items-center gap-2">
                {/* Passamos a classe 'small-version' para ativar o estilo menor */}
                <LanguageSwitcher className="small-version" />
                <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i class="bx bx-menu"></i>
            </button>

            <div id='mobileMenu' className=' hidden fixed top-0 pt-20 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-90 backdrop-blur- md'>
                <nav className="flex flex-col gap-6 items-center">
                    <a onClick={toggleMobileMenu} className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#about">
                        {t('header.header_1')}
                    </a>
                    <a onClick={toggleMobileMenu} className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#projects">
                        {t('header.header_2')}
                    </a>
                    <a onClick={toggleMobileMenu} className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#networks">
                        {t('header.header_3')}
                    </a>
                    <a onClick={toggleMobileMenu} className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#contact">
                        {t('header.header_4')}
                    </a>
                </nav>
            </div>
            </div>


            {/* <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i class="bx bx-menu"></i>
            </button>

            <div id='mobileMenu' className=' hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-80 backdrop-blur- md'>
                <nav className="flex flex-col gap-6 items-center">
                    <a className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        COMPANY
                    </a>
                    <a className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        FEATURES
                    </a>
                    <a className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        RESOURCES
                    </a>
                    <a className="font-[Open_Sans] text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        DOCS
                    </a>
                </nav>
            </div> */}

        </header>
    )
}

export default Header
