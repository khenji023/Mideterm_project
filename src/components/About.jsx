import React from "react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-4">Hi, I'm a Khenji</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">I build modern web applications with a focus on clean UI, fast performance, and accessibility. I enjoy turning ideas into delightful products that people love to use.</p>

          <div className="flex gap-3">
            <a href="#projects" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md shadow hover:opacity-95">See Projects</a>
            <a href="#contact" className="inline-block border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md">Contact</a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-56 h-56 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-800 shadow-lg flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-white/60 dark:bg-white/5 flex items-center justify-center text-3xl font-bold text-indigo-700 dark:text-indigo-200">🙂</div>
          </div>
        </div>
      </div>
    </section>
  );
}
