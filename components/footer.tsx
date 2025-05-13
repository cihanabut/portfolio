import { Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-[#F9F9ED] border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">&copy; {currentYear} Cihan Abut. Tous droits réservés.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:cihan.abut@gmail.com"
              className="text-gray-600 hover:text-[#7D84B2] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/cihanabut"
              className="text-gray-600 hover:text-[#7D84B2] transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/cihanabut"
              className="text-gray-600 hover:text-[#7D84B2] transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
