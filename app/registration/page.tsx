import RegistrationForm from "@/components/registration-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#150237] text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Header />
      <section className="relative pt-40 pb-30 md:py-50">
      <main className="min-h-screen flex items-center justify-center py-12">
        <div className="container px-4 md:px-6">
          <RegistrationForm />
        </div>
      </main>
      </section>
      <Footer />
    </div>
  )
}
