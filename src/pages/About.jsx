import { FaRocket, FaUsers, FaLeaf, FaShieldAlt } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-dark-surface text-gray-800 dark:text-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Redstore</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Redstore is a modern e-commerce platform dedicated to offering you the best in fashion, electronics, and lifestyle with fast delivery and unbeatable prices.
          </p>
        </div>
        {/* What We Do Section (Centered) */}
<div className="text-center max-w-3xl mx-auto mb-20">
  <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
  <p className="text-gray-700 dark:text-gray-300 mb-4">
    At Redstore, we connect top brands with everyday shoppers through a seamless online experience.
    Our platform is built for speed, performance, and simplicity.
  </p>
  <p className="text-gray-700 dark:text-gray-300">
    With hundreds of products and thousands of happy customers, we are redefining how online shopping works by focusing on user trust and transparency.
  </p>
</div>



        {/* Our Values Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white dark:bg-dark-card rounded-lg shadow">
              <FaRocket className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Innovation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Always improving and building better experiences.</p>
            </div>
            <div className="p-6 bg-white dark:bg-dark-card rounded-lg shadow">
              <FaUsers className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Customer First</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Your satisfaction is our top priority.</p>
            </div>
            <div className="p-6 bg-white dark:bg-dark-card rounded-lg shadow">
              <FaLeaf className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Sustainability</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Committed to ethical sourcing and eco practices.</p>
            </div>
            <div className="p-6 bg-white dark:bg-dark-card rounded-lg shadow">
              <FaShieldAlt className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Trust & Security</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Secure payments, data privacy, and guaranteed delivery.</p>
            </div>
          </div>
        </div>

        {/* Meet the Team (Optional) */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { name: 'Anita Dsouza', role: 'CEO', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
              { name: 'Ravi Kumar', role: 'CTO', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
              { name: 'Sara Ali', role: 'Marketing Lead', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
            ].map((person) => (
              <div key={person.name} className="bg-white dark:bg-dark-card rounded-lg p-6 shadow">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary object-cover"
                />
                <h3 className="font-semibold text-lg">{person.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary text-white p-10 rounded-xl text-center shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Want to know more?</h2>
          <p className="mb-4">Explore our products and enjoy exclusive deals on your favorite brands.</p>
          <a
            href="/"
            className="bg-white text-primary font-semibold px-6 py-2 rounded-full shadow hover:bg-opacity-90 transition"
          >
            Visit Store
          </a>
        </div>
      </div>
    </div>
  );
}
