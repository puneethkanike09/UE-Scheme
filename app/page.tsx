import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eff6ff] text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/20 bg-white/60 backdrop-blur-md shadow-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Unique Enterprises logo"
              width={40}
              height={40}
              className="rounded-full shadow-md shadow-black/40"
            />
            <div className="leading-tight text-slate-800">
              <p className="text-xs font-semibold text-[#0c55c2]">
                UNIQUE ENTERPRISES
              </p>
              <p className="text-[11px] text-slate-600">
                Transparent Lucky Draw Schemes
              </p>
            </div>
          </a>
          <div className="flex gap-4 text-xs sm:text-sm">
            <a href="#about" className="font-semibold text-slate-700 hover:text-[#0c55c2]">
              About
            </a>
            <a
              href="#guidelines"
              className="hidden font-semibold text-slate-700 hover:text-[#0c55c2] xs:inline"
            >
              Guidelines
            </a>
            <a href="#contact" className="font-semibold text-slate-700 hover:text-[#0c55c2]">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-6">
        {/* Hero */}
        <section className="flex flex-col gap-6 pb-10 pt-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              Exciting & Transparent{" "}
              <span className="text-[#0c55c2]">Lucky Draw Schemes</span>
            </h1>
            <p className="max-w-xl text-base text-slate-700 sm:text-lg">
              Participate in carefully designed private lucky draw programs with
              clear rules, fair process, and complete transparency on prizes and
              winners.
            </p>
            <div className="flex flex-col gap-3 text-sm sm:flex-row">
              <a
                href="https://chat.whatsapp.com/HIhJ2DFsshn7qG3PP4yxkO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#22c55e] px-6 py-2 text-sm font-semibold text-black shadow-md shadow-black/40 transition hover:bg-[#16a34a]"
              >
                Join WhatsApp Group
              </a>
              <a
                href="#guidelines"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#0c55c2] hover:text-[#0c55c2]"
              >
                View Participation Guidelines
              </a>
            </div>
          </div>
        </section>

        {/* Posters */}
        <section className="space-y-3 pb-10">
          <h2 className="text-2xl font-semibold text-[#0c55c2]">
            Lucky Draw Highlights
          </h2>
          <p className="text-sm text-slate-600">
            Explore some of the exciting prizes in our lucky draw schemes.
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
              <Image
                src="/WhatsApp Image 2026-02-12 at 1.00.10 PM (1).jpeg"
                alt="Lucky draw monthly prizes poster"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md sm:col-span-1">
              <Image
                src="/WhatsApp Image 2026-02-12 at 1.00.11 PM (1).jpeg"
                alt="Opening soon Unique Enterprises poster"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md sm:col-span-2">
              <Image
                src="/WhatsApp Image 2026-02-12 at 1.00.11 PM.jpeg"
                alt="Extended monthly prizes poster"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="space-y-3 pb-10">
          <h2 className="text-2xl font-semibold text-[#0c55c2]">About Us</h2>
          <p className="text-base text-slate-700">
            Welcome to our trusted platform for exciting and transparent lucky
            draw schemes. We provide complete details about our private lucky
            draw programs, including participation rules, prize information,
            eligibility criteria, and winner announcements.
          </p>
          <p className="text-base text-slate-700">
            Our goal is to create a fair and engaging experience where
            participants can confidently take part in our schemes with full
            clarity and transparency. We ensure that all necessary information —
            from entry steps to prize distribution — is clearly explained.
          </p>
          <p className="text-base text-slate-700">
            Our mission is to offer secure, transparent, and exciting lucky draw
            opportunities while maintaining fairness and trust for all
            participants.
          </p>
        </section>

        {/* Participation Guidelines */}
        <section id="guidelines" className="space-y-3 pb-10">
          <h2 className="text-2xl font-semibold text-[#0c55c2]">
            Participation Guidelines & Rules
          </h2>
          <p className="text-base text-slate-700">
            Please read the key guidelines below before joining any lucky draw
            scheme.
          </p>
          <ul className="space-y-2 rounded-xl border border-slate-200 bg-sky-50 p-4 text-base text-slate-800">
            <li>
              <span className="font-semibold text-[#0c55c2]">1. Eligibility:</span>{" "}
              Participants must be 18 years or older and meet any scheme-specific
              location or identity requirements.
            </li>
            <li>
              <span className="font-semibold text-[#0c55c2]">
                2. Enrollment:
              </span>{" "}
              Each scheme will have clear enrollment instructions, entry fees (if
              applicable), and last date for participation.
            </li>
            <li>
              <span className="font-semibold text-[#0c55c2]">
                3. Ticket / ID:
              </span>{" "}
              Every participant will receive a unique ticket number or ID for the
              draw. Keep this safely for verification.
            </li>
            <li>
              <span className="font-semibold text-[#0c55c2]">
                4. Draw Process:
              </span>{" "}
              Draws will be conducted in a transparent manner. Details such as
              date, time, and method of draw will be announced in advance.
            </li>
            <li>
              <span className="font-semibold text-[#0c55c2]">
                5. Winners & Prizes:
              </span>{" "}
              Winners will be announced on our official channels and contacted
              directly. Prizes are non-transferable unless specifically mentioned.
            </li>
            <li>
              <span className="font-semibold text-[#0c55c2]">
                6. Compliance:
              </span>{" "}
              All participants must follow the scheme rules and provide accurate
              details. Any misuse or fraudulent activity may lead to
              disqualification.
            </li>
          </ul>
          <p className="text-sm text-slate-500">
            Note: Detailed terms and scheme-specific conditions will be shared at
            the time of enrollment.
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5"
        >
          <h2 className="text-2xl font-semibold text-[#0c55c2]">Contact Us</h2>
          <p className="text-base text-slate-700">
            Have questions or want to know more about our lucky draw schemes?
            Reach out to us using any of the options below.
          </p>

          <div className="space-y-3 text-base text-slate-800">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#0c55c2]">
                WhatsApp Group
              </p>
              <a
                href="https://chat.whatsapp.com/HIhJ2DFsshn7qG3PP4yxkO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2 text-sm font-semibold text-black shadow-md shadow-black/40 transition hover:bg-[#16a34a]"
              >
                Join Our WhatsApp Group
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#0c55c2]">
                Phone Numbers
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-slate-800">
                <a href="tel:+919900930198" className="underline-offset-2 hover:underline">
                  +91 99009 30198
                </a>
                <span>•</span>
                <a href="tel:+919900800938" className="underline-offset-2 hover:underline">
                  +91 99008 00938
                </a>
                <span>•</span>
                <a href="tel:+919901025450" className="underline-offset-2 hover:underline">
                  +91 99010 25450
                </a>
                <span>•</span>
                <a href="tel:+916361023803" className="underline-offset-2 hover:underline">
                  +91 63610 23803
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#0c55c2]">
                Email
              </p>
              <a
                href="mailto:youremail@example.com"
                className="text-sm text-slate-800 underline-offset-2 hover:underline"
              >
                youremail@example.com
              </a>
              <p className="text-xs text-slate-500">
                (Replace this with your official email ID.)
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#0c55c2]">
                Address
              </p>
              <p className="text-sm text-slate-800">
                Adigas Complex, Kadalakere, Ring Road, Moodbidre - 574227
              </p>
            </div>
          </div>

          <p className="pt-2 text-[10px] text-slate-500">
            Unique Enterprises is committed to integrity, transparency, and
            providing a smooth user experience for every participant.
          </p>
        </section>
      </main>
    </div>
  );
}
