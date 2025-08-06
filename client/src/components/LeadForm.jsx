import { useForm } from "react-hook-form";

const LeadForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }

            const result = await response.json();
            console.log('Success:', result);

            reset(); // Clear form
            alert('✅ Demo request submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('❌ Failed to submit. Try again.');
        }
    };

    return (
        <section id="lead" className="bg-gray-100 py-20 px-6 text-center">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-6">Get a Free Demo</h2>

                {isSubmitSuccessful && (
                    <p className="text-green-600 mb-4">✅ Form submitted successfully!</p>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
                    {/* Name */}
                    <div>
                        <label className="block mb-1 font-medium">Name *</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            className="w-full border px-4 py-2 rounded"
                            type="text"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium">Email *</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format",
                                },
                            })}
                            className="w-full border px-4 py-2 rounded"
                            type="email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1 font-medium">Phone</label>
                        <input
                            {...register("phone")}
                            className="w-full border px-4 py-2 rounded"
                            type="tel"
                        />
                    </div>

                    {/* Business Type */}
                    <div>
                        <label className="block mb-1 font-medium">Business Type *</label>
                        <select
                            {...register("businessType", { required: "Business type is required" })}
                            className="w-full border px-4 py-2 rounded"
                        >
                            <option value="">Select</option>
                            <option value="Freelancer">Freelancer</option>
                            <option value="Coach">Coach</option>
                            <option value="Small Business">Small Business</option>
                            <option value="Ecommerce">Ecommerce</option>
                        </select>
                        {errors.businessType && (
                            <p className="text-red-500 text-sm">{errors.businessType.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            {...register("message")}
                            className="w-full border px-4 py-2 rounded"
                            rows={4}
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default LeadForm;
