import { useNavigate } from "react-router-dom";

const ContactInfo = () => {
  const navigate = useNavigate();

  const handleScheduleClick = () => {
    navigate("/contact");
  };

  return (
    <div style={{ background: "#fff", padding: "40px", minHeight: "70vh" }}>
      <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "24px", marginLeft : '24px',
 }}>Contact</h2>

      <div
        style={{
          border: "1px solid #333",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "32px",
          width: "95%",
          margin: "0 auto",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#1a1a1a", color: "#ccc" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>Contact</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Detail</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#fff" }}>
            <tr style={{ borderTop: "1px solid #333" }}>
              <td style={{ padding: "12px" }}>Address</td>
              <td style={{ padding: "12px" }}>Hyderabad, TG, India</td>
            </tr>
            <tr style={{ borderTop: "1px solid #333" }}>
              <td style={{ padding: "12px" }}>Timezone</td>
              <td style={{ padding: "12px" }}>GMT+5.30</td>
            </tr>
            <tr style={{ borderTop: "1px solid #333" }}>
              <td style={{ padding: "12px" }}>E-mail Official</td>
              <td style={{ padding: "12px" }}>
                📧{" "}
                <a
                  href="mailto:connect.harshalmten@gmail.com"
                  style={{ color: "#4da6ff", textDecoration: "underline" }}
                >
                  Harshalmten@gmail.com
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ color: "#ccc", marginBottom: "24px" ,width: "95%",
          margin: "24px auto",}}>
        If you need any further information, such as my phone number, please do not hesitate to send me an email first.
      </p>

      <button
        onClick={handleScheduleClick}
        style={{
          backgroundColor: "#2563eb",
          padding: "12px 24px",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginLeft : '24px',
        }}
      >
        Schedule a Call
      </button>
    </div>
  );
};

export default ContactInfo;
