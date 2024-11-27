import Image from 'next/image'

export default function About() {
  return (
    <>
    <img src='/images.jpg'/>
      <h2>
        About Us – <span id="Liv_Name">Hackathon Website</span>
      </h2>

      <h3>Our Founder</h3>

      <p id="Liv_Founder">
        Ajay Singh, a full time software developer, established BlogEarns in
        2021. With over a decade of experience in content creation and online
        monetization, Ajay recognized the need for a platform that empowers
        bloggers to turn their passion into profit.
      </p>

      <h3>Company History</h3>

      <p id="Liv_History">
        BlogEarns began as a small startup in Ajay's home office. Over the
        years, we've grown into a thriving company with a team of dedicated
        professionals. Our journey has been marked by continuous innovation and
        a commitment to helping bloggers succeed.
      </p>

      <h3>Our Mission</h3>

      <p id="Liv_Mission">
        At BlogEarns, our mission is to equip bloggers with the knowledge,
        tools, and support they need to create successful and profitable blogs.
        We believe in the power of quality content and aim to foster a community
        of skilled, ethical, and prosperous content creators.
      </p>

      <h3>Meet Our Team</h3>
      <ol>
        <li>
          <b>
            <span id="Liv_Member1">Ajay Singh</span>
          </b>
          <span id="Liv_Member1Role">
            Technical Support Manager, and Content Creator (Experience: 13
            Years)
          </span>
        </li>
        <li>
          <b>
            <span id="Liv_Member2">Karuna Singh</span>
          </b>
          <span id="Liv_Member2Role">
            Content Strategy Director, Community Manager (Experience: 8 Years)
          </span>
        </li>
      </ol>

      <h3>Contact Information</h3>
      <Image src='/elephant-2729413_640.jpg' width={1000} height={500} alt='Elephant Picture'/>
      <ul>
        <li>
          <b>Email:</b>
          <span id="Liv_Email">
            <a href="mailto:support@blogearns.com">Official Email Id</a>
          </span>
        </li>
        <li>
          <b>Phone:</b>
          <span id="Liv_Phone">
            <a href="tel:8899776655">Office Phone Number</a>
          </span>
        </li>
        <li>
          <b>Website:</b>
          <span id="Liv_URL">
            <a href="https://www.blogearns.com/">Offial Website</a>
          </span>
        </li>
      </ul>

      <h3>Connect With Us</h3>

      <div className="table-is-responsive">
        <table>
          <tbody>
            <tr>
              <th>Facebook</th>
              <td id="Liv_Facebook">
                <a href="Facebook" handle="" url="">
                  Official Facebook Page
                </a>
              </td>
            </tr>
            <tr>
              <th>Twitter</th>
              <td id="Liv_Twitter">
                <a href="Twitter" handle="" url="">
                  Official Twitter Handle
                </a>
              </td>
            </tr>
            <tr>
              <th>LinkedIn</th>
              <td id="Liv_LinkedIn">
                <a href="LinkedIn" handle="" url="">
                  Official LinkedIn ID
                </a>
              </td>
            </tr>
            <tr>
              <th>Instagram</th>
              <td id="Liv_Instagram">
                <a href="Instagram" handle="" url="">
                  Official Instagram ID
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
