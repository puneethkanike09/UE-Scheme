"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "kn">("en");

  const content = {
    en: {
      companyName: "UNIQUE ENTERPRISES",
      navAbout: "About",
      navGuidelines: "Guidelines",
      navContact: "Contact",
      tagline: "Transparent Lucky Draw Schemes",
      heroTitle: "Exciting & Transparent",
      heroHighlight: "Lucky Draw Schemes",
      heroDesc: "Participate in carefully designed private lucky draw programs with clear rules, fair process, and complete transparency on prizes and winners.",
      joinWhatsApp: "Join WhatsApp Group",
      viewGuidelines: "View Participation Guidelines",
      highlightsTitle: "Lucky Draw Highlights",
      highlightsDesc: "Explore some of the exciting prizes in our lucky draw schemes.",
      aboutTitle: "About Us",
      aboutP1: "Welcome to our trusted platform for exciting and transparent lucky draw schemes. We provide complete details about our private lucky draw programs, including participation rules, prize information, eligibility criteria, and winner announcements.",
      aboutP2: "Our goal is to create a fair and engaging experience where participants can confidently take part in our schemes with full clarity and transparency. We ensure that all necessary information — from entry steps to prize distribution — is clearly explained.",
      aboutP3: "Our mission is to offer secure, transparent, and exciting lucky draw opportunities while maintaining fairness and trust for all participants.",
      guidelinesTitle: "Participation Guidelines & Rules",
      guidelinesDesc: "Please read the key guidelines below before joining any lucky draw scheme.",
      rule1Title: "1. Enrollment:",
      rule1Desc: "Each scheme will have clear enrollment instructions, entry fees (if applicable), and last date for participation.",
      rule2Title: "2. Live Draw on YouTube:",
      rule2Desc: "Draws are conducted live on YouTube. Participants' names are written on chits and drawn randomly in a transparent manner.",
      rule3Title: "3. Winners & Prizes:",
      rule3Desc: "Winners will be announced during the live draw and contacted directly. Prizes are non-transferable unless specifically mentioned.",
      rule4Title: "4. Compliance:",
      rule4Desc: "All participants must follow the scheme rules and provide accurate details. Any misuse or fraudulent activity may lead to disqualification.",
      guidelinesNote: "Note: Detailed terms and scheme-specific conditions will be shared at the time of enrollment.",
      contactTitle: "Contact Us",
      contactDesc: "Have questions or want to know more about our lucky draw schemes? Reach out to us using any of the options below.",
      whatsappLabel: "WhatsApp Group",
      whatsappButton: "Join Our WhatsApp Group",
      phoneLabel: "Phone Numbers",
      emailLabel: "Email",
      addressLabel: "Address",
      addressText: "Adigas Complex, Kadalakere, Ring Road, Moodbidre - 574227",
      footerText: "Unique Enterprises is committed to integrity, transparency, and providing a smooth user experience for every participant.",
    },
    kn: {
      companyName: "ಯೂನಿಕ್ ಎಂಟರ್‌ಪ್ರೈಸಸ್",
      navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",
      navGuidelines: "ಮಾರ್ಗಸೂಚಿಗಳು",
      navContact: "ಸಂಪರ್ಕಿಸಿ",
      tagline: "ರೋಚಕ ಮತ್ತು ಪಾರದರ್ಶಕ ಲಕ್ಕಿ ಡ್ರಾ ಯೋಜನೆಗಳು",
      heroTitle: "ರೋಚಕ ಮತ್ತು ಪಾರದರ್ಶಕ",
      heroHighlight: "ಲಕ್ಕಿ ಡ್ರಾ ಯೋಜನೆಗಳು",
      heroDesc:
        "ಸ್ಪಷ್ಟ ನಿಯಮಗಳು, ನ್ಯಾಯಯುತ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಬಹುಮಾನಗಳು ಮತ್ತು ವಿಜೇತರ ಬಗ್ಗೆ ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆಯೊಂದಿಗೆ ಎಚ್ಚರಿಕೆಯಿಂದ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಖಾಸಗಿ ಲಕ್ಕಿ ಡ್ರಾ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ.",
      joinWhatsApp: "WhatsApp ಗುಂಪಿಗೆ ಸೇರಿ",
      viewGuidelines: "ಭಾಗವಹಿಸುವ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
      highlightsTitle: "ಲಕ್ಕಿ ಡ್ರಾ ಮುಖ್ಯಾಂಶಗಳು",
      highlightsDesc: "ನಮ್ಮ ಲಕ್ಕಿ ಡ್ರಾ ಯೋಜನೆಗಳಲ್ಲಿನ ಕೆಲವು ರೋಚಕ ಬಹುಮಾನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
      aboutTitle: "ನಮ್ಮ ಬಗ್ಗೆ",
      aboutP1:
        "ರೋಚಕ ಮತ್ತು ಪಾರದರ್ಶಕ ಲಕ್ಕಿ ಡ್ರಾ ಯೋಜನೆಗಳ ನಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ವೇದಿಕೆಗೆ ಸ್ವಾಗತ. ನಾವು ನಮ್ಮ ಖಾಸಗಿ ಲಕ್ಕಿ ಡ್ರಾ ಕಾರ್ಯಕ್ರಮಗಳ ಬಗ್ಗೆ ಸಂಪೂರ್ಣ ವಿವರಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ, ಇದರಲ್ಲಿ ಭಾಗವಹಿಸುವ ನಿಯಮಗಳು, ಬಹುಮಾನ ಮಾಹಿತಿ, ಅರ್ಹತಾ ಮಾನದಂಡಗಳು ಮತ್ತು ವಿಜೇತರ ಪ್ರಕಟಣೆಗಳು ಸೇರಿವೆ.",
      aboutP2:
        "ಸಂಪೂರ್ಣ ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಪಾರದರ್ಶಕತೆಯೊಂದಿಗೆ ಭಾಗವಹಿಸುವವರು ವಿಶ್ವಾಸದಿಂದ ನಮ್ಮ ಯೋಜನೆಗಳಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಬಹುದಾದ ನ್ಯಾಯಯುತ ಮತ್ತು ಆಕರ್ಷಕ ಅನುಭವವನ್ನು ಸೃಷ್ಟಿಸುವುದು ನಮ್ಮ ಗುರಿಯಾಗಿದೆ. ನಾವು ಎಲ್ಲಾ ಅಗತ್ಯ ಮಾಹಿತಿಯನ್ನು — ಪ್ರವೇಶದ ಹಂತಗಳಿಂದ ಹಿಡಿದು ಬಹುಮಾನ ವಿತರಣೆಯವರೆಗೆ — ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಲಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತೇವೆ.",
      aboutP3:
        "ಎಲ್ಲಾ ಭಾಗವಹಿಸುವವರಿಗೆ ನ್ಯಾಯಸಮತೆ ಮತ್ತು ವಿಶ್ವಾಸವನ್ನು ಕಾಪಾಡುತ್ತಾ ಸುರಕ್ಷಿತ, ಪಾರದರ್ಶಕ ಮತ್ತು ರೋಚಕ ಲಕ್ಕಿ ಡ್ರಾ ಅವಕಾಶಗಳನ್ನು ನೀಡುವುದು ನಮ್ಮ ಉದ್ದೇಶವಾಗಿದೆ.",
      guidelinesTitle: "ಭಾಗವಹಿಸುವ ಮಾರ್ಗಸೂಚಿಗಳು ಮತ್ತು ನಿಯಮಗಳು",
      guidelinesDesc:
        "ಯಾವುದೇ ಲಕ್ಕಿ ಡ್ರಾ ಯೋಜನೆಗೆ ಸೇರುವ ಮೊದಲು ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಪ್ರಮುಖ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಓದಿ.",
      rule1Title: "1. ದಾಖಲಾತಿ:",
      rule1Desc:
        "ಪ್ರತಿ ಯೋಜನೆಯು ಸ್ಪಷ್ಟ ದಾಖಲಾತಿ ಸೂಚನೆಗಳು, ಪ್ರವೇಶ ಶುಲ್ಕಗಳು (ಅನ್ವಯವಾದರೆ) ಮತ್ತು ಭಾಗವಹಿಸಲು ಕೊನೆಯ ದಿನಾಂಕವನ್ನು ಹೊಂದಿರುತ್ತದೆ.",
      rule2Title: "2. YouTube ನಲ್ಲಿ ನೇರ ಡ್ರಾ:",
      rule2Desc:
        "ಡ್ರಾಗಳನ್ನು YouTube ನಲ್ಲಿ ನೇರಪ್ರಸಾರದಲ್ಲಿ ನಡೆಸಲಾಗುತ್ತದೆ. ಭಾಗವಹಿಸುವವರ ಹೆಸರುಗಳನ್ನು ಚೀಟಿಗಳ ಮೇಲೆ ಬರೆಯಲಾಗುತ್ತದೆ ಮತ್ತು ಪಾರದರ್ಶಕ ರೀತಿಯಲ್ಲಿ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಎಳೆಯಲಾಗುತ್ತದೆ.",
      rule3Title: "3. ವಿಜೇತರು ಮತ್ತು ಬಹುಮಾನಗಳು:",
      rule3Desc:
        "ನೇರ ಡ್ರಾದ ಸಮಯದಲ್ಲಿ ವಿಜೇತರನ್ನು ಘೋಷಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತದೆ. ನಿರ್ದಿಷ್ಟವಾಗಿ ಉಲ್ಲೇಖಿಸದ ಹೊರತು ಬಹುಮಾನಗಳನ್ನು ವರ್ಗಾಯಿಸಲಾಗುವುದಿಲ್ಲ.",
      rule4Title: "4. ಅನುಸರಣೆ:",
      rule4Desc:
        "ಎಲ್ಲಾ ಭಾಗವಹಿಸುವವರು ಯೋಜನೆಯ ನಿಯಮಗಳನ್ನು ಅನುಸರಿಸಬೇಕು ಮತ್ತು ನಿಖರವಾದ ವಿವರಗಳನ್ನು ಒದಗಿಸಬೇಕು. ಯಾವುದೇ ದುರುಪಯೋಗ ಅಥವಾ ವಂಚನಾ ಚಟುವಟಿಕೆಯು ಅಪರಾಧೀಕರಣಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು.",
      guidelinesNote:
        "ಗಮನಿಸಿ: ವಿವರವಾದ ನಿಯಮಗಳು ಮತ್ತು ಯೋಜನೆ-ನಿರ್ದಿಷ್ಟ ಷರತ್ತುಗಳನ್ನು ದಾಖಲಾತಿಯ ಸಮಯದಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಲಾಗುವುದು.",
      contactTitle: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
      contactDesc:
        "ನಮ್ಮ ಲಕ್ಕಿ ಡ್ರಾ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ ಅಥವಾ ಹೆಚ್ಚು ತಿಳಿಯಲು ಬಯಸುವಿರಾ? ಕೆಳಗಿನ ಯಾವುದೇ ಆಯ್ಕೆಗಳನ್ನು ಬಳಸಿಕೊಂಡು ನಮ್ಮನ್ನು ತಲುಪಿ.",
      whatsappLabel: "WhatsApp ಗುಂಪು",
      whatsappButton: "ನಮ್ಮ WhatsApp ಗುಂಪಿಗೆ ಸೇರಿ",
      phoneLabel: "ದೂರವಾಣಿ ಸಂಖ್ಯೆಗಳು",
      emailLabel: "ಇಮೇಲ್",
      addressLabel: "ವಿಳಾಸ",
      addressText: "ಆದಿಗಾಸ್ ಕಾಂಪ್ಲೆಕ್ಸ್, ಕದಲಕೆರೆ, ರಿಂಗ್ ರೋಡ್, ಮೂಡಬಿದ್ರೆ - 574227",
      footerText:
        "ಯೂನಿಕ್ ಎಂಟರ್‌ಪ್ರೈಸಸ್ ಪ್ರಾಮಾಣಿಕತೆ, ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಪ್ರತಿ ಭಾಗವಹಿಸುವವರಿಗೆ ಸುಗಮ ಬಳಕೆದಾರ ಅನುಭವವನ್ನು ಒದಗಿಸಲು ಬದ್ಧವಾಗಿದೆ.",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#eff6ff] text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/20 bg-white/60 backdrop-blur-md shadow-sm">
        <nav className="mx-auto flex max-w-5xl items-center gap-5 justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Unique Enterprises logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="leading-tight text-slate-800">
              <p className="text-xs font-semibold text-[#0c55c2]">
                {t.companyName}
              </p>
              <p className="text-[11px] text-slate-600">
                {t.tagline}
              </p>
            </div>
          </a>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-medium ${language === "en" ? "text-[#0c55c2]" : "text-slate-400"}`}>
                EN
              </span>
              <button
                onClick={() => setLanguage(language === "en" ? "kn" : "en")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  language === "kn" ? "bg-[#0c55c2]" : "bg-slate-300"
                }`}
                aria-label="Toggle language"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ${
                    language === "kn" ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-xs font-medium ${language === "kn" ? "text-[#0c55c2]" : "text-slate-400"}`}>
                ಕನ್ನಡ
              </span>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-6">
        {/* Hero */}
        <section className="flex flex-col gap-6 pb-10 pt-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              {t.heroTitle}{" "}
              <span className="text-[#0c55c2]">{t.heroHighlight}</span>
            </h1>
            <p className="max-w-xl text-base text-slate-700 sm:text-lg">
              {t.heroDesc}
            </p>
            <div className="flex flex-col gap-3 text-sm sm:flex-row">
              <a
                href="https://chat.whatsapp.com/HIhJ2DFsshn7qG3PP4yxkO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#22c55e] px-6 py-2 text-sm font-semibold text-black shadow-md shadow-black/40"
              >
                {t.joinWhatsApp}
              </a>
              <a
                href="#guidelines"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-medium text-slate-800 shadow-sm"
              >
                {t.viewGuidelines}
              </a>
            </div>
          </div>
        </section>

        {/* Posters */}
        <section className="space-y-3 pb-10">
          <h2 className="text-2xl font-semibold text-[#0c55c2]">
            {t.highlightsTitle}
          </h2>
          <p className="text-sm text-slate-600">
            {t.highlightsDesc}
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
          <h2 className="text-2xl font-semibold text-[#0c55c2]">{t.aboutTitle}</h2>
          <p className="text-base text-slate-700">
            {t.aboutP1}
          </p>
          <p className="text-base text-slate-700">
            {t.aboutP2}
          </p>
          <p className="text-base text-slate-700">
            {t.aboutP3}
          </p>
        </section>

        {/* Participation Guidelines */}
        <section id="guidelines" className="space-y-3 pb-10">
          <h2 className="text-2xl font-semibold text-[#0c55c2]">
            {t.guidelinesTitle}
          </h2>
          <p className="text-base text-slate-700">
            {t.guidelinesDesc}
          </p>
          <ul className="space-y-2 rounded-xl border border-slate-200 bg-sky-50 p-4 text-base text-slate-800">
            <li>
              <span className="font-semibold text-[#0c55c2]">{t.rule1Title}</span>{" "}
              {t.rule1Desc}
            </li>
            <li>
              <span className="font-semibold text-[#0c55c2]">
                {t.rule2Title}
              </span>{" "}
              {t.rule2Desc}
            </li>
            <li>
              <span className="font-semibold text-[#0c55c2]">
                {t.rule3Title}
              </span>{" "}
              {t.rule3Desc}
            </li>
            <li>
              <span className="font-semibold text-[#0c55c2]">
                {t.rule4Title}
              </span>{" "}
              {t.rule4Desc}
            </li>
          </ul>
          <p className="text-sm text-slate-500">
            {t.guidelinesNote}
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5"
        >
          <h2 className="text-2xl font-semibold text-[#0c55c2]">{t.contactTitle}</h2>
          <p className="text-base text-slate-700">
            {t.contactDesc}
          </p>

          <div className="space-y-3 text-base text-slate-800">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#0c55c2]">
                {t.whatsappLabel}
              </p>
              <a
                href="https://chat.whatsapp.com/HIhJ2DFsshn7qG3PP4yxkO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2 text-sm font-semibold text-black shadow-md shadow-black/40"
              >
                {t.whatsappButton}
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#0c55c2]">
                {t.phoneLabel}
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-slate-800">
                <a href="tel:+919900930198" className="underline-offset-2">
                  +91 99009 30198
                </a>
                <span>•</span>
                <a href="tel:+919900800938" className="underline-offset-2">
                  +91 99008 00938
                </a>
                <span>•</span>
                <a href="tel:+919901025450" className="underline-offset-2">
                  +91 99010 25450
                </a>
                <span>•</span>
                <a href="tel:+916361023803" className="underline-offset-2">
                  +91 63610 23803
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#0c55c2]">
                {t.emailLabel}
              </p>
              <a
                href="mailto:reachout.unique.enterprises@gmail.com"
                className="text-sm text-slate-800 underline-offset-2"
              >
                reachout.unique.enterprises@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#0c55c2]">
                {t.addressLabel}
              </p>
              <p className="text-sm text-slate-800">
                {t.addressText}
              </p>
            </div>
          </div>

          <p className="pt-2 text-[10px] text-slate-500">
            {t.footerText}
          </p>
        </section>
      </main>
    </div>
  );
}
