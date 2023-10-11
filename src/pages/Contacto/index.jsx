import Image from "next/image";
import React from 'react';
import styles from "./index.module.css"
import { useForm, ValidationError } from '@formspree/react';
import Link from "next/link";

const Contacto = () => {
  const [state, handleSubmit] = useForm("123xyz"); 
  if (state.succeeded) {
    return (
      <div className="flex flex-col h-full">
        <div className={styles.header}>
          <div className="mx-auto flex items-center justify-end mt-8 lg:mt-0 lg:mr-20 h-full">
            <div className='mb-10 bg-zinc-300 bg-opacity-70 backdrop-blur-full p-6 w-full lg:w-1/3 rounded-full flex flex-col items-center'>
              <div className='text-center'>
                <h1 className='font-bold text-3xl lg:text-4xl mb-5 animate-fade-down'>
                   <br /><span className='text-lime-700'>¡Cuéntanos tus aventuras!</span>
                </h1>
              </div>
            </div>
          </div>
        </div>


        <div className="flex-grow flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-8">
            <h1 className="mb-4 text-center text-lg font-medium text-gray-800">
              Contáctate con nosotros
            </h1>
            <div className="flex justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=3512356489"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappIcon}
              >
                <i className="fab fa-whatsapp"></i>
              </a>

              <a href="https://www.linkedin.com/in/adrian-laborde-732091199/"
                className={styles.linkedinIcon}>
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                href="https://www.instagram.com/adrian_laborde/"
                className={styles.instagramIcon}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            
          </div>
          <div class="md:w-1/2 p-4 md:p-8 text-center">
            <div class="bg-white p-4 md:p-8 rounded-lg shadow-md bg-sky-200 animate-fade-down">
              <h2 class="text-2xl font-semibold mb-4">¡Tu mensaje ha sido enviado con éxito!</h2>
              <p class="text-gray-700">Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto contigo en breve. Valoramos tu interés y estamos ansiosos por ayudarte.</p>
              <p class="text-gray-700">Si tienes alguna pregunta adicional o necesitas asistencia inmediata, no dudes en hablarnos al <span class="text-green-700 hover:underline">
                <a href="https://api.whatsapp.com/send?phone=3512356489" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> 3512356489 </a></span></p>
              <p class="text-gray-700">¡Que tengas un gran día!</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col h-full">

      <div className={styles.header}>
        <div className="mx-auto flex items-center justify-end mt-8 lg:mt-0 lg:mr-20 h-full">
          <div className='mb-10 bg-zinc-300 bg-opacity-70 backdrop-blur-full p-6 w-full lg:w-1/3 rounded-full flex flex-col items-center'>
            <div className='text-center'>
              <h1 className='font-bold text-3xl lg:text-4xl mb-5 animate-fade-down'>
                 <br /><span className='text-lime-700'>¡Cuéntanos tus aventuras!</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="mb-4 text-center text-lg font-medium text-gray-800">
            Contactate con nosotros
          </h1>
          <div className="flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=3516578866"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappIcon}
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/in/adrian-laborde-732091199/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinIcon}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/adrian_laborde/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramIcon}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
      
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="mb-4 text-3xl font-semibold text-gray-800">
            Escríbenos!
          </h1>
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl p-8 shadow-xl rounded-lg w-full"
          >
            <div className="flex flex-col lg:flex-row mb-6">
              <div className="w-full lg:w-1/2 mr-0 lg:mr-2">
                <label
                  htmlFor="nombre"
                  className="block mb-2 text-lg font-medium text-gray-800"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="w-full lg:w-1/2 ml-0 lg:ml-2 mt-4 lg:mt-0">
                <label
                  htmlFor="apellido"
                  className="block mb-2 text-lg font-medium text-gray-800"
                >
                  Apellido
                </label>
                <input
                  id="apellido"
                  type="text"
                  name="apellido"
                  className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="Apellido"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-800"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="telefono"
                className="block mb-2 text-lg font-medium text-gray-800"
              >
                Teléfono
              </label>
              <input
                id="telefono"
                type="tel"
                name="telefono"
                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Teléfono"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium text-gray-800"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Mensaje"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;