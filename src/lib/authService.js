import { supabase } from "../config/supabase-config";

/**
 * Handles Supabase user registration
 */
export async function registerUser({
	email,
	password,
	name,
	surname,
	nickname,
}) {
	try {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					name,
					surname,
					nickname,
				},
			},
		});

		if (error) {
			if (error.message.toLowerCase().includes("already registered")) {
				return { error: "This email is already registered." };
			}
			return { error: error.message };
		}

		// ✅ Success
		console.log("✅ Supabase signup response:", data);
		return { user: data.user, session: data.session };
	} catch (err) {
		console.error("⚠️ Unexpected signup error:", err);
		return {
			error:
				err.message ||
				"An unexpected error occurred during registration.",
		};
	}
}

/**
 * Handles Supabase user login
 */
export async function loginUser({ email, password }) {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			if (
				error.message
					.toLowerCase()
					.includes("invalid login credentials")
			) {
				return { error: "Incorrect email or password." };
			}
			return { error: error.message };
		}

		console.log("✅ Supabase login response:", data);
		return { user: data.user, session: data.session };
	} catch (err) {
		console.error("⚠️ Unexpected login error:", err);
		return {
			error: err.message || "An unexpected error occurred during login.",
		};
	}
}
