'use client' 

import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react'
 

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
  return (
    <section className="bg-[#E84c3d] py-16 text-white">
      <div className='container mx-auto px-4'>

        <div className='border-b border-white/20 pb-8'>
          <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>DNT Pet Shop</h3>
            <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
            <a
              href={`https://wa.me/5591985605052?text=Olá vim pelo site e gostaria de mais informações`}
              className='bg-green-500 px-4 py-2 rounded-md'
            >
              Contato via WhatsApp
            </a>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: dntpetshop@teste.com.br</p>
            <p>Telefone: (91) 91234-5678</p>
            <p>Rua X, Guanabara - Centro, Ananindeua | PA</p>
          </div>
                    
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
            <div className='flex gap-4'>
              <a 
                href="https://www.facebook.com/profile.php?id=100092165346174" 
                target='_blank'
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Visite nosso Facebook"
              > 
                <FacebookLogoIcon className='w-8 h-8' />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/dilenotavares" 
                target='_blank'
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Visite nosso Instagram"
              >
                <InstagramLogoIcon className='w-8 h-8' />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/@DJDilenoTavares" 
                target='_blank'
                rel="noopener noreferrer"
                title="YouTube"
                aria-label="Visite nosso YouTube"
              >
                <YoutubeLogoIcon className='w-8 h-8' />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

        </footer>


      </div>
    </section>
  )
}