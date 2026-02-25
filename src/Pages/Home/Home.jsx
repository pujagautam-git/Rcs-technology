import React from 'react'
import HeroSection from '../../Components/herosection/herosection'
import HighlightProducts from '../../Components/highlightProduct/highlightProduct'
import ShopByCategory from '../../Components/shopcategory/shopcategory'
import FeaturedProducts from '../../Components/featureproduct/featureproduct'
import NewsSection from '../../Components/newsArticle/newsArticle'
import PromotionalSection from '../../Components/promotional/promotional'

const Home = () => {
  return (
    <>
    <HeroSection />
    <ShopByCategory/>
     <HighlightProducts/>
    <FeaturedProducts/>
    <NewsSection/>
    <PromotionalSection/>
    </>
  )
}

export default Home