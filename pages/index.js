import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import { useUser } from '@auth0/nextjs-auth0/client'
export default function Home() {
  const {user,error,isLoading} = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  return (
    <div className="container">
      <Navbar/>
      <Footer />
    </div>
  )
}
