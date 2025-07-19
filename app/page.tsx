import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Mail, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import GithubStats from "@/components/GithubStats"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f8faf0] to-[#f6f6e9]">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-background">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AkshatIsRookie </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:bg-primary hover:text-white transition-colors rounded px-3 py-1">
              About
            </a>
            <a href="#projects" className="hover:bg-primary hover:text-white transition-colors rounded px-3 py-1">
              Projects
            </a>
            <a href="#skills" className="hover:bg-primary hover:text-white transition-colors rounded px-3 py-1">
              Skills
            </a>
            <a href="#contact" className="hover:bg-primary hover:text-white transition-colors rounded px-3 py-1">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8 flex justify-center">
            {/* Profile image: Replace 'profile.jpg' in public/ to update */}
            <div className="flip-container">
              <div className="flip-inner">
                <Image
                  src="/profilePORT.jpg"
                  alt="Profile"
                  width={150}
                  height={150}
                  className="rounded-full mb-6 border-4 border-primary/20"
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Akshat Seth</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Electrical Engineering student at NIT Surat | Full-stack Developer | Competitive Programmer 
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              {/* subject and body are added as well with mail to link*/}
              <a href="mailto:sethakshat204@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Akshat%2C%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding..."> 
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/AkshatIsRookie" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/akshatsethh/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">About Me</span>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-4">
                I am an enthusiastic Electrical Engineering undergraduate at NIT Surat, passionate about full-stack development, competitive programming, and technical leadership. I have a strong foundation in data structures & algorithms, and modern web technologies in building impactful projects.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My experience spans across frontend and backend development. I thrive in challenging environments and am always eager to learn and grow.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border">
              {/* --- Interviewer Comment ---
                This section fetches and displays my real GitHub stats using the GitHub API.
                It demonstrates my ability to integrate external APIs and render dynamic data in React.
              */}
              <GithubStats />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Featured Projects</span>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SafetyNet Project */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                {/* Project image */}
                <Image src="/SafetyNEt.png" alt="SafetyNet" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  SafetyNet – Crime Report & Support Platform
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://github.com/AkshatisRookie/safetynet" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://safety-net-111.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                • Developed a full-stack crime control platform with a core SOS feature that captures front and back camera images along with user geolocation for emergency response. • Integrated Mapbox API for real-time locations of hospitals and emergency centers. • Secured authentication and routing using Firebase Auth. • Achieved 100% Lighthouse scores and built a fully responsive UI using Tailwind CSS.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Firebase Auth</Badge>
                  <Badge variant="secondary">Mapbox</Badge>
                </div>
              </CardContent>
            </Card>
            {/* Personal Portfolio Project */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                {/* Project image: Replace 'profile.jpg' in public/ to update for demo */}
                <Image src="/PortFolio.png" alt="" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Personal Portfolio
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://github.com/AkshatisRookie/personalPortFolio" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                • Personal portfolio website to showcase projects, skills, and GitHub contributions. • Visualized GitHub data to highlight projects and repo. • Focused on clean design and fast performance to enhance user experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                </div>
              </CardContent>
            </Card>
            {/*Market sentiment analysis*/}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                {/* Project image*/}
                <Image src="/MarketLOL.png" alt="" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                Market-Sentimental-Analysis
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://github.com/AkshatisRookie/Market-Sentimental-Analysis" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://github.com/AkshatisRookie/Market-Sentimental-Analysis" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                • Performed predictive analysis on market trends using Python and libraries like NumPy, Pandas, Plotly and
 scikit-learn.
 • Trained and tested machine learning models, including SVR, XGBoost, and Random Forest, to evaluate
 performance.
 • Achieved a prediction accuracy of 92 percent, optimizing model efficiency
 • Visualized insights and trends with Plotly, enabling better understanding of market behavior
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Numpy</Badge>
                  <Badge variant="secondary">Pandas</Badge>
                  <Badge variant="secondary">Machine Learning Models</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Skills & Technologies</span>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm py-2 px-4">C/C++</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">Python</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">JavaScript</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">Firebase</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">MySQL</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">Git</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">GitHub</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">Cursor</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">Claude</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">ChatGPT</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">Next.js</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">React.js</Badge>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 relative">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Let's Work Together</span>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!!
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <a href="mailto:sethakshat204@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Akshat%2C%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding...">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="https://drive.google.com/file/d/1kuldfUw5MT3hC10AP2N0t7twIeO7IaxE/view?usp=drivesdk">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Akshat Seth. Built with love and Care.</p>
        </div>
      </footer>
    </div>
  )
}
