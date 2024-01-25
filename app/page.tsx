import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'
import { getAllProducts } from '@/lib/actions'
import ProductCards from '@/components/ProductCards'
const page = async () => {

const allProducts=await getAllProducts();



  return (
    <>
    
   <section className="px-6 md:px-20 py-24">
          <div className="flex max-xl:flex-col gap-16">
            <div className="flex flex-col justify-center">
                <p className="small-text">
                  smart Shopping start here:
                  <Image
                  src="/assets/icons/arrow-right.svg"
                  alt ="arrow-right"
                  width={16}
                  height={16}
                  />
                </p>
             <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary">PriceWise</span>
             </h1>
           <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</p>
         <Searchbar/>
         </div>

         <HeroCarousel/>
          </div>

          
   </section>

<section className="trending-section">
<h2 className="section-text">Trending</h2>
<div className="flex flex-wrap gap-x-8 gap-y-16">
{allProducts?.map((product)=>(
  <ProductCards key={product._id} product={product}/>
))

}
</div>
</section>




    
    
    
    </>
  )
}

export default page
