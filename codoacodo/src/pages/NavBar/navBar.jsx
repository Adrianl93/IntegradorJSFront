import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/Assets/Digimon_Logo.svg.png';
import Head from 'next/head';
import { useState } from 'react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mostrarServicios, setMostrarServicios] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const closeService = () => {
        setMostrarServicios(false)
    }

    const toggleServicios = () => {
        setMostrarServicios(!mostrarServicios);
    };

    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <nav className="w-full fixed top-0 z-10 bg-green-400 bg-opacity-70 backdrop-blur-sm" style={{ fontFamily: 'Nunito Sans' }}>
                <div className="container mx-auto flex justify-between items-center sm:py-5 py-1">
                    <Link href="/" className='ml-3'>
                        <Image src={logo} alt="Logo" width={120} height={40} className='rounded-md' />
                    </Link>
                    <div className="hidden md:flex space-x-12">
                        <Link href="/all_digimons">
                            <p className="text-black font-semibold p-1 hover:opacity-50" onClick={closeMenu}>Ver Digimons</p>
                        </Link>
                       
                           
                        <Link href="/Contacto">
                            <p className="text-black font-semibold p-1 hover:opacity-50" onClick={closeMenu}>Contacto</p>
                        </Link>
                       
                    </div>
                    
                </div>
                
            </nav>
        </div>
    );
};

export default Navbar;