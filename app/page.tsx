import {
  ArrowRight,
  Download,
  Users,
  Globe,
  Clock,
  MessageSquare,
  BookOpen,
  Target,
  Star,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-[#353745]/10 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#E6ECF3] rounded-lg border border-[#353745]/20"></div>
              <span className="font-semibold text-xl text-[#353745]">Denis Salnikov</span>
            </div>
            <div className="hidden lg:flex items-center space-x-10">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                About
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Services
              </a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Experience
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Testimonials
              </a>
              <Button className="bg-[#353745] hover:bg-[#353745]/90 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#BFD9D7]/30 via-white to-[#E6ECF3]/50"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#BFD9D7]/40 to-[#E6ECF3]/40 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#E6ECF3]/40 to-[#BFD9D7]/40 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center space-x-3 mb-6">
                
                <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0 px-4 py-1.5 font-medium">
                  🚀 Org Design Coach
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0 px-4 py-1.5 font-medium">
                  🪄 Facilitator
                </Badge>
                 <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0 px-4 py-1.5 font-medium">
                  🤖 Tech Executives Consultant
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Nice to
                <span className="text-[#353745] font-bold"> e-meet </span>
                you!
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                I transform organizations through strategic agile implementation, helping companies and their teams
                achieve
                <span className="font-semibold text-gray-800"> exceptional results</span> and sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-[#353745] hover:bg-[#353745]/90 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
                <a href="https://calendar.notion.so/meet/denissalnikov/agileexpat" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#353745]/20 hover:border-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>5.0 Client Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Featured Speaker</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/denis-photo.jpg" 
                    alt="Denis Salnikov" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl border-2 border-[#353745]/10">
                  <img 
                    src="/icagile.png" 
                    alt="Certification Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#BFD9D7]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#353745] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">60+</div>
              <p className="text-gray-600 font-medium">Teams Transformed</p>
              <p className="text-sm text-gray-500 mt-1">Across enterprise organizations</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#353745] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">13</div>
              <p className="text-gray-600 font-medium">Countries</p>
              <p className="text-sm text-gray-500 mt-1">Global consulting experience</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#353745] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1600+</div>
              <p className="text-gray-600 font-medium">Consulting Hours</p>
              <p className="text-sm text-gray-500 mt-1">Deep expertise delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 mb-8">Trusted by leading organizations worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity duration-300">
            <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm border border-[#353745]/10 hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-medium text-sm">PwC</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm border border-[#353745]/10 hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-medium text-sm">Qwist</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm border border-[#353745]/10 hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-medium text-sm">N26</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm border border-[#353745]/10 hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-medium text-sm">Yassir</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm border border-[#353745]/10 hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-medium text-sm">Exness</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm border border-[#353745]/10 hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-medium text-sm">Smava</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How I Drive
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Transformation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic consulting services designed to unlock your organization's potential through proven agile
              methodologies and cultural transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group border border-[#353745]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-[#E6ECF3]/30">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#353745] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Organizational Consulting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic agile transformation and organizational design for sustainable growth and efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-[#353745]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-[#E6ECF3]/30">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#353745] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Programs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive training and workshops that empower teams with practical agile skills and mindset.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-[#353745]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-[#E6ECF3]/30">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#353745] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Coaching & Mentoring</h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalized development programs for leaders and practitioners to excel in agile environments.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-[#353745]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-[#E6ECF3]/30">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#353745] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">On-demand Facilitation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert facilitation for critical meetings, workshops, and strategic planning sessions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#BFD9D7]/20 to-[#E6ECF3]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Client
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Success Stories
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "Denis transformed our entire approach to product development. His expertise in agile methodologies
                  and ability to coach teams through change is exceptional. We saw immediate improvements in delivery
                  speed and team satisfaction."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">VP of Product, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "Working with Denis was a game-changer for our organization. His strategic approach to agile
                  transformation helped us not just implement new processes, but truly change our culture. Highly
                  recommended."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Michael Chen</p>
                    <p className="text-sm text-gray-600">CTO, InnovateLab</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conference Talks Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured
              <span className="text-[#353745]"> Conference Talks</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sharing insights and expertise at leading industry conferences worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="group border border-[#353745]/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-[#BFD9D7]/30 to-[#E6ECF3]/50 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#353745] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Scaling Agile in Enterprise</h3>
                <p className="text-sm text-gray-600 mb-3">AgileConf 2023 • 15 min</p>
                <p className="text-gray-600 text-sm">
                  How to successfully implement agile methodologies across large organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-[#353745]/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-[#BFD9D7]/30 to-[#E6ECF3]/50 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#353745] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cultural Transformation</h3>
                <p className="text-sm text-gray-600 mb-3">ScrumGathering 2023 • 20 min</p>
                <p className="text-gray-600 text-sm">
                  Building agile culture that sustains long-term organizational change.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-[#353745]/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-[#BFD9D7]/30 to-[#E6ECF3]/50 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#353745] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Remote Team Dynamics</h3>
                <p className="text-sm text-gray-600 mb-3">DevOps Days 2022 • 18 min</p>
                <p className="text-gray-600 text-sm">Effective strategies for managing distributed agile teams.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#353745] text-[#353745] hover:bg-[#353745] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch All Conference Talks
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="experience" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My Proven
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Methodology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach refined through years of successful transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#353745] rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div className="absolute -inset-4 bg-[#BFD9D7]/30 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep dive into your current processes, culture, and challenges to identify transformation opportunities.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#353745] rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div className="absolute -inset-4 bg-[#BFD9D7]/30 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop a customized transformation roadmap aligned with your business objectives and organizational
                context.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#353745] rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <div className="absolute -inset-4 bg-[#BFD9D7]/30 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation & Coaching</h3>
              <p className="text-gray-600 leading-relaxed">
                Hands-on guidance and support throughout the transformation with continuous coaching and adjustment.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#353745] rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <div className="absolute -inset-4 bg-[#BFD9D7]/30 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization & Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous improvement cycles to ensure sustainable practices and long-term organizational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#353745] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Organization?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how strategic agile transformation can unlock your team's potential and drive sustainable
            business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-gray-50 border-t border-[#353745]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-[#E6ECF3] rounded-lg border border-[#353745]/20"></div>
              <span className="font-semibold text-xl text-[#353745]">Denis Salnikov</span>
            </div>
            <p className="text-gray-500">© 2024 Denis Salnikov. Transforming organizations through agile excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
