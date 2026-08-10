import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import AppRoutes from './routes.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}
