import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                    <label>Message</label>
                    <textarea id="message" placeholder="Enter your message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
