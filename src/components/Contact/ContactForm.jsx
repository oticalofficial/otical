import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
// import { FiSend } from "react-icons/fi";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.message) {
            errors.message = "Message is required";
        }
        return errors;
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_tnr0kl7",
                    "template_rud94qm",
                    formData,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                .then((response) => {
                    toast.success("Message sent successfully");
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                })
                .catch((error) => {
                    console.error("FAILED...Got Error", error);
                    console.log("FAILED... Got Log", error);
                    toast.error("Something went wrong. Please try again later.");
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };
    return (
        <div className="p-4 justify-center" id="contact">
            <Toaster />
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
                Let's Connect
            </h2>
            <form

                onSubmit={handleSubmit}
            >
                <div className="mb-4 flex space-x-4">
                    <div className="lg:w-1/2">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full mb-8 px-3 py-2 text-sm appearance-none rounded-lg border border-stone-50/30 bg-transparent focus:outline-none focus:border-primary-500"
                        />
                        {errors.name && (
                            < p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-sm text-red-500"
                            >
                                {errors.name}
                            </ p>
                        )}
                    </div>
                    <div className="lg:w-1/2">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full mb-8 px-3 py-2 text-sm appearance-none rounded-lg border border-stone-50/30 bg-transparent focus:outline-none focus:border-primary-500"
                        />
                        {errors.email && (
                            < p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-sm text-red-500"
                            >
                                {errors.email}
                            </ p>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full mb-8 px-3 py-2 text-sm appearance-none rounded-lg border border-stone-50/30 bg-transparent focus:outline-none focus:border-primary-500"
                        rows="6"
                    />
                    {errors.message && (
                        < p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-sm text-red-500"
                        >
                            {errors.message}
                        </ p>
                    )}
                </div>
                <button
                    type="submit"
                    className={`mb-8 w-full rouded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 focus:outline-none ${isSending ? "cursor-not-allowed opacity-50" : ""
                        } `}
                    disabled={isSending}
                >
                    <div className="flex items-center justify-center gap-2">
                        {isSending ? "Sending..." : "Send Message"}
                        {/* <FiSend /> */}
                    </div>
                </button>
            </ form>
        </div>
    );
};

export default ContactForm;