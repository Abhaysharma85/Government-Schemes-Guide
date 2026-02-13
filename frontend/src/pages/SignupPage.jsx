import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Github, Chrome } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [focusedField, setFocusedField] = useState(null)
    const { signup } = useAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            await signup({
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
            });
            navigate("/"); // Redirect to home after signup
        } catch (err) {
            setError("Failed to create account");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const cardStyle = {
        width: "100%",
        maxWidth: "28rem",
        backgroundColor: "rgba(30, 41, 59, 0.5)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
        borderRadius: "1rem",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        position: "relative",
        zIndex: 10,
        animation: "slideInFromBottom 1s ease-out",
        padding: "2rem",
    }

    const inputStyle = (focused) => ({
        width: "100%",
        padding: "0.75rem",
        paddingLeft: "2.5rem",
        backgroundColor: "rgba(51, 65, 85, 0.5)",
        border: focused ? "1px solid #a855f7" : "1px solid #475569",
        borderRadius: "0.5rem",
        color: "white",
        fontSize: "0.875rem",
        outline: "none",
        transition: "all 0.3s ease",
        boxShadow: focused ? "0 0 0 3px rgba(168, 85, 247, 0.1)" : "none",
    })

    const buttonStyle = {
        width: "100%",
        padding: "0.75rem 1rem",
        background: "linear-gradient(to right, #a855f7, #ec4899)",
        border: "none",
        borderRadius: "0.5rem",
        color: "white",
        fontWeight: "600",
        fontSize: "0.875rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
    }

    const socialButtonStyle = {
        flex: 1,
        padding: "0.75rem",
        backgroundColor: "rgba(51, 65, 85, 0.5)",
        border: "1px solid #475569",
        borderRadius: "0.5rem",
        color: "#cbd5e1",
        fontSize: "0.875rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
    }

    const particles = []
    for (let i = 0; i < 20; i++) {
        particles.push({
            id: i,
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            delay: Math.random() * 2 + "s",
            duration: 3 + Math.random() * 4 + "s",
        })
    }

    return (
        <>
            <style >{`
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        .floating-particle {
          animation: float 3s ease-in-out infinite;
        }
        .pulse-bg {
          animation: pulse 3s ease-in-out infinite;
        }
        .pulse-bg-delay-1 {
          animation: pulse 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        .pulse-bg-delay-2 {
          animation: pulse 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .hover-scale-110:hover {
          transform: scale(1.1);
        }
        .group:hover .group-hover-translate {
          transform: translateX(0.25rem);
        }
        .social-button:hover {
          background-color: rgba(71, 85, 105, 0.5);
          color: white;
          transform: scale(1.05);
        }
        .main-button:hover {
          background: linear-gradient(to right, #9333ea, #db2777);
          transform: scale(1.05);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
        }
        .main-button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
      `}</style>

            <div
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Animated background elements */}
                <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                    <div
                        className="pulse-bg"
                        style={{
                            position: "absolute",
                            top: "-10rem",
                            right: "-10rem",
                            width: "20rem",
                            height: "20rem",
                            backgroundColor: "#a855f7",
                            borderRadius: "50%",
                            mixBlendMode: "multiply",
                            filter: "blur(4rem)",
                            opacity: 0.2,
                        }}
                    />
                    <div
                        className="pulse-bg-delay-1"
                        style={{
                            position: "absolute",
                            bottom: "-10rem",
                            left: "-10rem",
                            width: "20rem",
                            height: "20rem",
                            backgroundColor: "#3b82f6",
                            borderRadius: "50%",
                            mixBlendMode: "multiply",
                            filter: "blur(4rem)",
                            opacity: 0.2,
                        }}
                    />
                    <div
                        className="pulse-bg-delay-2"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "20rem",
                            height: "20rem",
                            backgroundColor: "#ec4899",
                            borderRadius: "50%",
                            mixBlendMode: "multiply",
                            filter: "blur(4rem)",
                            opacity: 0.1,
                        }}
                    />
                </div>

                {/* Floating particles */}
                <div style={{ position: "absolute", inset: 0 }}>
                    {particles.map((particle) => (
                        <div
                            key={particle.id}
                            className="floating-particle"
                            style={{
                                position: "absolute",
                                width: "4px",
                                height: "4px",
                                backgroundColor: "white",
                                borderRadius: "50%",
                                opacity: 0.3,
                                left: particle.left,
                                top: particle.top,
                                animationDelay: particle.delay,
                                animationDuration: particle.duration,
                            }}
                        />
                    ))}
                </div>

                <div style={cardStyle}>
                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <Link to="/"
                            className="hover-scale-110"
                            style={{
                                width: "3rem",
                                height: "3rem",
                                background: "linear-gradient(to right, #a855f7, #ec4899)",
                                borderRadius: "0.75rem",
                                margin: "0 auto 1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "transform 0.3s ease",
                                textDecoration: "none"
                            }}
                        >
                            <User style={{ width: "1.5rem", height: "1.5rem", color: "white" }} />
                        </Link>
                        <h1
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                color: "white",
                                margin: "0 0 0.5rem 0",
                            }}
                        >
                            Create Account
                        </h1>
                        <p
                            style={{
                                color: "#94a3b8",
                                fontSize: "0.875rem",
                                margin: 0,
                            }}
                        >
                            Join us today and start your journey
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div style={{
                            backgroundColor: 'rgba(239, 68, 68, 0.2)',
                            border: '1px solid #ef4444',
                            color: '#fca5a5',
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            marginBottom: '1rem',
                            fontSize: '0.875rem',
                            textAlign: 'center'
                        }}>
                            {error}
                        </div>
                    )}

                    {/* Social Login Buttons */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "0.75rem",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <button className="social-button hover-scale" style={socialButtonStyle}>
                            <Github style={{ width: "1rem", height: "1rem" }} />
                            GitHub
                        </button>
                        <button className="social-button hover-scale" style={socialButtonStyle}>
                            <Chrome style={{ width: "1rem", height: "1rem" }} />
                            Google
                        </button>
                    </div>

                    {/* Divider */}
                    <div
                        style={{
                            position: "relative",
                            marginBottom: "1.5rem",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                flex: 1,
                                height: "1px",
                                backgroundColor: "#475569",
                            }}
                        />
                        <span
                            style={{
                                backgroundColor: "#1e293b",
                                padding: "0 0.5rem",
                                color: "#94a3b8",
                                fontSize: "0.75rem",
                                textTransform: "uppercase",
                            }}
                        >
                            Or continue with
                        </span>
                        <div
                            style={{
                                flex: 1,
                                height: "1px",
                                backgroundColor: "#475569",
                            }}
                        />
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {/* Name Fields */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                            <div style={{ position: "relative" }}>
                                <label
                                    htmlFor="firstName"
                                    style={{
                                        display: "block",
                                        fontSize: "0.875rem",
                                        color: focusedField === "firstName" ? "#c084fc" : "#94a3b8",
                                        marginBottom: "0.5rem",
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    First Name
                                </label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        id="firstName"
                                        type="text"
                                        required
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                                        onFocus={() => setFocusedField("firstName")}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="John"
                                        style={{
                                            ...inputStyle(focusedField === "firstName"),
                                            paddingLeft: "0.75rem",
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            height: "2px",
                                            background: "linear-gradient(to right, #a855f7, #ec4899)",
                                            transition: "width 0.3s ease",
                                            width: focusedField === "firstName" ? "100%" : "0%",
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ position: "relative" }}>
                                <label
                                    htmlFor="lastName"
                                    style={{
                                        display: "block",
                                        fontSize: "0.875rem",
                                        color: focusedField === "lastName" ? "#c084fc" : "#94a3b8",
                                        marginBottom: "0.5rem",
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    Last Name
                                </label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        id="lastName"
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                                        onFocus={() => setFocusedField("lastName")}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Doe"
                                        style={{
                                            ...inputStyle(focusedField === "lastName"),
                                            paddingLeft: "0.75rem",
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            height: "2px",
                                            background: "linear-gradient(to right, #a855f7, #ec4899)",
                                            transition: "width 0.3s ease",
                                            width: focusedField === "lastName" ? "100%" : "0%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email Field */}
                        <div style={{ position: "relative" }}>
                            <label
                                htmlFor="email"
                                style={{
                                    display: "block",
                                    fontSize: "0.875rem",
                                    color: focusedField === "email" ? "#c084fc" : "#94a3b8",
                                    marginBottom: "0.5rem",
                                    transition: "color 0.2s ease",
                                }}
                            >
                                Email
                            </label>
                            <div style={{ position: "relative" }}>
                                <Mail
                                    style={{
                                        position: "absolute",
                                        left: "0.75rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: "1rem",
                                        height: "1rem",
                                        color: focusedField === "email" ? "#c084fc" : "#94a3b8",
                                        transition: "color 0.2s ease",
                                    }}
                                />
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    onFocus={() => setFocusedField("email")}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="john@example.com"
                                    style={inputStyle(focusedField === "email")}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        height: "2px",
                                        background: "linear-gradient(to right, #a855f7, #ec4899)",
                                        transition: "width 0.3s ease",
                                        width: focusedField === "email" ? "100%" : "0%",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div style={{ position: "relative" }}>
                            <label
                                htmlFor="password"
                                style={{
                                    display: "block",
                                    fontSize: "0.875rem",
                                    color: focusedField === "password" ? "#c084fc" : "#94a3b8",
                                    marginBottom: "0.5rem",
                                    transition: "color 0.2s ease",
                                }}
                            >
                                Password
                            </label>
                            <div style={{ position: "relative" }}>
                                <Lock
                                    style={{
                                        position: "absolute",
                                        left: "0.75rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: "1rem",
                                        height: "1rem",
                                        color: focusedField === "password" ? "#c084fc" : "#94a3b8",
                                        transition: "color 0.2s ease",
                                    }}
                                />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={(e) => handleInputChange("password", e.target.value)}
                                    onFocus={() => setFocusedField("password")}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="••••••••"
                                    style={{
                                        ...inputStyle(focusedField === "password"),
                                        paddingRight: "2.5rem",
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: "absolute",
                                        right: "0.75rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        background: "none",
                                        border: "none",
                                        color: "#94a3b8",
                                        cursor: "pointer",
                                        transition: "color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                                >
                                    {showPassword ? (
                                        <EyeOff style={{ width: "1rem", height: "1rem" }} />
                                    ) : (
                                        <Eye style={{ width: "1rem", height: "1rem" }} />
                                    )}
                                </button>
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        height: "2px",
                                        background: "linear-gradient(to right, #a855f7, #ec4899)",
                                        transition: "width 0.3s ease",
                                        width: focusedField === "password" ? "100%" : "0%",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div style={{ position: "relative" }}>
                            <label
                                htmlFor="confirmPassword"
                                style={{
                                    display: "block",
                                    fontSize: "0.875rem",
                                    color: focusedField === "confirmPassword" ? "#c084fc" : "#94a3b8",
                                    marginBottom: "0.5rem",
                                    transition: "color 0.2s ease",
                                }}
                            >
                                Confirm Password
                            </label>
                            <div style={{ position: "relative" }}>
                                <Lock
                                    style={{
                                        position: "absolute",
                                        left: "0.75rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: "1rem",
                                        height: "1rem",
                                        color: focusedField === "confirmPassword" ? "#c084fc" : "#94a3b8",
                                        transition: "color 0.2s ease",
                                    }}
                                />
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                    onFocus={() => setFocusedField("confirmPassword")}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="••••••••"
                                    style={{
                                        ...inputStyle(focusedField === "confirmPassword"),
                                        paddingRight: "2.5rem",
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    style={{
                                        position: "absolute",
                                        right: "0.75rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        background: "none",
                                        border: "none",
                                        color: "#94a3b8",
                                        cursor: "pointer",
                                        transition: "color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff style={{ width: "1rem", height: "1rem" }} />
                                    ) : (
                                        <Eye style={{ width: "1rem", height: "1rem" }} />
                                    )}
                                </button>
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        height: "2px",
                                        background: "linear-gradient(to right, #a855f7, #ec4899)",
                                        transition: "width 0.3s ease",
                                        width: focusedField === "confirmPassword" ? "100%" : "0%",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="main-button group" style={buttonStyle} disabled={loading}>
                            {loading ? "Creating Account..." : "Create Account"}
                            {!loading && <ArrowRight
                                className="group-hover-translate"
                                style={{
                                    width: "1rem",
                                    height: "1rem",
                                    transition: "transform 0.2s ease",
                                }}
                            />}
                        </button>
                    </form>

                    {/* Terms */}
                    <p
                        style={{
                            fontSize: "0.75rem",
                            color: "#94a3b8",
                            textAlign: "center",
                            margin: "1.5rem 0 1rem 0",
                        }}
                    >
                        By creating an account, you agree to our{" "}
                        <Link
                            to="/terms"
                            style={{
                                color: "#c084fc",
                                textDecoration: "none",
                                transition: "color 0.2s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#d8b4fe")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#c084fc")}
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            to="/privacy"
                            style={{
                                color: "#c084fc",
                                textDecoration: "none",
                                transition: "color 0.2s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#d8b4fe")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#c084fc")}
                        >
                            Privacy Policy
                        </Link>
                    </p>

                    {/* Sign In Link */}
                    <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#94a3b8", fontSize: "0.875rem", margin: 0 }}>
                            Already have an account?{" "}
                            <Link
                                to="/signin"
                                style={{
                                    color: "#c084fc",
                                    textDecoration: "none",
                                    fontWeight: "600",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#d8b4fe")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#c084fc")}
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
