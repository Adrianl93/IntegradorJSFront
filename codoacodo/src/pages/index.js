import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Loading from './Components/Loading/loading';




const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center p-2 h-full">
      <div className="flex flex-col sm:flex-row rounded-lg ml-2 sm:ml-10 mt-20 mb-40 items-center">
        {/* Imagen visible solo en dispositivos móviles */}
        <div className="w-full sm:hidden">
          <div style={{
            width: '100%',
            paddingBottom: '100%',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              borderTopLeftRadius: '55%',
              borderTopRightRadius: '45%',
              borderBottomLeftRadius: '5%',
              borderBottomRightRadius: '95%',
              overflow: 'hidden',
            }}>
              <Image
                src="https://i.pinimg.com/originals/68/14/28/681428bf32e30649e3fc72a0af7ed8bb.png"
                alt="Tai y Agumon"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-10 mt-6 sm:mt-0 text-center sm:text-left">
          <h1 className="font-bold text-5xl pr-3 sm:text-6xl mb-5 text-green-700">¡Bienvenidos a Digimon Web!</h1>
          <p className="text-gray-700 mb-6 text-black font-semibold">
           En esta página podras obtener informacion sobre esta maravillosa franquicia de nuestra infancia.
          </p>
          
        </div>


        {/* Imagen visible solo en pantallas más grandes */}
        <div className="w-0 sm:w-1/2 sm:block hidden">
          <div style={{
            width: '100%',
            paddingBottom: '100%',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              borderTopLeftRadius: '55%',
              borderTopRightRadius: '45%',
              borderBottomLeftRadius: '5%',
              borderBottomRightRadius: '95%',
              overflow: 'hidden',
            }}>
              <Image
                src="https://i.pinimg.com/originals/68/14/28/681428bf32e30649e3fc72a0af7ed8bb.png"
                alt="Tai y Agumon"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

     

      
     
    </main>

  )
}

export default Home;