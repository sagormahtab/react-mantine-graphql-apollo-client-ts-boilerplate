import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ContactMessage {
	id: string;
	name: string;
	email: string;
	subject: string;
	message: string;
	createdAt: string;
}

interface ContactState {
	messages: ContactMessage[];
	isSubmitting: boolean;
	submitMessage: (
		data: Omit<ContactMessage, "id" | "createdAt">,
	) => Promise<void>;
	clearMessages: () => void;
}

const useContactStore = create<ContactState>()(
	persist(
		(set) => ({
			messages: [],
			isSubmitting: false,

			submitMessage: async (data) => {
				try {
					set({ isSubmitting: true });
					// TODO: Implement actual API call
					// const response = await apiClient.post("/contact", data);

					const newMessage: ContactMessage = {
						...data,
						id: crypto.randomUUID(),
						createdAt: new Date().toISOString(),
					};

					set((state) => ({
						messages: [...state.messages, newMessage],
						isSubmitting: false,
					}));

					console.log("Message submitted successfully", newMessage);
				} catch (error) {
					set({ isSubmitting: false });
					console.error("Message submission failed:", error);
					throw error;
				}
			},

			clearMessages: () => set({ messages: [] }),
		}),
		{
			name: "contact-storage",
			partialize: (state) => ({
				messages: state.messages,
			}),
		},
	),
);

export default useContactStore;
