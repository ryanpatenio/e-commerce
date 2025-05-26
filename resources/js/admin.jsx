import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/Admin/**/*.jsx', { eager: true })
    return pages[`./Pages/Admin/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
   progress : {
    color : "#00ffff", //#39ff14 --neon green
    showSpinner: true
  
  }
});