"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    num: "01",
    title: "Data & Office",
    desc: "Accurate computer encoding, record updates, document preparation, and everyday office workflows.",
    tags: ["Computer Encoding", "Microsoft Excel", "Microsoft Word"],
  },
  {
    num: "02",
    title: "IT & Systems",
    desc: "Information Systems background with an interest in practical IT support, systems, and technology-driven operations.",
    tags: ["Information Systems", "IT Support", "Problem Solving"],
  },
  {
    num: "03",
    title: "Professional Skills",
    desc: "Clear communication, organization, teamwork, adaptability, reliability, and a strong willingness to learn.",
    tags: ["Communication", "Teamwork", "Time Management"],
  },
]

const techSkills = [
  {
    group: "Languages",
    items: ["PHP", "JavaScript", "Python", "Dart", "HTML5", "CSS3", "SQL"],
  },
  {
    group: "Frameworks & Development",
    items: ["Laravel", "Flask", "Flutter", "jQuery", "Riverpod", "REST APIs"],
  },
  {
    group: "Databases & Backend",
    items: ["MySQL", "PostgreSQL", "Supabase", "Firebase/Firestore", "phpMyAdmin"],
  },
  {
    group: "Development Tools",
    items: ["Git", "GitHub", "VS Code", "XAMPP", "Android Studio", "Postman", "Render"],
  },
  {
    group: "Data & Analytics",
    items: ["Microsoft Excel", "Power BI", "Tableau", "QlikView"],
  },
  {
    group: "Automation",
    items: ["Selenium", "n8n", "Workflow Automation", "Browser Automation"],
  },
  {
    group: "IT Support",
    items: [
      "PC Hardware & Software Troubleshooting",
      "Windows Support",
      "Hardware/Peripheral Setup",
      "Basic Network Troubleshooting",
    ],
  },
  {
    group: "Development Experience",
    items: [
      "Full-Stack Web Development",
      "Mobile App Development",
      "E-commerce Systems",
      "POS & Inventory Systems",
      "CRUD Applications",
      "Authentication",
      "Database Management",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-dark text-white">
      <div className="max-w-[1160px] mx-auto">
        <p className="text-xs font-bold tracking-widest text-accent mb-4">02 — SKILLS</p>
        <h2 className="font-grotesk text-3xl md:text-5xl font-bold mb-12">What I bring to a team.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-dark-2 border-white/10 text-white h-full">
                <CardHeader>
                  <div className="font-grotesk text-4xl font-bold text-accent">{skill.num}</div>
                  <CardTitle className="text-white text-xl font-grotesk">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{skill.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="mt-20">
          <h3 className="font-grotesk text-3xl font-bold mb-2">Technical Skills</h3>
          <p className="text-gray-400 mb-10 max-w-2xl">
            The tools and technologies I use to build, ship, and maintain digital products.
          </p>
          <div className="space-y-8">
            {techSkills.map((group, i) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid items-start gap-3 border-t border-white/10 pt-5 first:border-t-0 first:pt-0 lg:grid-cols-[220px_1fr] lg:gap-8"
              >
                <div className="font-grotesk font-semibold tracking-wide text-accent lg:pt-1">
                  {group.group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-sm text-gray-200 hover:bg-white/20 hover:text-accent transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
