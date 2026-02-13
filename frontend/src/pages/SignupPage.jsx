import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
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

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            await signup({
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                password: formData.password
            });
            navigate("/signin"); // Redirect to login after signup
        } catch (err) {
            setError(err.message || "Failed to create account");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{
            minHeight: "100vh",
            background: "#f9fafb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1rem",
        }}>
            <div style={{
                width: "100%",
                maxWidth: "450px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                padding: "2.5rem 2rem",
            }}>
                {/* Header */}
                <div style={{ marginBottom: "1.5rem" }}>
                    <h1 style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#000",
                        margin: "0 0 0.5rem 0",
                    }}>
                        Sign Up
                    </h1>
                    <p style={{
                        color: "#6b7280",
                        fontSize: "0.875rem",
                        margin: 0,
                    }}>
                        Create your account to start managing your schemes.
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div style={{
                        backgroundColor: '#fee2e2',
                        border: '1px solid #fca5a5',
                        color: '#dc2626',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        marginBottom: '1rem',
                        fontSize: '0.875rem',
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {/* First Name and Last Name Row */}
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <div style={{ flex: 1 }}>
                            <label
                                htmlFor="firstName"
                                style={{
                                    display: "block",
                                    fontSize: "0.875rem",
                                    color: "#374151",
                                    marginBottom: "0.5rem",
                                    fontWeight: "500",
                                }}
                            >
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                required
                                value={formData.firstName}
                                onChange={(e) => handleInputChange("firstName", e.target.value)}
                                onFocus={() => setFocusedField("firstName")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="First name"
                                style={{
                                    width: "100%",
                                    padding: "0.625rem 0.75rem",
                                    backgroundColor: "white",
                                    border: focusedField === "firstName" ? "1px solid #000" : "1px solid #d1d5db",
                                    borderRadius: "0.375rem",
                                    color: "#000",
                                    fontSize: "0.875rem",
                                    outline: "none",
                                    transition: "border-color 0.2s",
                                }}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label
                                htmlFor="lastName"
                                style={{
                                    display: "block",
                                    fontSize: "0.875rem",
                                    color: "#374151",
                                    marginBottom: "0.5rem",
                                    fontWeight: "500",
                                }}
                            >
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                required
                                value={formData.lastName}
                                onChange={(e) => handleInputChange("lastName", e.target.value)}
                                onFocus={() => setFocusedField("lastName")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Last name"
                                style={{
                                    width: "100%",
                                    padding: "0.625rem 0.75rem",
                                    backgroundColor: "white",
                                    border: focusedField === "lastName" ? "1px solid #000" : "1px solid #d1d5db",
                                    borderRadius: "0.375rem",
                                    color: "#000",
                                    fontSize: "0.875rem",
                                    outline: "none",
                                    transition: "border-color 0.2s",
                                }}
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            style={{
                                display: "block",
                                fontSize: "0.875rem",
                                color: "#374151",
                                marginBottom: "0.5rem",
                                fontWeight: "500",
                            }}
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter your email, e.g. example@gmail.com"
                            style={{
                                width: "100%",
                                padding: "0.625rem 0.75rem",
                                backgroundColor: "white",
                                border: focusedField === "email" ? "1px solid #000" : "1px solid #d1d5db",
                                borderRadius: "0.375rem",
                                color: "#000",
                                fontSize: "0.875rem",
                                outline: "none",
                                transition: "border-color 0.2s",
                            }}
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor="password"
                            style={{
                                display: "block",
                                fontSize: "0.875rem",
                                color: "#374151",
                                marginBottom: "0.5rem",
                                fontWeight: "500",
                            }}
                        >
                            Password
                        </label>
                        <div style={{ position: "relative" }}>
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                required
                                value={formData.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                                onFocus={() => setFocusedField("password")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Enter your password"
                                style={{
                                    width: "100%",
                                    padding: "0.625rem 0.75rem",
                                    paddingRight: "2.5rem",
                                    backgroundColor: "white",
                                    border: focusedField === "password" ? "1px solid #000" : "1px solid #d1d5db",
                                    borderRadius: "0.375rem",
                                    color: "#000",
                                    fontSize: "0.875rem",
                                    outline: "none",
                                    transition: "border-color 0.2s",
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
                                    color: "#6b7280",
                                    cursor: "pointer",
                                    padding: 0,
                                }}
                            >
                                {showPassword ? (
                                    <EyeOff style={{ width: "1.125rem", height: "1.125rem" }} />
                                ) : (
                                    <Eye style={{ width: "1.125rem", height: "1.125rem" }} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            style={{
                                display: "block",
                                fontSize: "0.875rem",
                                color: "#374151",
                                marginBottom: "0.5rem",
                                fontWeight: "500",
                            }}
                        >
                            Confirm Password
                        </label>
                        <div style={{ position: "relative" }}>
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                value={formData.confirmPassword}
                                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                onFocus={() => setFocusedField("confirmPassword")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Confirm your password"
                                style={{
                                    width: "100%",
                                    padding: "0.625rem 0.75rem",
                                    paddingRight: "2.5rem",
                                    backgroundColor: "white",
                                    border: focusedField === "confirmPassword" ? "1px solid #000" : "1px solid #d1d5db",
                                    borderRadius: "0.375rem",
                                    color: "#000",
                                    fontSize: "0.875rem",
                                    outline: "none",
                                    transition: "border-color 0.2s",
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
                                    color: "#6b7280",
                                    cursor: "pointer",
                                    padding: 0,
                                }}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff style={{ width: "1.125rem", height: "1.125rem" }} />
                                ) : (
                                    <Eye style={{ width: "1.125rem", height: "1.125rem" }} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            padding: "0.75rem",
                            background: "#000",
                            border: "none",
                            borderRadius: "0.375rem",
                            color: "white",
                            fontWeight: "600",
                            fontSize: "0.9375rem",
                            cursor: loading ? "not-allowed" : "pointer",
                            opacity: loading ? 0.7 : 1,
                            transition: "opacity 0.2s",
                        }}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

                {/* Sign In Link */}
                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>
                        Already have an account?{" "}
                        <Link
                            to="/signin"
                            style={{
                                color: "#000",
                                textDecoration: "none",
                                fontWeight: "500",
                            }}
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
