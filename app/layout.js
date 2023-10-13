import './globals.css'
export const metadata = {
  title: 'Grovyo Ads',
  description: 'Created By Grovyo Platforms Pvt Ltd',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
