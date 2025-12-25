'use client';

import { useState, useCallback } from 'react';
import {
  WaitlistFormData,
  WaitlistFormState,
} from '@/types/waitlist.types';
import { submitWaitlistEntry } from '@/services/waitlistService';

const initialFormData: WaitlistFormData = {
  firstName: '',
  lastName: '',
  email: '',
};

const initialState: WaitlistFormState = {
  status: 'idle',
  errorMessage: null,
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function useWaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>(initialFormData);
  const [state, setState] = useState<WaitlistFormState>(initialState);

  const updateField = useCallback(
    (field: keyof WaitlistFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Reset error on field change
      if (state.status === 'error') {
        setState(initialState);
      }
    },
    [state.status]
  );

  const validate = useCallback((): string | null => {
    if (!formData.firstName.trim()) {
      return 'Le prénom est requis';
    }
    if (!formData.lastName.trim()) {
      return 'Le nom est requis';
    }
    if (!formData.email.trim()) {
      return "L'email est requis";
    }
    if (!isValidEmail(formData.email)) {
      return "L'email n'est pas valide";
    }
    return null;
  }, [formData]);

  const submit = useCallback(async (): Promise<boolean> => {
    const validationError = validate();
    if (validationError) {
      setState({ status: 'error', errorMessage: validationError });
      return false;
    }

    setState({ status: 'loading', errorMessage: null });

    const result = await submitWaitlistEntry(formData);

    if (result.success) {
      setState({ status: 'success', errorMessage: null });
      return true;
    } else {
      setState({ status: 'error', errorMessage: result.message });
      return false;
    }
  }, [formData, validate]);

  const reset = useCallback(() => {
    setFormData(initialFormData);
    setState(initialState);
  }, []);

  return {
    formData,
    status: state.status,
    errorMessage: state.errorMessage,
    updateField,
    submit,
    reset,
    isLoading: state.status === 'loading',
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
  };
}
