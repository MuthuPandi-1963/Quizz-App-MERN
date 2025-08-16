import { FiBook, FiTarget, FiCode, FiTrendingUp, FiUsers, FiStar, FiArrowRight, FiCheck, FiPlay } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function LandingPage() {
  const features = [
    {
      icon: FiTarget,
      title: "Smart Assessments",
      description: "AI-powered assessments that adapt to student learning patterns and provide personalized feedback.",
      color: "text-blue-600",
    },
    {
      icon: FiCode,
      title: "Coding Challenges",
      description: "Interactive coding challenges with real-time feedback and automated testing environments.",
      color: "text-green-600",
    },
    {
      icon: FiTrendingUp,
      title: "Performance Analytics",
      description: "Comprehensive tracking and analytics to monitor student progress and identify improvement areas.",
      color: "text-purple-600",
    },
    {
      icon: FiBook,
      title: "Study Materials",
      description: "Curated learning resources and materials organized by topics and difficulty levels.",
      color: "text-orange-600",
    },
    {
      icon: FiUsers,
      title: "Collaborative Learning",
      description: "Connect with peers, join study groups, and participate in collaborative projects.",
      color: "text-red-600",
    },
    {
      icon: FiStar,
      title: "Achievement System",
      description: "Gamified learning experience with badges, leaderboards, and achievement tracking.",
      color: "text-yellow-600",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content:
        "This platform transformed my learning experience. The coding challenges are engaging and the feedback is incredibly helpful.",
      avatar: "/student-avatar-1.png",
    },
    {
      name: "Dr. Michael Chen",
      role: "Professor, MIT",
      content:
        "As an educator, I appreciate the detailed analytics and how it helps me understand my students' progress better.",
      avatar: "/professor-avatar-1.png",
    },
    {
      name: "Alex Rodriguez",
      role: "Software Developer",
      content: "The skills I developed here directly contributed to landing my dream job. Highly recommended!",
      avatar: "/developer-avatar-1.png",
    },
  ]

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "1K+", label: "Institutions" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-full bg-background">
      {/* Hero Section */}
      <section className="relative md:pt-40 pt-28  pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Unlock Your
              <span className="text-primary block">Learning Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Innovative assessments and performance tracking for academic excellence. Join thousands of students
              achieving their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="ring-2 cursor-pointer text-black hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                <FiPlay className="w-5 h-5" />
                Explore Features
              </button>
              <button className="cursor-pointer bg-secondary text-shadow-white hover:bg-secondary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                <FiArrowRight className="w-5 h-5" />
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Modern Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to excel in your academic journey, powered by cutting-edge technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-border"
              >
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Community Says</h2>
            <p className="text-xl text-muted-foreground">Join thousands of satisfied students and educators</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-sm border border-border">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar || "./developer-avatar-1.png"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-500 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of learners and start your journey to academic excellence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md ">
              <h3 className="font-semibold mb-4">Get Started Free</h3>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <FiCheck className="w-4 h-4" />
                  <span>Access to all basic features</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="w-4 h-4" />
                  <span>Community support</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="w-4 h-4" />
                  <span>Progress tracking</span>
                </div>
              </div>
              <Link to={"/auth/login"} className="mt-10 w-full bg-blue-600  text-white cursor-pointer hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold  transition-colors duration-200">
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
