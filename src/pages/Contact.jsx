export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Have a question, suggestion, or just want to say hi? We're here to help!
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="John Doe" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="you@example.com" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea className="w-full border border-gray-300 rounded-md px-4 py-2" rows="4" placeholder="Write your message here..."></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-gray-600 text-sm">
          <p>📍 Office: 123 Redstore Street, Cityville, 56789</p>
          <p>📞 Phone: +1 (123) 456-7890</p>
          <p>✉️ Email: support@redstore.com</p>
        </div>
      </div>
    </div>
  );
}
