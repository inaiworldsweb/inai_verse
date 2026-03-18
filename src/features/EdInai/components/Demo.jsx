import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    institutionName: "",
    institutionWebsite: "",
    institutionType: "",
    role: "",
    studentCapacity: "",
};

const officialEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const blockedDomains = new Set([
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "live.com",
    "icloud.com",
    "proton.me",
    "protonmail.com",
]);

const getEmailError = (email) => {
    if (!email) return "Email address is required.";
    if (!officialEmailRegex.test(email)) return "Enter a valid email address.";
    const domain = email.split("@")[1]?.toLowerCase();
    // if (!domain || blockedDomains.has(domain)) {
    //   return 'Please use your official institution email.';
    // }
    return "";
};

const formatPhone = (value) => {
    const digits = value.replace(/[^\d+]/g, "");
    if (!digits.startsWith("+")) {
        return digits.replace(/[^\d]/g, "");
    }
    return `+${digits.replace(/[^\d]/g, "")}`;
};

export default function Demo({ isOpen, onClose }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialForm);
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        
        // Disable scrolling on both body and html to ensure background is locked
        const originalOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;
        
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = originalOverflow;
            document.documentElement.style.overflow = originalHtmlOverflow;
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen) {
            setFormData(initialForm);
            setTouched({});
            setIsSubmitting(false);
            setSuccessMessage("");
            setErrorMessage("");
        }
    }, [isOpen]);

    const errors = useMemo(() => {
        return {
            fullName: !formData.fullName ? "Full name is required." : "",
            email: getEmailError(formData.email),
            phone: !formData.phone ? "Phone number is required." : "",
        };
    }, [formData]);

    const isValid = useMemo(() => {
        return !errors.fullName && !errors.email && !errors.phone;
    }, [errors]);

    if (!isOpen) return null;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "phone" ? formatPhone(value) : value,
        }));
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage("");
        setTouched({
            fullName: true,
            email: true,
            phone: true,
        });

        if (!isValid) return;

        setIsSubmitting(true);
        try {
            const numberOfStudents = (() => {
                const value = formData.studentCapacity;
                if (!value) return 0;
                if (value.endsWith("+")) return Number.parseInt(value, 10) || 0;
                const parts = value
                    .split("-")
                    .map((part) => Number.parseInt(part, 10))
                    .filter(Boolean);
                if (parts.length === 2) return parts[1];
                return Number.parseInt(value, 10) || 0;
            })();

            const payload = {
                full_name: formData.fullName,
                email_address: formData.email,
                phone_number: formData.phone,
                institution_website: formData.institutionWebsite,
                institution_name: formData.institutionName,
                institution_type: formData.institutionType,
                your_role: formData.role,
                number_of_students: numberOfStudents,
            };

            const baseUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${baseUrl}/demo-details`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Submission failed. Please try again.");
            }

            onClose();
            navigate("/thank-you");
        } catch (error) {
            setErrorMessage(
                error?.message || "Something went wrong. Please try again.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return createPortal(
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-10"
            data-lenis-prevent
        >
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md animate-[fadeIn_220ms_ease-out]"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1221] via-[#07090f] to-[#0b1221] text-white shadow-[0_40px_120px_rgba(0,0,0,0.7)] animate-[scaleIn_220ms_ease-out] custom-scrollbar">
                <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#07090f]/80 backdrop-blur-md px-5 py-4 md:px-8">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                            Book a demo
                        </p>

                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:text-white hover:border-white/60"
                        aria-label="Close modal"
                    >
                        <span className="text-xl leading-none">×</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 px-6 py-6">
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm text-white/70" htmlFor="fullName">
                                Full Name *
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Jane Patel"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-blue-500/60"
                            />
                            {touched.fullName && errors.fullName && (
                                <p className="text-xs text-rose-300">{errors.fullName}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-white/70" htmlFor="email">
                                Email Address *
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="name@institution.edu"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-blue-500/60"
                            />
                            {touched.email && errors.email && (
                                <p className="text-xs text-rose-300">{errors.email}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-white/70" htmlFor="phone">
                                Phone Number *
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="+91 98765 43210"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-blue-500/60"
                            />
                            {touched.phone && errors.phone && (
                                <p className="text-xs text-rose-300">{errors.phone}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label
                                className="text-sm text-white/70"
                                htmlFor="institutionName"
                            >
                                Institution Name
                            </label>
                            <input
                                id="institutionName"
                                name="institutionName"
                                value={formData.institutionName}
                                onChange={handleChange}
                                placeholder="EdTech Academy"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-blue-500/60"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                className="text-sm text-white/70"
                                htmlFor="institutionWebsite"
                            >
                                Institution Website
                            </label>
                            <input
                                id="institutionWebsite"
                                name="institutionWebsite"
                                value={formData.institutionWebsite}
                                onChange={handleChange}
                                placeholder="https://institution.edu"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-blue-500/60"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                className="text-sm text-white/70"
                                htmlFor="institutionType"
                            >
                                Institution Type
                            </label>
                            <select
                                id="institutionType"
                                name="institutionType"
                                value={formData.institutionType}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-[#0b1221] px-4 py-3 text-sm text-white focus:border-blue-500/60"
                            >
                                <option value="">Select</option>
                                <option value="school">School</option>
                                <option value="college">College</option>
                                <option value="coaching">Coaching</option>
                                <option value="university">University</option>
                                <option value="training">Training</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-white/70" htmlFor="role">
                                Your Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-[#0b1221] px-4 py-3 text-sm text-white focus:border-blue-500/60"
                            >
                                <option value="">Select</option>
                                <option value="principal">Principal</option>
                                <option value="dean">Dean</option>
                                <option value="owner">Owner</option>
                                <option value="administrator">Administrator</option>
                                <option value="academic-head">Academic Head</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label
                                className="text-sm text-white/70"
                                htmlFor="studentCapacity"
                            >
                                Student Capacity
                            </label>
                            <select
                                id="studentCapacity"
                                name="studentCapacity"
                                value={formData.studentCapacity}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-[#0b1221] px-4 py-3 text-sm text-white focus:border-blue-500/60"
                            >
                                <option value="">Select</option>
                                <option value="100-500">100-500</option>
                                <option value="500-1000">500-1000</option>
                                <option value="1000-3000">1000-3000</option>
                                <option value="3000+">3000+</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-white/5">
                        <p className="text-xs text-white/40 leading-relaxed max-w-sm">
                            By submitting, you agree to receive a response from the edInai
                            team. Your data is protected by our privacy policy.
                        </p>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto group relative flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 px-10 py-3.5 rounded-[10px] text-sm md:text-[15px] font-bold transition-all duration-300 active:scale-95 shadow-lg shadow-black/20 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? "Submitting..." : "Request a Demo"}
                        </button>
                    </div>

                    {successMessage && (
                        <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100 animate-[fadeIn_200ms_ease-out]">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100 animate-[fadeIn_200ms_ease-out]">
                            {errorMessage}
                        </div>
                    )}
                </form>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
        </div>,
        document.body,
    );
}