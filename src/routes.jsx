import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Downloads from './pages/Downloads.jsx'
import CareGuides from './pages/CareGuides.jsx'
import Hardware from './pages/Hardware.jsx'
import Support from './pages/Support.jsx'
import FAQ from './pages/FAQ.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Tools from './pages/Tools.jsx'
import Humor from './pages/Humor.jsx'
import NotFound from './pages/NotFound.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:slug" element={<ProductDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/care-guides" element={<CareGuides />} />
      <Route path="/hardware" element={<Hardware />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/humor" element={<Humor />} />
      <Route path="/support" element={<Support />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
