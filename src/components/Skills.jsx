import React from "react";

const skillList = [
  "JavaScript (ES6+)",
  "React / Hooks / Vite",
  "HTML & CSS / Tailwind",
  "Node.js & Express",
  "Git & CI/CD",
  "Responsive Design",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Tools and technologies I use regularly.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {skillList.map((s) => (
            <div key={s} className="rounded-lg p-4 bg-white dark:bg-[#0b1220] border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="text-sm font-medium text-gray-800 dark:text-gray-100">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
