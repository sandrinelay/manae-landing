export interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
}

export type WaitlistFormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface WaitlistFormState {
  status: WaitlistFormStatus;
  errorMessage: string | null;
}

export interface WaitlistSubmissionResult {
  success: boolean;
  message: string;
}
