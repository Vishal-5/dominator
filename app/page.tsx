"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaSnapchatGhost,
  FaPhone,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#2b0f2f] px-6 relative overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-rose-600/30 blur-[180px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-violet-600/30 blur-[180px] rounded-full bottom-[-150px] right-[-150px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 text-center"
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Dominator"
            className="w-36 h-36 rounded-full object-cover border-4 border-rose-500 shadow-lg"
          />
        </div>

        {/* Name */}
        <h1 className="mt-6 text-5xl font-extrabold bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent tracking-wide">
          Dominator
        </h1>

        {/* Status */}
        <div className="mt-4 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-rose-500/20 border border-rose-400 text-rose-300 font-semibold text-sm uppercase tracking-wider">
          ❤️ Single
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-300 leading-relaxed">
          Welcome to my personal profile page.  
          This page is for genuine connections, conversations, and meeting someone special.
          Confidence. Loyalty. Real vibes only.
        </p>

        {/* Social Buttons */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">

          <a
            href="https://instagram.com/abhayvrma01"
            target="_blank"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium hover:scale-105 transition"
          >
            <FaInstagram /> Instagram
          </a>

          <a
            href="https://wa.me/919919682082"
            target="_blank"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white font-medium hover:scale-105 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-medium hover:scale-105 transition"
          >
            <FaFacebookF /> Facebook
          </a>

          <a
            href="https://snapchat.com/add/abhayvrma001"
            target="_blank"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-yellow-400 text-black font-medium hover:scale-105 transition"
          >
            <FaSnapchatGhost /> Snapchat
          </a>

          <a
            href="tel:9919682082"
            className="col-span-2 sm:col-span-3 flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 text-white font-medium hover:scale-105 transition"
          >
            <FaPhone /> Call 9919682082
          </a>

        </div>

        {/* Footer */}
        <div className="mt-10 text-gray-400 text-sm">
          © {new Date().getFullYear()} Dominator. All rights reserved.
        </div>
      </motion.div>
    </main>
  );
}
